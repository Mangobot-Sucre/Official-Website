<template>
  <div class="video">
    <div class="video-container">
      <div class="video-container-video" ref="videoContainerRef" @click="togglePlay">
        <video 
          ref="videoRef"
          :src="video.url" 
          muted 
          loop
          playsinline
          @play="isPlaying = true"
          @pause="isPlaying = false"
        />
        <img 
          v-show="!isPlaying"
          class="video-container-video-play" 
          src="@/assets/whatsapp.png" 
          alt="Play"
        />
      </div>
      <div class="video-container-text">
        <div class="video-container-text-title">{{ video.title }}</div>
        <div
          :class="[
            'video-container-text-text',
            !!video.textRight ? 'video-container-text-text-right' : '',
          ]"
        >
          <div
            class="video-container-text-text-item"
            v-for="item in video.text"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="video-container-text-right" v-if="video.textRight">
        {{ video.textRight.map((item) => item).join("\n") }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref, onMounted, onUnmounted } from "vue";

const videoContainerRef = ref(null);
const videoRef = ref(null);
const isPlaying = ref(false);
let observer = null;

const { video } = defineProps({
  video: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

// 切换播放/暂停
const togglePlay = () => {
  const videoEl = videoRef.value;
  if (!videoEl) return;
  
  if (videoEl.paused) {
    videoEl.play().catch(() => {});
  } else {
    videoEl.pause();
  }
};

onMounted(() => {
  const videoEl = videoRef.value;
  if (!videoEl) return;

  // 创建 Intersection Observer - 页面可见自动播放
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 可见时自动播放
          videoEl.play().catch(() => {});
        } else {
          // 不可见时暂停
          videoEl.pause();
        }
      });
    },
    {
      threshold: 0.3, // 30% 可见时触发
    }
  );

  observer.observe(videoEl);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
<style lang="less" scoped>
.video {
  display: flex;
  width: 1369px;
  height: 713px;
  padding: 10.934px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 35px auto 60px;
  border-radius: 29.157px;
  border-top: 1.822px solid #2b2b2b;
  background: #a5a5a5;
  &-container {
    width: 1343px;
    height: 691px;
    flex-shrink: 0;
    border-radius: 10px;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.82) 100%
      ),
      #c4c4c4;
    position: relative;
    &-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 10px;
      cursor: pointer;
      video {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
      }
      &-play {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 70px;
        height: 70px;
        border-radius: 50%;
        cursor: pointer;
        transition: opacity 0.3s ease, transform 0.3s ease;
        pointer-events: none; /* 点击穿透到父容器 */
        &:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }
      }
    }
    &-text {
      position: absolute;
      bottom: 44px;
      left: 36px;
      gap: 22px;
      display: flex;
      flex-direction: column;
      &-right {
        width: 457px;
        position: absolute;
        bottom: 47px;
        right: 26px;
        color: #fff;
        text-align: right;
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;

        /* H5 */
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px; /* 161.111% */
      }
      &-title {
        color: #fff;
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;

        /* H1 */
        font-family: Manrope;
        font-size: 72px;
        font-style: normal;
        font-weight: 600;
        line-height: 84px; /* 116.667% */
        letter-spacing: -2px;
      }
      &-text {
        max-width: 927px;
        gap: 22px;
        display: flex;
        flex-direction: column;
        color: #fff;
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;

        /* H5 */
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px; /* 161.111% */
        &-right {
          width: 587px;
        }
      }
    }
  }
}
</style>