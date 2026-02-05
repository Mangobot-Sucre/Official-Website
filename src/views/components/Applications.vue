<template>
  <div class="applications">
    <div class="applications-title">Ideal Applications</div>
    <div ref="listRef" class="applications-list">
      <div
        class="applications-list-item"
        v-for="item in application.children"
        :key="item.name"
      >
        <div class="applications-list-item-icon">
          <img :src="item.icon" alt="" />
        </div>
        <div>
          <div class="applications-list-item-title">{{ item.name }}</div>
          <div class="applications-list-item-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <!-- 背景图 -->
    <div class="applications-bg">
      <div
        :class="['applications-bg-img', application.className]"
        :style="{ backgroundImage: `url(${application.bgImg})` }"
      ></div>
      <div class="applications-bg-title">{{ application.bgTitle }}</div>
      <div class="applications-bg-btn" @click="goDesc">
        View full specifications
        <img src="@/assets/go.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
const { applicatio, descPath } = defineProps({
  application: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  descPath: {
    type: String,
    required: true,
  },
});
const listRef = ref(null);

// 去详情页
function goDesc() {
  descPath && (location.href = descPath);
}

// function handleWheel(event) {
//   const el = listRef.value;
//   if (!el) return;
//   const delta =
//     Math.abs(event.deltaX) > Math.abs(event.deltaY)
//       ? event.deltaX
//       : event.deltaY;
//   if (delta === 0) return;
//   el.scrollLeft += delta;
//   event.preventDefault();
// }
</script>
<style lang="less" scoped>
.applications {
  width: 1440px;
  //   height: 1438px;
  box-sizing: border-box;
  &-title {
    margin-left: 38px;
    color: var(--Color-4, #1a1e1d);
    font-variant-numeric: ordinal;
    font-feature-settings: "dlig" on;
    font-family: Manrope;
    font-size: 72px;
    font-style: normal;
    font-weight: 600;
    line-height: 84px; /* 116.667% */
    letter-spacing: -2px;
    margin-bottom: 65px;
  }
  &-list {
    margin-left: 38px;
    margin-right: 38px;
    width: calc(100% - 76px);
    display: flex;
    gap: 12px;
    overflow: visible;

    &-item {
      display: flex;
      flex: 1 1 0;
      min-width: 180px;
      height: auto;
      min-height: 380px;
      padding: 32px 12px 24px 0;
      flex-direction: column;
      justify-content: space-between;
      border-radius: var(--border-radius-old-none, 0);
      border-top: 1px solid var(--BoderColor-BorderNeutralPrimary, #c1c5bf);
      
      &:hover {
        border-radius: var(--border-radius-old-none, 0);
        border-top: 1px solid var(--Linear, #ef536b);
      }
      
      &-text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        align-self: stretch;
        overflow: hidden;
        color: var(--Color-5, #9a9a9a);
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;
        text-overflow: ellipsis;
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        word-break: break-word;
      }
      
      &-title {
        align-self: stretch;
        color: var(--Color-4, #1a1e1d);
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;
        font-family: Manrope;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 1.25;
        letter-spacing: -0.5px;
        word-break: break-word;
        hyphens: auto;
      }
      
      &-icon {
        width: 52px;
        height: 52px;
        flex-shrink: 0;
        aspect-ratio: 1/1;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  &-bg {
    margin: 473px auto 0;
    width: 1151px;
    height: 391px;
    border-radius: 36px;
    background: var(--Color-4, #1a1e1d);
    position: relative;
    &-img {
      width: 920px;
      height: 802px;
      aspect-ratio: 39/34;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .ExploreX2Style {
      background-position: 0px 30px;
      background-size: 100% 200%;
      background-repeat: no-repeat;
    }
    .ExploreD1UltraStyle {
      aspect-ratio: 1/1;
      background-position: 50% -20px;
      background-size: 130.627% 150.7%;
      background-repeat: no-repeat;
    }

    .ExploreG1UltraStyle {
      aspect-ratio: 1/1;
      background-position: center;
      background-size: 120.906% 200.181%;
      background-repeat: no-repeat;
    }

    .ExploreD1MaxStyle {
      background-position: -357.778px 0px;
      background-size: 177.778% 114.713%;
      background-repeat: no-repeat;
    }

    &-title {
      position: relative;
      padding-top: 194px;
      text-align: center;
      color: var(--Color-2, #fff);
      text-align: center;
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
    &-btn {
      position: relative;
      display: flex;
      margin: 31px auto 0;
      width: 282px;
      height: 68px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      color: var(--White, #fff);
      text-align: center;
      font-family: Manrope;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 22.4px */
      letter-spacing: -0.32px;
      text-transform: capitalize;
      border-radius: 130px;
      background: linear-gradient(270deg, #ef536b 0%, #f79355 100%);
      cursor: pointer;
      img {
        width: 45px;
        height: 45px;
        flex-shrink: 0;
      }
    }
  }
}
</style>