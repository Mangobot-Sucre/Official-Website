<template>
  <div class="capabilities">
    <div class="capabilities-left">
      <div class="capabilities-left-title">Key Capabilities</div>
      <div class="capabilities-left-logo">
        <div class="capabilities-left-logo-center"></div>
        <div
          :style="{ backgroundImage: `url(${capabilities.top})` }"
          :class="['capabilities-left-logo-top', capabilities.classNameTop]"
        ></div>
        <div
          :style="{ backgroundImage: `url(${capabilities.bottom})` }"
          :class="[
            'capabilities-left-logo-bottom',
            capabilities.classNameBottom,
          ]"
        ></div>
      </div>
    </div>
    <div class="capabilities-right">
      <div
        class="capabilities-right-item"
        v-for="item in capabilities.children"
        :key="item.title"
      >
        <div class="capabilities-right-item-title">{{ item.title }}</div>
        <div
          class="capabilities-right-item-desc"
          v-for="a in item?.chidlren"
          :key="a"
        >
          <img src="@/assets/ok.png" alt="" />
          {{ a }}
        </div>
      </div>
      <!-- 蒙层 -->
      <div class="capabilities-right-item-mask-top"></div>
      <div class="capabilities-right-item-mask-bottom"></div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const { capabilities = {} } = defineProps({
  capabilities: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="less" scoped>
.capabilities {
  width: calc(1440px - 76px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  &-left {
    &-title {
      color: var(--Color-4, #1a1e1d);
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;
      font-family: Manrope;
      font-size: 72px;
      font-style: normal;
      font-weight: 600;
      line-height: 84px; /* 116.667% */
      letter-spacing: -2px;
    }
    &-logo {
      margin: 43px 0 0 84px;
      width: 450px;
      height: 450px;
      position: relative;
      .X2CapabilitiesTopStyle {
        background-color: lightgray;
        background-position: -39.547px -43.697px;
        background-size: 132.14% 282.841%;
        background-repeat: no-repeat;
      }
      .X2CapabilitiesBottomStyle {
        background-color: lightgray;
        background-position: -120.758px -317.692px;
        background-size: 167.73% 400.794%;
        background-repeat: no-repeat;
      }
      .G1CapabilitiesBottomStyle{
        background-color: lightgray;
        background-position: -77.561px -36.475px;
        background-size: 146.03% 232.832%;
        background-repeat: no-repeat;
      }
      &-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 246.094px;
        height: 182.813px;
        flex-shrink: 0;
        // background-color: lightgray;
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 10.547px;
        box-shadow: 0 0 0 3.516px #fff,
          0 10.547px 84.375px 0 rgba(6, 11, 19, 0.1);
      }
      &-bottom {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 337px;
        height: 225px;
        flex-shrink: 0;
        // background-color: lightgray;
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 10.547px;
        box-shadow: 0 0 0 3.516px #fff,
          0 10.547px 84.375px 0 rgba(6, 11, 19, 0.1);
      }
      &-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 393.391px;
        height: 393.391px;
        background-image: url(@/assets/desc-bg.png);
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
  &-right {
    position: relative;
    max-height: 640px;
    overflow-y: auto;
    
    /* 默认隐藏滚动条 */
    &::-webkit-scrollbar {
      width: 6px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 3px;
      transition: background 0.3s ease;
    }
    
    /* hover 时显示滚动条 */
    &:hover::-webkit-scrollbar-thumb {
      background: rgba(154, 154, 154, 0.8);
    }
    &:hover::-webkit-scrollbar-thumb:hover {
      background: rgba(154, 154, 154, 0.8);
    }
    
    &-item {
      display: flex;
      width: 673px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 40px 0;
      border-bottom: 1px solid #9a9a9a;
      &:last-of-type {
        border-width: 0px;
      }
      &-mask-top {
        position: absolute;
        right: 0;
        top: 0;
        height: 198px;
        width: 710px;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.4) 28.77%,
          rgba(255, 255, 255, 0.1) 100%
        );
      }
      &-mask-bottom {
        position: absolute;
        bottom: -88px;
        right: 0;
        height: 198px;
        width: 710px;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.4) 28.77%,
          rgba(255, 255, 255, 0.1) 100%
        );
      }
      &-title {
        width: 500px;
        color: #060b13;

        /* H3 */
        font-family: Manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 37px; /* 115.625% */
        margin-bottom: 28px;
      }
      &-desc {
        display: flex;
        align-items: center;
        width: 500px;
        color: #363d4f;

        /* TAG */
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 21px */
        letter-spacing: -0.14px;
        margin-bottom: 14px;
        &:last-of-type {
          margin-bottom: 0;
        }
        img {
          width: 24px;
          height: 24px;
          margin-right: 15px;
        }
      }
    }
  }
}
</style>