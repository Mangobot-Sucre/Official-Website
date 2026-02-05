<template>
  <div class="fit">
    <div class="fit-title">
      Not Sure Which Robot Fits Your <span>Needs?</span>
    </div>
    <div class="fit-bg">
      <div class="fit-bg-text">
        We’ll help you choose the robot that fits your environment, objectives,
        and vision.
      </div>
      <div class="fit-bg-btn" @click="goContact">
        <span>Contact Mangobot Today</span>
        <img src="@/assets/go.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goContact = () => {
  location.href = '/contactus';
};
</script>
<style lang="less" scoped>
.fit {
  &-bg {
    margin: 71px auto 60px;
    width: 1362px;
    height: 491px;
    border-radius: 33px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%),
      url("@/assets/fitbg.png") lightgray -10.89px -176.339px / 100% 154.824%
        no-repeat;
    &-text {
      padding-top: 323px;
      color: #fff;
      text-align: center;
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
    &-btn {
        margin: 27px auto 0;
      display: flex;
      width: 300px;
      height: 68px;
      box-sizing: border-box;
      padding: 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 130px;
      background: linear-gradient(270deg, #ef536b 0%, #f79355 100%);
      cursor: pointer;
      span {
        color: var(--White, #fff);
        text-align: center;
        font-family: Manrope;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 22.4px */
        letter-spacing: -0.32px;
        text-transform: capitalize;
      }
      img {
        width: 45px;
        height: 45px;
        border-radius: 45px;
        background: var(--Color-2, #fff);
      }
    }
  }
  &-title {
    width: 850px;
    margin: 72px auto 0;
    color: var(--Color-4, #1a1e1d);
    text-align: center;
    font-variant-numeric: ordinal;
    font-feature-settings: "dlig" on;
    font-family: Manrope;
    font-size: 72px;
    font-style: normal;
    font-weight: 600;
    line-height: 84px; /* 116.667% */
    letter-spacing: -2px;
    span {
      color: var(--Color, #fcb62e);
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;
      font-family: Manrope;
      font-size: 72px;
      font-style: normal;
      font-weight: 600;
      line-height: 84px;
      letter-spacing: -2px;
    }
  }
}
</style>