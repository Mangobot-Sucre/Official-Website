<template>
  <div class="bg">
    <div
      class="bg-item"
      v-for="item in bg?.imgs"
      :key="item.title"
      :style="{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%),url(${item.img})` }"
    >
      <div class="bg-item-title">{{ item.title }}</div>
      <div class="bg-item-text">{{ item.text }}</div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const { bg } = defineProps({
  bg: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>
<style lang="less" scoped>
.bg {
  display: flex;
  gap: 20px;
  width: calc(1440px - 78px);
  margin: 69px auto 53px;
  &-item {
    padding: 33px 28px;
    box-sizing: border-box;
    width: 441px;
    height: 454px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 33px;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
    background-color: lightgray;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    &-title {
      color: #fff;

      /* H5 */
      font-family: Manrope;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 37px; /* 154.167% */
    }
    &-text {
      color: var(--Color-5, #9a9a9a);

      /* H5 */
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px;
    }
  }
}
</style>