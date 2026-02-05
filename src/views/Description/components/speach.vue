<template>
  <div class="speach">
    <div class="speach-title">Technical Specifications</div>
    <div class="speach-content">
      <!-- 左侧列 -->
      <div class="speach-column">
        <div class="speach-item" v-for="item in leftSpecs" :key="item.title">
          <div
            class="speach-item-header"
            :class="{ active: activeItem === item.title }"
            @click="toggleItem(item.title)"
          >
            <span class="speach-item-title">{{ item.title }}</span>
            <img
              src="@/assets/arrow-down-01-sharp.svg"
              alt=""
              class="speach-item-arrow"
              :class="{ rotated: activeItem === item.title }"
            />
          </div>
          <div v-if="activeItem === item.title" class="speach-item-divider"></div>
          <div
            class="speach-item-content"
            :class="{ expanded: activeItem === item.title }"
          >
            <div
              class="speach-item-row"
              v-for="spec in item.specs"
              :key="spec.label"
            >
              <span class="speach-item-label">{{ spec.label ? `${spec.label}:` : '' }}</span>
              <span class="speach-item-value">{{ spec.value }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧列 -->
      <div class="speach-column">
        <div class="speach-item" v-for="item in rightSpecs" :key="item.title">
          <div
            class="speach-item-header"
            :class="{ active: activeItem === item.title }"
            @click="toggleItem(item.title)"
          >
            <span class="speach-item-title">{{ item.title }}</span>
            <img
              src="@/assets/arrow-down-01-sharp.svg"
              alt=""
              class="speach-item-arrow"
              :class="{ rotated: activeItem === item.title }"
            />
          </div>
          <div
            class="speach-item-content"
            :class="{ expanded: activeItem === item.title }"
          >
            <div
              class="speach-item-row"
              v-for="spec in item.specs"
              :key="spec.label"
            >
             <span class="speach-item-label">{{ spec.label ? `${spec.label}:` : '' }}</span>
              <span class="speach-item-value">{{ spec.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  leftSpecs: {
    type: Array,
    default: () => [
    ],
  },
  rightSpecs: {
    type: Array,
    default: () => [
    ],
  },
});

const activeItem = ref("General");

const toggleItem = (title) => {
  if (activeItem.value === title) {
    activeItem.value = null;
  } else {
    activeItem.value = title;
  }
};
</script>

<style lang="less" scoped>
.speach {
  width: 1362px;
  margin: 0 auto 80px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 66px;

  &-title {
    width: 100%;
    text-align: left;
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

  &-content {
    display: flex;
    gap: 21px;
    width: 1172px;
    border-radius: 36px;
    border: 1px solid var(--Fills---Vibrant-Secondary, #e0e0e0);
    padding: 29px 16px 19px 16px;
    box-sizing: border-box;
  }

  &-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &-item {
    border-radius: 12px;
    border: 1px solid rgba(154, 154, 154, 0.2);
    overflow: hidden;
    background: #fff;
    padding: 0 31px;
    box-sizing: border-box;
    &-divider {
      background: rgba(154, 154, 154, 0.2);
      width: 501px;
      height: 1px;
    }
  }

  &-item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    &.active {
      .speach-item-title {
        text-align: center;

        /* H3 */
        font-family: Manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 37px; /* 115.625% */
        background: var(
          --Linear,
          linear-gradient(270deg, #ef536b 0%, #f79355 100%)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  &-item-title {
    color: var(--Color-4, #1a1e1d);

    /* H3 */
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 37px; /* 115.625% */
  }

  &-item-arrow {
    width: 20px;
    height: 20px;
    opacity: 0.5;
    transition: transform 0.3s ease;

    &.rotated {
      transform: rotate(180deg);
    }
  }

  &-item-content {
    margin-top: 27px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
    background: #fafafa;

    &.expanded {
      max-height: 800px;
    }
  }

  &-item-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;

    &:last-child {
      border-bottom: none;
    }
  }

  &-item-label {
    color: var(--Color-6, #393939);
    leading-trim: both;
    text-edge: cap;

    /* H5 */
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 37px; /* 154.167% */
  }

  &-item-value {
    color: var(--Color-5, #9a9a9a);
    text-align: right;
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
