<template>
  <div class="attributes">
    <div class="attributes-grid">
      <div
        class="attributes-card"
        v-for="item in attributeList"
        :key="item.title"
      >
        <div class="attributes-card-icon">
          <img :src="item.icon || okIcon" alt="" />
        </div>
        <div class="attributes-card-title">{{ item.title }}</div>
        <div class="attributes-card-text">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import okIcon from "@/assets/ok.png";
import { defineProps } from "vue";

const props = defineProps({
  attributes: {
    type: Array,
    default: () => [],
  },
});

const attributeList = computed(() => props.attributes || []);
</script>

<style lang="less" scoped>
.attributes {
  width: 100%;
  margin: 0 auto 80px;
  padding: 0 39px;
  box-sizing: border-box;

  &-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  &-card {
    box-sizing: border-box;
    display: flex;
    width: 260px;
    height: 137px;
    padding: 29px 54px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid var(--Color-5, #9a9a9a);
    box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.1) inset;
    backdrop-filter: blur(0.5px);
  }

  &-card-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  &-card-icon img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
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

  &-card-text {
    color: var(--Color-6, #393939);
    text-align: center;
    leading-trim: both;
    text-edge: cap;

    /* H5 */
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
  }
}
</style>