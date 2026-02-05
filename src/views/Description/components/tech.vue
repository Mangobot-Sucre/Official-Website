<template>
  <div class="tech">
    <div class="tech-title">Technical Specifications</div>
    <div class="tech-card">
      <div
        class="tech-item"
        v-for="(item, index) in displayedSpecifications"
        :key="item.label"
      >
        <div class="tech-item-label">{{ item.label }}</div>
        <div class="tech-item-value">{{ item.value }}</div>
        <div
          v-if="index < displayedSpecifications.length - 1"
          class="tech-item-divider"
        ></div>
      </div>
      <div
        v-if="!isExpanded && specifications.length > defaultShowCount"
        class="tech-gradient-mask"
      ></div>
      <div
        v-if="specifications.length > defaultShowCount"
        class="tech-view-all"
        @click="toggleExpand"
      >
        <img
          :src="isExpanded ? arrowUpIcon : arrowDownIcon"
          alt=""
          class="tech-view-all-icon"
          :style="{ transform: isExpanded ? 'rotate(180deg)' : 'none' }"
        />
        <span class="tech-view-all-text">{{ isExpanded ? 'View less' : 'View all' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { defineProps } from "vue";
import arrowDownIcon from "@/assets/arrow-down-01-sharp.svg";
import arrowUpIcon from "@/assets/arrow-down-01-sharp.svg";

const props = defineProps({
  specifications: {
    type: Array,
    default: () => [],
  },
  defaultShowCount: {
    type: Number,
    default: 8,
  },
});

const isExpanded = ref(false);

const displayedSpecifications = computed(() => {
  if (isExpanded.value || props.specifications.length <= props.defaultShowCount) {
    return props.specifications;
  }
  return props.specifications.slice(0, props.defaultShowCount);
});

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style lang="less" scoped>
.tech {
  max-width: 1362px;
  margin: 0 auto 120px;
  padding: 0 39px;
  box-sizing: border-box;

  &-title {
    color: #0f0f0f;
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

  &-card {
    width: 1134px;
    border-radius: 12px;
    border: 1px solid rgba(154, 154, 154, 0.2);
    margin: 33px auto 0;
    background: #fff;
    overflow: hidden;
    position: relative;
  }

  &-gradient-mask {
    position: absolute;
    bottom: 100px;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    pointer-events: none;
    z-index: 1;
  }

  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 32px 31px 32px;
    position: relative;
  }

  &-item-label {
    max-width: 500px;
    color: var(--Color-6, #393939);

    /* H5 */
    font-family: Geist;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 32.338px; /* 101.057% */
  }

  &-item-value {
    max-width: 715px;
    color: var(--Description, #757d89);
    text-align: right;

    /* H4 */
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 37px; /* 132.143% */
  }

  &-item-divider {
    position: absolute;
    width: 1070px;
    height: 1px;
    bottom: 0;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
    height: 1px;
    background: #e5e5e5;
  }

  &-view-all {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid rgba(154, 154, 154, 0.20);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.02);
    }
  }

  &-view-all-icon {
    width: 40px;
    height: 40px;
    opacity: 0.6;
    transition: transform 0.3s ease;
  }

  &-view-all-text {
    background: var(
      --Linear,
      linear-gradient(270deg, #ef536b 0%, #f79355 100%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    leading-trim: both;
    text-edge: cap;

    /* H5 */
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 37px; /* 154.167% */
  }
}
</style>
