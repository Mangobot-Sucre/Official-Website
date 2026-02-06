<template>
  <div class="slideshow-container" @mouseenter="pauseAutoPlay" @mouseleave="resumeAutoPlay">
    <div 
      class="slideshow-track" 
      :style="trackStyle"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
      @mouseleave="handleMouseUp"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div
        v-for="(slide, index) in extendedSlides"
        :key="`slide-${index}`"
        class="slide"
        :class="{ 
          active: index === virtualIndex, 
          prev: isPrev(index), 
          next: isNext(index) 
        }"
        :style="getSlideStyle(index)"
      >
        <div class="slide-content">
          <img :src="slide.image" :alt="slide.title" class="slide-image" />
          <div v-if="index === virtualIndex" class="overlay">
            <div class="m-badge">M</div>
          </div>
        </div>
      </div>
    </div>
    
    <button 
      class="nav-button nav-button--left" 
      @click="prev" 
      aria-label="Previous slide"
      :disabled="isTransitioning"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </button>
    <button 
      class="nav-button nav-button--right" 
      @click="next" 
      aria-label="Next slide"
      :disabled="isTransitioning"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const virtualIndex = ref(3) // Start in middle set (index 3 of 9)
const isTransitioning = ref(true)
const autoPlayInterval = ref(null)
const isDragging = ref(false)
const dragStartX = ref(0)
const dragCurrentX = ref(0)
const dragOffset = ref(0)

const slides = ref([
  {
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1470&auto=format&fit=crop',
    title: 'Restaurant Robot Waiter'
  },
  {
    image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=1410&auto=format&fit=crop',
    title: 'Office Robots'
  },
  {
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=1410&auto=format&fit=crop',
    title: 'Quadruped Robot'
  }
])

// Triple slides for seamless infinite loop
const extendedSlides = computed(() => [...slides.value, ...slides.value, ...slides.value])

const isPrev = (index) => index === virtualIndex.value - 1
const isNext = (index) => index === virtualIndex.value + 1

const trackStyle = computed(() => {
  const slideWidth = 48 // vw per slide
  const baseOffset = (virtualIndex.value * -slideWidth) + (50 - slideWidth / 2)
  const dragOffsetVw = (dragOffset.value / window.innerWidth) * 100
  const offset = baseOffset + dragOffsetVw
  
  return {
    transform: `translateX(${offset}vw)`,
    transition: isTransitioning.value && !isDragging.value
      ? 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
      : 'none',
    cursor: isDragging.value ? 'grabbing' : 'grab'
  }
})

const getSlideStyle = (index) => {
  const distance = Math.abs(index - virtualIndex.value)
  if (distance === 0) return {}
  
  // Add subtle parallax effect based on drag
  const parallaxOffset = isDragging.value ? dragOffset.value * 0.1 : 0
  
  return {
    transform: `translateX(${parallaxOffset}px)`
  }
}

const handleIndexReset = () => {
  const len = slides.value.length
  // Silently reset to middle set when reaching edges
  if (virtualIndex.value < len) {
    isTransitioning.value = false
    virtualIndex.value += len
    setTimeout(() => { isTransitioning.value = true }, 50)
  } else if (virtualIndex.value >= len * 2) {
    isTransitioning.value = false
    virtualIndex.value -= len
    setTimeout(() => { isTransitioning.value = true }, 50)
  }
}

const next = () => {
  if (!isTransitioning.value || isDragging.value) return
  isTransitioning.value = true
  virtualIndex.value++
  currentIndex.value = (virtualIndex.value % slides.value.length)
  setTimeout(handleIndexReset, 700)
}

const prev = () => {
  if (!isTransitioning.value || isDragging.value) return
  isTransitioning.value = true
  virtualIndex.value--
  currentIndex.value = (virtualIndex.value % slides.value.length)
  setTimeout(handleIndexReset, 700)
}

// Drag handlers
const handleMouseDown = (e) => {
  isDragging.value = true
  dragStartX.value = e.clientX
  dragCurrentX.value = e.clientX
  isTransitioning.value = false
}

const handleMouseMove = (e) => {
  if (!isDragging.value) return
  dragCurrentX.value = e.clientX
  dragOffset.value = dragCurrentX.value - dragStartX.value
}

const handleMouseUp = () => {
  if (!isDragging.value) return
  
  const threshold = 100 // pixels
  if (Math.abs(dragOffset.value) > threshold) {
    if (dragOffset.value > 0) {
      prev()
    } else {
      next()
    }
  }
  
  isDragging.value = false
  dragOffset.value = 0
  isTransitioning.value = true
}

// Touch handlers
const handleTouchStart = (e) => {
  isDragging.value = true
  dragStartX.value = e.touches[0].clientX
  dragCurrentX.value = e.touches[0].clientX
  isTransitioning.value = false
}

const handleTouchMove = (e) => {
  if (!isDragging.value) return
  dragCurrentX.value = e.touches[0].clientX
  dragOffset.value = dragCurrentX.value - dragStartX.value
}

