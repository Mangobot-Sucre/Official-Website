<template>
  <div class="world">
    <div class="world-title"></div>
    <div class="world-text">
      Mangobot robots are engineered with deep respect for Middle Eastern
      values, traditions, and social dynamics. Our AI communicates with cultural
      fluency, our designs reflect regional aesthetic sensibilities, and our
      approach prioritizes the warmth of human connection.
    </div>
    <div class="world-img"></div>
    <div class="world-top"></div>
  </div>
</template>

<script setup>
</script>
<style lang="less" scoped>
.world {
  /* Frame 2131330460 */

  position: relative;
  width: 1440px;
  height: 875px;
  &-title {
    /* Designed for the Middle East, Built for the World */

    position: absolute;
    width: 598px;
    height: 124px;
    left: calc(50% - 598px / 2 - 395.5px);
    top: 142px;

    background: url("@/assets/world-title.png") no-repeat center center;
    background-size: 100% 100%;
  }
  &-text {
    /* Headline */

    position: absolute;
    width: 618px;
    height: 116px;
    left: calc(50% - 618px / 2 - 385.5px);
    top: 713px;

    /* H5 */
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    /* or 161% */
    display: flex;
    align-items: center;
    font-feature-settings: "ordn" on;

    color: #ffffff;
    z-index: 1;
  }
  &-img {
    /* Rectangle 717 */

    position: absolute;
    width: 1441px;
    height: 477px;
    left: calc(50% - 1441px / 2);
    top: 398px;
    background: url("@/assets/world-bg.jpg") no-repeat center center;
    background-size: 100% 100%;
  }
  &-top {
    position: absolute;
    width: 858px;
    height: 932px;
    left: 613px;
    top: -57px;
    background: url("@/assets/world-top.png") no-repeat center center;
    background-size: 100% 100%;
  }
}
</style>