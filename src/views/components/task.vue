<template>
  <div class="hero-section">
    <div class="hero-bg"></div>
    <div class="hero-bg-mask"></div>
    <!-- Hero Content -->
    <div class="hero-content">
      <h1 class="hero-title">
        Where Tomorrow's <span class="highlight">Intelligence</span>
        <br />
        <span class="highlight">Takes Form Today</span>
      </h1>
      <p class="hero-subtitle">
        Elegant design meets intelligent AI. Humanoid robots that
        <br />
        elevate brands and captivate.
      </p>
    </div>
    <div class="task-container" ref="taskContainerRef">
      <el-carousel
        :height="height"
        type="card"
        :autoplay="false"
        :trigger="click"
        indicator-position="outside"
        :card-scale="0.69"
        :activeIndex="activeIndex"
        @change="change"
      >
        <el-carousel-item v-for="(img, index) in images" :key="img">
          <div
            :class="[
              'task-item',
              activeIndex == index ? 'task-item-active' : '',
            ]"
          >
            <img :src="img" alt="task-img" />
            <div class="task-item-play" v-if="activeIndex == index">
              <img src="@/assets/whatsapp.png" alt="task-img" />
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="task-mask-left"></div>
    <div class="task-mask-right"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
const height = ref(0);
const taskContainerRef = ref(null);
const activeIndex = ref(0);
// Import images - replace these with your actual robot images
import img1 from "@/assets/a2-bg.png";
import img2 from "@/assets/a2-bg.png";
import img3 from "@/assets/a2-bg.png";
import img4 from "@/assets/a2-bg.png";

const images = [img1, img2, img3, img4];

function change(index) {
  activeIndex.value = index;
}

onMounted(() => {
  nextTick(() => {
    height.value = taskContainerRef.value.clientHeight + "px";
    console.log(height.value);
  });
});
</script>

<style lang="scss" scoped>
.task-container {
  width: 100%;
  height: 450px;
  margin: 80px auto 0;
  padding-left: 40px;
}
.task-mask-left {
  width: 318px;
  height: 418px;
  background: linear-gradient(270deg, #FFF 28.77%, rgba(255, 255, 255, 0.00) 100%);
  transform: rotate(180deg);
  position: absolute;
  left: 0;
  top: 518px;
  z-index: 100;
  pointer-events: none; 
}
.task-mask-right {
  width: 318px;
  height: 418px;
  background: linear-gradient(270deg, #FFF 28.77%, rgba(255, 255, 255, 0.00) 100%);
  right: 0;
  position: absolute;
  top: 518px;
  z-index: 100;
  pointer-events: none; 
}
.task-item {
  display: flex;
  gap: -141.357px;
  width: 638px;
  height: 430px;
  border-width: 0px;
  padding: 0;
  position: relative;
  border-radius: 12px;
  border: 5px solid #dbdbdb;
  &-play {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    display: flex;
    width: 70px;
    height: 70px;
    padding: 5.49px;
    justify-content: center;
    align-items: center;
    border-radius: 274.51px;
    // border: 2.539px solid rgba(255, 255, 255, 0.6);
    // background: linear-gradient(93deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.30) 100%);
    img {
      width: 59.02px;
      height: 59.02px;
      flex-shrink: 0;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &-active {
    transform: translateY(0);
    width: 638px;
    height: 430px;
    border-radius: 22.393px;
    background: #a5a5a5;
    display: flex;
    padding: 8.397px;
    flex-direction: column;
    align-items: flex-start;
    border-width: 0px;
    border-top: 1.4px solid #2b2b2b;
  }
}
.hero-section {
  width: 100%;
  min-height: 950px;
  position: relative;
  overflow: hidden;
}
:deep(.el-carousel__indicator) {
  width: 8px;
  height: 8px;
  border-radius: 8px;
  opacity: 0.2;
  padding: 0;
  background: rgba(26, 30, 29, 0.38);
  margin: 0 5px;
}
:deep(.el-carousel__indicator.is-active) {
  width: 27.111px;
  height: 8px;
  border-radius: 21.333px;
  background: var(--Color, #fcb62e);
  opacity: 1;
}
:deep(.el-carousel__button) {
  height: 0;
}
.hero-bg-mask {
  width: 100%;
  height: 260px;
  position: absolute;
  left: 0;
  top: 385px;
  background: url("@/assets/hero-bg-mask.png") 50% / cover no-repeat;
}

.hero-bg {
  width: 100%;
  height: 900px;
  position: absolute;
  left: 0;
  top: -80px;
  background: url("@/assets/hero-bg.png") 50% / cover no-repeat;
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 1;
  padding-top: 100px;
}

:deep(.el-carousel__arrow) {
  display: none;
}
.hero-title {
  color: var(--Color-4, #1a1e1d);
  text-align: center;
  font-variant-numeric: ordinal;
  font-feature-settings: "dlig" on;
  font-family: Manrope, sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: 84px;
  letter-spacing: -2px;
  margin: 0;
}

.hero-title .highlight {
  color: var(--Color, #fcb62e);
}

.hero-subtitle {
  color: #000;
  text-align: center;
  font-variant-numeric: ordinal;
  font-feature-settings: "dlig" on;
  font-family: Manrope, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 39px;
  margin: 20px 0 0 0;
}

/* Custom Pagination */
.custom-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 30px;
  z-index: 10;
  position: relative;
}

.custom-pagination :deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: #d1d5db;
  opacity: 1;
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;
}

.custom-pagination :deep(.swiper-pagination-bullet-active) {
  width: 27px !important;
  height: 8px !important;
  border-radius: 21px;
  opacity: 1;
  background: #fcb62e;
}

/* WhatsApp Button */
.whatsapp-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 56px;
  height: 56px;
  background: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  z-index: 100;
  text-decoration: none;
}

.whatsapp-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(37, 211, 102, 0.5);
}

.whatsapp-btn svg {
  width: 28px;
  height: 28px;
  color: white;
}
</style>
