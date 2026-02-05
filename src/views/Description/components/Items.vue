<template>
  <div class="items">
    <div class="items-title">Items</div>
    <div class="items-grid">
      <div class="items-card" v-for="item in items" :key="item.title">
        <div class="items-card-icon">
          <img :src="item.img" alt="" />
        </div>
        <div class="items-card-title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const { items } = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="less" scoped>
.items {
  width: 1359px;
  margin: 0 auto 124px;

  &-title {
    color: #0F0F0F;

/* H3 */
font-family: Geist;
font-size: 58px;
font-style: normal;
font-weight: 500;
line-height: 76px; /* 131.034% */
  }

  &-grid {
    display: flex;
    width: 1219px;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin: 23px auto 0;
  }

  &-card {
    display: flex;
    width: 233px;
    height: 233px;
    padding: 29px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--Color-5, #9a9a9a);
    box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.1) inset;
    backdrop-filter: blur(0.5px);
    &:hover {
      border-radius: 8px;
      border: 1px solid var(--Linear, #ef536b);
      box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.1) inset;
      backdrop-filter: blur(0.5px);
    }
  }

  &-card-icon {
    width: 88px;
    height: 88px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &-card-title {
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
}
</style>