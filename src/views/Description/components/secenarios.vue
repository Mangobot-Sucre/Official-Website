<template>
  <div class="secenarios">
    <div class="secenarios-title">Application Scenarios</div>
    <div class="secenarios-grid">
      <div
        class="secenarios-card"
        :style="{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${item.image})` }"
        v-for="item in scenarios"
        :key="item.title"
      >
        <div class="secenarios-card-text">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import scen1 from '../images/scen1.png'
import scen2 from '../images/scen2.png'
import scen3 from '../images/scen3.png'
const scenarios = [
    {
        title: 'Energy and chemical plant inspections',
        image: scen1
    },
    {
        title: 'Heavy-duty industrial transport',
        image: scen2
    },
    {
        title: 'Emergency rescue and response operations',
        image: scen3
    },
]
</script>

<style lang="less" scoped>
.secenarios {
  width: 1362px;
  margin: 0 auto 78px;
  box-sizing: border-box;

  &-title {
    margin-bottom: 55px;
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

  &-grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &-card {
    width: 441px;
    height: 618px;
    border-radius: 36px;
    padding: 46px 34px;
    background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    &:nth-of-type(3){
        background-position: -342.083px -10px;
        background-size: 255.14% 101.618%;
        background-repeat: no-repeat;
    }
  }

  &-card-text {
    width: 308px;
    color: var(--Color-2, #fff);
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