const handleTouchEnd = () => {
  if (!isDragging.value) return
  
  const threshold = 100
  if (Math.abs(dragOffset.value) > threshold) {
    if (dragOffset.value > 0) {
      prev()
    } else {
      next()
    }
  }
  
  isDragging.value = false
  dragOffset.value = 0
  isTransitioning.value = true
}

// Auto-play
const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(() => {
    next()
  }, 5000) // Change slide every 5 seconds
}

const pauseAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

const resumeAutoPlay = () => {
  if (!autoPlayInterval.value) {
    startAutoPlay()
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  pauseAutoPlay()
})
</script>

<style scoped>
.slideshow-container {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  background: #fafafa;
  /* Subtle grid pattern with pinkish-purple top gradient */
  background-image: 
    linear-gradient(to bottom, rgba(255, 192, 203, 0.15) 0%, rgba(255, 192, 203, 0.06) 100px, transparent 200px),
    linear-gradient(to right, #e8e8e8 1px, transparent 1px),
    linear-gradient(to bottom, #e8e8e8 1px, transparent 1px);
  background-size: 100% 100%, 64px 64px, 64px 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slideshow-track {
  display: flex;
  align-items: center;
  will-change: transform;
  width: 100%;
  height: 100%;
  user-select: none;
  -webkit-user-select: none;
}

.slide {
  flex: 0 0 48vw;
  margin: 0 -16vw; /* Heavy overlap for depth effect */
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0.3;
  filter: blur(8px) brightness(0.65) saturate(0.35);
  transform: scale(0.6);
  position: relative;
  z-index: 1;
  will-change: transform, opacity, filter;
}

/* Left slide fade from left edge */
.slide.prev {
  mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.3) 15%, black 45%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.3) 15%, black 45%);
}

/* Right slide fade from right edge */
.slide.next {
  mask-image: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.3) 15%, black 45%);
  -webkit-mask-image: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.3) 15%, black 45%);
}

.slide.active {
  opacity: 1;
  filter: blur(0) brightness(1) saturate(1);
  transform: scale(1);
  z-index: 10;
  margin: 0 16vw; /* Clear space for active slide */
  mask-image: none;
  -webkit-mask-image: none;
}

.slide-content {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 
    0 40px 80px -20px rgba(0, 0, 0, 0.45),
    0 25px 55px -25px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 12px solid #2a2a2a; /* Dark grey tablet-like frame */
  background: #000;
  transition: box-shadow 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide.active .slide-content {
  box-shadow: 
    0 45px 90px -20px rgba(0, 0, 0, 0.5),
    0 30px 60px -25px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* White gradient overlay on inactive slides */
.slide:not(.active) .slide-content::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.slide.prev .slide-content::after {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.8) 15%,
    rgba(255, 255, 255, 0.5) 35%,
    rgba(255, 255, 255, 0.2) 55%,
    rgba(255, 255, 255, 0.05) 75%,
    transparent 90%
  );
}

.slide.next .slide-content::after {
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.8) 15%,
    rgba(255, 255, 255, 0.5) 35%,
    rgba(255, 255, 255, 0.2) 55%,
    rgba(255, 255, 255, 0.05) 75%,
    transparent 90%
  );
}

/* M Badge Overlay on Active Slide */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
}

.m-badge {
  position: absolute;
  top: 45%;
  left: 52%;
  transform: translate(-50%, -50%);
  width: 42px;
  height: 42px;
  background: #ff6b9d; /* Pink color matching design */
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  font-family: Manrope;
  box-shadow: 
    0 8px 20px rgba(255, 107, 157, 0.35),
    0 4px 10px rgba(0, 0, 0, 0.2);
  border: 3px solid white;
}

/* Navigation Buttons */
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
  color: #666;
  cursor: pointer;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.nav-button--left {
  left: 24px;
}

.nav-button--right {
  right: 24px;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 1);
  color: #333;
  box-shadow: 
    0 6px 16px rgba(0, 0, 0, 0.15),
    0 3px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-50%) scale(1.05);
}

.nav-button:active {
  transform: translateY(-50%) scale(0.98);
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.nav-button svg {
  width: 18px;
  height: 18px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .slide {
    flex: 0 0 60vw;
    margin: 0 -18vw;
  }
  .slide.active {
    margin: 0 18vw;
  }
  .slideshow-container {
    height: 500px;
  }
}

@media (max-width: 768px) {
  .slide {
    flex: 0 0 75vw;
    margin: 0 -20vw;
  }
  .slide.active {
    margin: 0 20vw;
  }
  .slideshow-container {
    height: 420px;
  }
  .nav-button {
    width: 40px;
    height: 40px;
  }
  .nav-button--left {
    left: 16px;
  }
  .nav-button--right {
    right: 16px;
  }
  .m-badge {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .slide {
    flex: 0 0 85vw;
  }
  .slideshow-container {
    height: 380px;
  }
}
</style>

