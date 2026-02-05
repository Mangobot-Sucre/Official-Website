<template>
  <div class="duba">
    <div class="duba-text">WE ARE IN</div>
    <div class="duba-title">DUBAI!</div>
    <div class="duba-img"></div>
    <div class="duba-btn" @click="handleBookDemo">
      <span>Book A demo</span>
      <div class="duba-btn-icon">
        <img src="@/assets/go.png" alt="arrow-right" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const handleBookDemo = () => {
  location.href = '/contactus';
};


</script>
<style lang="less" scoped>
.duba {
  /* Frame 2131330461 */

position: relative;
width: 1440px;
height: 1041px;

  background: url("@/assets/duba.png") no-repeat center center;
  background-size: 100% 100%;
  &-text {
    /* Headline */

    position: absolute;
    width: 373px;
    height: 84px;
    left: calc(50% - 341px / 2 - 497.5px);
    top: 272px;

    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 72px;
    line-height: 84px;
    /* identical to box height, or 117% */
    display: flex;
    align-items: center;
    text-align: center;
    font-feature-settings: "ordn" on;

    color: #ffffff;
  }
  &-img {
    width: 1440px;
    height: 1041px;
    background: url("@/assets/duba-top.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
  }
  &-title {
    /* DUBAI! */

    position: absolute;
    width: 1348px;
    height: 567px;
    left: calc(50% - 1348px / 2 - 20px);
    top: 219px;

    font-family: "Manrope";
    font-style: normal;
    font-weight: 800;
    font-size: 405px;
    line-height: 140%;
    /* identical to box height, or 567px */
    text-align: center;
    letter-spacing: -0.02em;
    text-transform: uppercase;

    color: #ffffff;
  }
  &-btn {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    color: #ffffff;
    gap: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    width: 210px;
    height: 68px;
    left: calc(50% - 210px / 2);
    top: 874px;
    cursor: pointer;
    background: linear-gradient(270deg, #ef536b 0%, #f79355 100%);
    border-radius: 130px;
    &-icon {
      width: 45px;
      height: 45px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>


