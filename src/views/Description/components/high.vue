<template>
  <div class="high">
    <div class="high-title">Highlighted Features of A1 Ultra:</div>
    <div class="high-content">
      <div
        :class="['high-content-item', active == index ? 'active' : '']"
        v-for="(item, index) in arr"
        :key="item.title"
        @click="active = index"
        :style="{
          backgroundImage:
            active == index
              ? `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${item.image})`
              : `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${item.image})`,
        }"
      >
        <template v-if="active == index">
          <div class="high-content-item-title">{{ item.title }}</div>
          <div class="high-content-item-text">{{ item.text }}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import img1 from "../images/high1.jpg";
import img2 from "../images/high2.jpg";
import img3 from "../images/high3.jpg";
import img4 from "../images/high4.jpg";
import img5 from "../images/high5.jpg";
const active = ref("0");
const arr = [
  {
    title: "Highly Perceptive",
    image: img1,
    text: "Recognizes objects and responds instantly in 21 languages, effortlessly understanding your environment.",
  },
  {
    title: "Effortless to Use",
    image: img2,
    text: "Unbox and operate independently",
  },
  {
    title: "Fully Customizable Intelligence",
    image: img3,
    text: "Q&A, wake words, personality, voice tone, enterprise AI integration",
  },
  {
    title: "Intelligent Navigation",
    image: img4,
    text: "Autonomous movement with dynamic planning and obstacle avoidance",
  },
  {
    title: "Sophisticated Swarm Control",
    image: img5,
    text: "Multi-robot choreography, expression and motion coordination",
  },
];
</script>

<style lang="less" scoped>
.high {
  width: 1362px;
  margin: 0 auto 59px;
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
    margin-bottom: 52px;
  }
  &-content {
    width: 100%;
    height: 563px;
    flex-shrink: 0;
    display: flex;
    gap: 8px;
    &-item {
      width: 154px;
      height: 563px;
      border-radius: 33px;
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
      padding: 50px 70px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 15px;
      cursor: pointer;
      overflow: hidden;
      transition: width 0.6s ease-in-out,
                  background-position 0.6s ease-in-out,
                  background-size 0.6s ease-in-out,
                  filter 0.6s ease-in-out;
      &-title {
        color: var(--White, #fff);

        /* H5_2 */
        font-family: Manrope;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px; /* 133.333% */
        letter-spacing: -0.48px;
        opacity: 0;
        transition: opacity 0.5s ease-in-out 0.3s;
      }
      &-text {
        color: var(--White, #fff);
        font-feature-settings: "ss02" on, "ss03" on, "ss08" on;

        /* H6 */
        font-family: Manrope;
        font-size: var(--font-size-xl, 20px);
        font-style: normal;
        font-weight: var(--font-weight-medium, 500);
        line-height: 29px; /* 145% */
        letter-spacing: var(--font-letter-spacing-tight, -0.4px);
        opacity: 0;
        transition: opacity 0.5s ease-in-out 0.4s;
      }
    }
    .active {
      width: 702px;
      height: 563px;
      background-position: 0px -390.51px;
      background-size: 100% 187.009%;

      .high-content-item-title,
      .high-content-item-text {
        opacity: 1;
      }
    }
  }
}
</style>
