<template>
  <div class="robot">
    <div class="robot-top">
      <div class="robot-top-left">Embedded AI Robot</div>
      <div class="robot-top-right">
        Each Mangobot serves a distinct purpose, yet all share our commitment to
        humanized interaction, intelligent performance, and refined presence.
      </div>
    </div>
    <div class="robot-bottom">
      <div
        class="robot-bottom-item"
        v-for="(item, index) in robotBottomItems"
        :key="item.name"
        :class="{ 'robot-bottom-item-active': active == index }"
        :style="
          active == index
            ? {
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${item.img})`,
              }
            : {}
        "
        @mouseenter="active = index"
      >
        <div class="robot-bottom-item-title" v-if="active != index">
          {{ item.title }}
        </div>
        <div class="robot-bottom-item-name" v-if="active == index">
          {{ item.name }}
        </div>
        <div class="robot-bottom-item-text" v-if="active != index">
          {{ item.text }}
        </div>
        <div class="robot-bottom-item-learn" v-if="active != index" @click="go(item.path)">
          <img :src="item.img" alt="robot-bottom-item-img" />
          <span>Learn More</span>
        </div>
        <div v-else class="robot-bottom-item-learn1" @click="go(item.path)">Learn More</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import a2 from "@/components/header/images/a2.png";
import x2 from "@/components/header/images/x2.png";
import d1 from "@/components/header/images/d1.png";
import g1 from "@/components/header/images/g1.png";

const active = ref(1);

const robotBottomItems = ref([
  {
    title: "The full size humanoid",
    text: "Grace meets capability in hospitality’s most sophisticated greeter.",
    name: "A2 Ultra – The Full-Size Humanoid",
    img: a2,
    path : '/products/a2'
  },
  {
    title: "X2 Ultra",
    text: "Entertainment reimagined through movement that mesmerizes.",
    name: "X2 Ultra – The Vibe Master",
    img: x2,
    path : '/products/x2'
  },
  {
    title: "The Vibe Master",
    text: "Vigilance delivered with a presence that commands respect, not fear.",
    name: "D1 Ultra – The Sentinel",
    img: g1,
    path : '/products/d1-ultra'
  },
  {
    title: "The Specialist",
    text: "Highly capable humanoid built for precision-driven environments.",
    name: "G1 Ultra – The Specialist",
    img: d1,
    path : '/products/g1-ultra'
  },
]);

function go(path){
  location.href = path
}
</script>
<style lang="less" scoped>
.robot {
  width: 1440px;
  height: 907px;
  margin-top: 56px;
  &-top {
    display: flex;
    align-items: flex-end;
    padding: 0 37px;
    box-sizing: border-box;
    &-left {
      width: 640px;
      flex-shrink: 0;
      color: var(--Color-4, #1a1e1d);
      font-family: Manrope;
      font-size: 78px;
      font-style: normal;
      font-weight: 500;
      line-height: 102%; /* 79.56px */
      letter-spacing: -4.68px;
    }
    &-right {
      color: #000;
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 31px; /* 172.222% */
    }
  }
  &-bottom {
    margin: 50px auto 0;
    width: 1392px;
    display: flex;
    box-sizing: border-box;
    gap: 20px;
    &-item {
      width: 342px;
      height: 618px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-active {
        width: 379px;
        justify-content: flex-end;
        border-radius: 8px;
        border: 1px solid #bcbcbc;
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 32px 34px;
        box-sizing: border-box;
        gap: 32px;
        .robot-bottom-item-name {
          color: #fff;
          font-family: Manrope;
          font-size: 38px;
          font-style: normal;
          font-weight: 500;
          line-height: 38px; /* 100% */
        }
        .robot-bottom-item-learn1 {
          display: flex;
          width: 242px;
          height: 69px;
          box-sizing: border-box;
          padding: 0 var(--spacing-8, 32px);
          justify-content: center;
          align-items: center;
          gap: var(--spacing-3, 12px);
          border-radius: 538px;
          border: 0.5px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
          color: var(--color-base-white, #fff);
          text-align: center;
          font-family: Manrope;
          font-size: var(--font-size-base, 16px);
          font-style: normal;
          font-weight: var(--font-weight-medium, 500);
          line-height: normal;
          cursor: pointer;
        }
      }
      &-title {
        margin-top: 167px;
        display: inline-flex;
        width: fit-content;
        padding: var(--spacing-1-5, 6px) var(--spacing-4, 16px);
        justify-content: center;
        align-items: center;
        gap: var(--spacing-2-5, 10px);
        border-radius: var(--radius-full, 9999px);
        border: 0.5px solid var(--color-slate-300, #cbd5e1);
        background: var(--color-base-white, #fff);
        color: var(--color-slate-900, #0f172a);
        text-align: center;

        /* TAG */
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 21px */
        letter-spacing: -0.14px;
      }
      &-name {
        margin-top: 27px;
        color: var(--Color-6, #393939);

        /* H3 */
        font-family: Manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 37px; /* 115.625% */
      }
      &-text {
        margin-top: 21px;
        color: #9a9a9a;
        font-feature-settings: "ss02" on, "ss03" on, "ss08" on;
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 29px; /* 161.111% */
        letter-spacing: var(--font-letter-spacing-tight, -0.4px);
      }
      &-learn {
        box-sizing: border-box;
        cursor: pointer;
        margin-top: 51px;
        display: flex;
        width: 211px;
        height: 78px;
        padding: 0 var(--spacing-6, 24px) 0 17px;
        align-items: center;
        gap: var(--spacing-2-5, 10px);
        border-radius: 50px;
        border: 0.5px solid var(--color-slate-300, #cbd5e1);
        background: linear-gradient(
            180deg,
            var(--color-base-white, #fff) 0%,
            var(--color-slate-100, #f1f5f9) 100%
          ),
          var(--color-base-white, #fff);

        img {
          width: 54px;
          height: 54px;
          flex-shrink: 0;
          border-radius: 54px;
        }
        span {
          color: var(--color-slate-900, #0f172a);
          text-align: center;

          /* H6 */
          font-family: Manrope;
          font-size: var(--font-size-base, 16px);
          font-style: normal;
          font-weight: var(--font-weight-medium, 500);
          line-height: normal;
        }
      }
    }
  }
}
</style>