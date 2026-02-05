<template>
  <div class="preview" :style="{ backgroundImage: `${preview.linear} url(${preview.bgImg})`, backgroundPosition: preview.postion, backgroundSize: preview.size }">
    <div :class="['preview-container', preview.isTop ? '' : 'preview-container-end']">
      <div class="preview-container-title">
        {{ preview.title }}
      </div>
      <div class="preview-container-text" v-for="item in preview.text" :key="item">
        <span class="preview-dot"></span>
       {{ item }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const { preview } = defineProps({
  preview: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>
<style lang="less" scoped>
.preview {
  width: 1362px;
  height: 593px;
  margin: 0 auto 29px;
  display: flex;
  padding: 57px 42px 33px 22px;
  box-sizing: border-box;
  border-radius: 36px;
  background-repeat: no-repeat;

  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 1022px;
    &-end {
        justify-content: flex-end;
    }
  }

  &-container-title {
    width: 100%;
    text-align: left;
    color: var(--Color-2, #fff);

    /* H3 */
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 37px; /* 115.625% */
    margin-bottom: 26px;
  }

  &-container-text {
    width: 100%;
    color: var(--Color-2, #fff);
    font-variant-numeric: ordinal;
    font-feature-settings: "dlig" on;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    text-align: left;
    font-weight: 400;
    line-height: 33px; /* 183.333% */
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  &-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.8),
      0 0 24px rgba(255, 255, 255, 0.4);
    flex-shrink: 0;
    margin-top: 12px;
  }
}
</style>