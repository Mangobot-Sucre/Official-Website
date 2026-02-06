<template>
  <div class="soul">
    <div class="soul-bg"></div>
    <div class="soul-left"></div>
    <!-- 视频 -->
    <div class="soul-right">
        <video 
          ref="videoRef" 
          src="https://media.mangobot.org/2026020509.mp4" 
          loop 
          muted 
          controls
          playsinline
        ></video>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const videoRef = ref(null);
let observer = null;

onMounted(() => {
  const video = videoRef.value;
  if (!video) return;

  // 创建 Intersection Observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 可见时播放
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
.soul {
position: relative;
width: 1440px;
height: 709px;
gap: 9px;
  &-left {
    position: absolute;
    width: 662px;
    height: 368px;
    left: calc(50% - 662px / 2 - 350px);
    top: 210px;
    background: url("@/assets/soul-left.png") no-repeat center center;
    background-size: 100% 100%;
  }
  &-right {
    position: absolute;
    width: 691px;
    height: 524px;
    left: 710px;
    top: 54px;
    border-radius: 36px;
    video{
        border-radius: 36px;
        width: 100%;
        height: 100%;
    }
  }
  &-bg {
    position: absolute;
    width: 1440px;
    height: 900px;
    left: calc(50% - 1440px / 2);
    top: -56px;
    background: url("@/assets/soul-bg.png") no-repeat center center;
    background-size: 100% 100%;
    pointer-events: none;
  }
}
</style>