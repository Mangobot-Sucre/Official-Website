<template>
  <div class="usecase">
    <div class="usecase-title">Use Cases</div>
    <div class="usecase-grid">
      <div
        class="usecase-card"
        v-for="item in useCases"
        :style="{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%), url(${item.image})`,
        }"
        :key="item.title"
      >
        <div class="usecase-card-content">
          <div
            v-for="feature in item.features"
            :key="feature"
            class="usecase-card-item"
          >
            <span class="usecase-card-item-icon">•</span>
            <span class="usecase-card-item-text">{{ feature }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import usecase1 from "../images/use1.jpg";
import usecase2 from "../images/use2.png";
import usecase3 from "../images/use3.jpg";
import usecase4 from "../images/use4.png";
import usecase5 from "../images/use5.jpg";

const { useCases } = defineProps({
  useCases: {
    type: Array,
    default: () => [
      {
        title: "Agile Mobility",
        image: usecase1,
        features: [
          "Agile Mobility",
          "Wide Joint Range",
          "Flexible Adjustment of climbing posture",
        ],
      },
      {
        title: "Payload Capacity",
        image: usecase2,
        features: [
          "Nearly 1:1 load to weight ratio",
          "Ultra light body design",
          "Payload capacity of up to 30 KG",
          "Increase ~ 50% more than products of the same class",
        ],
      },
      {
        title: "Continuous Operation",
        image: usecase3,
        features: [
          "Non stop operation",
          "Autonomous charging",
          "Hot swappable battery",
        ],
      },
      {
        title: "Environmental Protection",
        image: usecase4,
        features: [
          "Break through environmental limits",
          "IP67 protection rating",
          "Operating temperature range of - 20 to 55 C",
        ],
      },
      {
        title: "Expandability",
        image: usecase5,
        features: [
          "Powerful expandability",
          "Abundant communication interfaces",
          "Multi voltage power supply support",
          "Capable of handling high power",
        ],
      },
    ],
  },
});
</script>

<style lang="less" scoped>
.usecase {
  width: 1362px;
  margin: 55px auto;
  box-sizing: border-box;

  &-title {
    color: #0f0f0f;
    font-family: Manrope, sans-serif;
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -0.5px;
    margin-bottom: 48px;
  }

  &-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    grid-template-areas:
      "card1 card2 card3"
      "card1 card4 card5";
  }

  &-card {
    width: 440px;
    height: 301px;
    background: linear-gradient(180deg, #f5f5f5 0%, #e8e8e8 100%);
    border-radius: 20px;
    padding: 36px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    justify-content: flex-end;

    &:nth-child(1) {
      grid-area: card1;
      height: 618px;
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
    }
    &:nth-child(2) {
      grid-area: card2;
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
    }
    &:nth-child(3) {
      grid-area: card3;
      background-position: -467.18px -203.747px;
      background-size: 312.172% 256.686%;
      background-repeat: no-repeat;
    }
    &:nth-child(4) {
      grid-area: card4;
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
    }
    &:nth-child(5) {
      grid-area: card5;
      background-position: -145.866px -54.932px;
      background-size: 166.263% 136.711%;
      background-repeat: no-repeat;
    }
  }

  &-card-content {
    width: 335px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &-card-item {
    display: flex;
    align-items: flex-start;
    color: var(--Color-2, #fff);
    font-variant-numeric: ordinal;
    font-feature-settings: "dlig" on;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;

    &-icon {
      flex-shrink: 0;
      margin-right: 8px;
    }

    &-text {
      flex: 1;
    }
  }
}
</style>
