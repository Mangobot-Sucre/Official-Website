<template>
  <div class="solution">
    <div class="solution-title">
      <div class="solution-title-left">
        Specialist in flexible manufacturing,
      </div>
      <div class="solution-title-right">
        Delivering end-to-end<br />
        integrated solutions
      </div>
    </div>
    <div
      :class="['solution-item', item.left ? '' : 'solution-item-con']"
      v-for="item in solution?.children"
      :key="item.title"
    >
      <div class="solution-item-left">
        <div class="solution-item-left-title">{{ item.title }}</div>
        <div class="solution-item-left-list">
          <div
            class="solution-item-left-list-text"
            v-for="text in item.text"
            :key="text"
          >
            <span>•</span>
            {{ text }}
          </div>
        </div>
      </div>
      <div class="solution-item-right">
        <img v-if="!item.videoSrc" :src="item.imgSrc" alt="" />
        <video 
          controls
          v-if="item.videoSrc" 
          :ref="(el) => setVideoRef(el, item.title)"
          :src="item.videoSrc" 
          muted 
          loop 
          playsinline
        />
      </div>
    </div>
    <div class="solution-desc">
      <span class="solution-desc-bold">
        Mangobot G1 Ultra is capable of performing tasks such as grabbing, placing,
        transporting, and plugging.
      </span>
      <span class="solution-desc-normal">
        It features self-developed embodied intelligence algorithms, with open
        interfaces and tools to facilitate secondary development. The
        operational skills of mangobot G1 Ultra improve with data accumulation,
        becoming smarter and more efficient over time.
      </span>
    </div>
    <div class="solution-export">
      <div class="solution-export-left">
        <img src="@/assets/export-left.png" alt="" />
      </div>
      <div class="solution-export-right">
        <div class="solution-export-right-top">
          <div
            class="solution-export-right-top-item"
            v-for="item in exportList"
            :key="item.title"
          >
            <img :src="okIcon" alt="" />
            <span class="solution-export-right-top-item-title">{{
              item.title
            }}</span>
            <span class="solution-export-right-top-item-value">{{
              item.value
            }}</span>
          </div>
          <div class="solution-export-right-top-title">
            Expert in flexible manufacturing with <br />
            one-stop intelligent solutions
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref, onMounted, onUnmounted } from "vue";
import okIcon from "@/assets/ok.png";

// 视频 refs 和 observers 管理
const videoRefs = new Map();
const observers = new Map();

// 设置视频 ref
const setVideoRef = (el, key) => {
  if (el) {
    videoRefs.set(key, el);
    // 为每个视频创建 observer
    setupObserver(el, key);
  } else {
    // 元素被移除时清理
    const observer = observers.get(key);
    if (observer) {
      observer.disconnect();
      observers.delete(key);
    }
    videoRefs.delete(key);
  }
};

