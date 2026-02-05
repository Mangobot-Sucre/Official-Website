<template>
  <div class="productPage">
    <div class="productPage-header">
      <div class="productPage-header-title">Meet the Mangobot Family</div>
      <div class="productPage-header-desc">
        Four distinct personalities. One unified purpose: to deliver humanoid
        intelligence exactly where you need it. Each robot represents the
        pinnacle of its category, specialized, sophisticated, and designed to
        excel in its domain.
      </div>
      <div class="productPage-header-video" ref="videoContainerRef" @click="togglePlay">
        <video 
          ref="videoRef"
          src="https://media.mangobot.org/2026020500.mp4" 
          muted 
          loop
          playsinline
          @play="isPlaying = true"
          @pause="isPlaying = false"
        />
        <img 
          v-show="!isPlaying"
          class="productPage-header-video-play" 
          src="@/assets/whatsapp.png" 
          alt="Play"
        />
      </div>
    </div>
    <Tabs />
    <ProductDesc :productDesc="productInfo?.productDesc" />
    <Capabilities :capabilities="productInfo?.capabilities" />
    <Applications :application="productInfo?.Applications" :descPath="productInfo?.descPath" />
    <Fit />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import Applications from "../components/Applications.vue";
import ProductDesc from "../components/productDesc.vue";
import Tabs from "../components/tabs.vue";
import Capabilities from "../components/capabilities.vue";
import { products } from "@/config";
import { useRoute } from "vue-router";
import Fit from "../components/fit.vue";

const route = useRoute();
const productInfo = computed(() => {
  return products.find((item) => item.path === route.path);
});

// 视频相关
const videoContainerRef = ref(null);
const videoRef = ref(null);
const isPlaying = ref(false);
let observer = null;

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
  const video = videoRef.value;
  if (!video) return;

  // 创建 Intersection Observer - 页面可见自动播放
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 可见时自动播放
          video.play().catch(() => {});
        } else {
          // 不可见时暂停
          video.pause();
        }
      });
    },
    {
      threshold: 0.3, // 30% 可见时触发
    }
  );

  observer.observe(video);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
<style lang="less" scoped>
.productPage-header {
  &-title {
    padding-top: 90px;
    text-align: center;
    color: var(--Color-4, #1a1e1d);
    text-align: center;
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
  &-video {
    margin: 79px auto 108px;
    position: relative;
    height: 560px;
    width: 1177px;
    box-sizing: content-box;
    padding: 10.934px;
    border-radius: 29.157px;
    border-top: 1.822px solid #2b2b2b;
    background: #a5a5a5;
    cursor: pointer;
    overflow: hidden;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
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
      pointer-events: none;
      z-index: 10;
    }
  }
  &-desc {
    margin: 35px auto 0;
    width: 766px;
    color: #000;
    text-align: center;
    font-variant-numeric: ordinal;
    font-feature-settings: "dlig" on;

    /* H5 */
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px; /* 161.111% */
  }
}
</style>