// 为视频设置 Intersection Observer
const setupObserver = (videoEl, key) => {
  // 如果已存在 observer，先清理
  const existingObserver = observers.get(key);
  if (existingObserver) {
    existingObserver.disconnect();
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 可见时播放
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
  observers.set(key, observer);
};

onUnmounted(() => {
  // 清理所有 observers
  observers.forEach((observer) => {
    observer.disconnect();
  });
  observers.clear();
  videoRefs.clear();
});
const exportList = ref([
  {
    title: "Height",
    value: "130~180 cm",
  },
  {
    title: "Weight",
    value: "150 kg",
  },
  {
    title: "Force Sensing",
    value: "Six-axis force sensor",
  },
  {
    title: "Sensors",
    value: "3× RGB-D cameras,\n5× fisheye cameras",
  },
  {
    title: "Degrees of Freedom",
    value: "20 DoF",
  },
  {
    title: "End-Effector",
    value: "6 DoF",
  },
  {
    title: "Computing Platform",
    value: "Jetson AGX Orin (64 GB)",
  },
  {
    title: "Runtime",
    value: "4+ hours",
  },
  {
    title: "Span",
    value: "70 cm",
  },
]);
const { solution } = defineProps({
  solution: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style lang="less" scoped>
.solution {
  width: 1362px;
  margin: 0 auto;
  &-export {
    display: flex;
    margin-top: 120px;
    &-left {
      flex-grow: 1;
      position: relative;
      img {
        position: absolute;
        width: 585px;
        height: 611px;
        aspect-ratio: 45/47;
        object-fit: cover;
        left: -160px;
      }
    }
    &-right {
      width: 1058px;
      &-top {
        width: 1058px;
        display: flex;
        flex-wrap: wrap;

        gap: 10px;
        &-title {
          margin-top: 36px;
          color: var(--Color-4, #1a1e1d);
          font-variant-numeric: ordinal;
          font-feature-settings: "dlig" on;

          /* H2 */
          font-family: Manrope;
          font-size: 48px;
          font-style: normal;
          font-weight: 600;
          line-height: 65px; /* 135.417% */
          letter-spacing: -2px;
        }
        &-item {
          box-sizing: border-box;
          display: flex;
          width: 233px;
          height: 137px;
          padding: 20px 0;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-radius: 8px;
          border: 1px solid var(--Color-5, #9a9a9a);
          box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.1) inset;
          backdrop-filter: blur(0.5px);
          &-title {
            color: var(--Color-6, #393939);
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
          &-value {
            color: var(--Color-6, #393939);
            text-align: center;
            leading-trim: both;
            text-edge: cap;
            white-space: pre-line;

            /* H5 */
            font-family: Manrope;
            font-size: 22px;
            font-style: normal;
            font-weight: 500;
          }
          img {
            width: 24px;
            height: 24px;
            flex-shrink: 0;
          }
        }
      }
    }
  }
  &-desc {
    width: 1184px;
    margin: 131px auto 0;
    text-align: center;

    &-bold {
      color: var(--Color-Dark-Grey, #292a36);
      text-align: center;
      font-family: Manrope;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 50px; /* 156.25% */
    }

    &-normal {
      color: var(--Description, #757d89);
      font-family: Manrope;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 50px;
    }
  }
  &-title {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 54px;
    &-left {
      color: var(--Color, #fcb62e);
      font-family: Manrope;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 102%; /* 32.64px */
      letter-spacing: -1.92px;
    }
    &-right {
      color: var(--Color-4, #1a1e1d);
      font-family: Manrope;
      font-size: 82px;
      font-style: normal;
      font-weight: 500;
      line-height: 102%;
      letter-spacing: -4.92px;
    }
  }
  &-item {
    margin: 24px auto 0;
    width: 1132px;
    height: 390px;
    box-sizing: border-box;
    display: flex;
    padding: 19px 14px 19px 38px;
    justify-content: flex-end;
    // flex-direction: row-reverse;
    align-items: center;
    gap: 57px;
    align-self: stretch;
    border-radius: 16px;
    background: #fff;
    box-shadow: 0 8px 32px 0 rgba(24, 24, 27, 0.06),
      0 0 0 1px rgba(24, 24, 27, 0.04);
    &-right {
      display: flex;
      width: 495px;
      height: 352px;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      img,
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    }
    &-con {
      flex-direction: row-reverse;
    }
    &-left {
      width: 528px;
      display: flex;
      flex-direction: column;
      gap: 54px;
      align-items: center;
      &-title {
        width: 100%;
        text-align: left;
        color: var(--Color-4, #1a1e1d);

        /* H3 */
        font-family: Manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 37px; /* 115.625% */
      }
      &-list {
        width: 100%;
        text-align: left;
        &-text {
          width: 100%;
          text-align: left;
          color: var(--Color-5, #9a9a9a);

          /* H6 */
          font-family: Manrope;
          font-size: var(--font-size-base, 16px);
          font-style: normal;
          font-weight: var(--font-weight-medium, 500);
          line-height: normal;
        }
      }
    }
  }
}
</style>