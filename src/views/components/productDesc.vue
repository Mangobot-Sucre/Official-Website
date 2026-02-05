<template>
  <div
    :class="['productDesc', productDesc.className]"
  >
    <div class="productDesc-top">
      <div class="productDesc-top-left">
        <template v-for="item in productDesc.title" :key="item.text">
          <span v-if="item.color">{{ item.text }}</span>
          <template v-else>{{ item.text }}</template>
        </template>
      </div>
      <div
        :class="[
          'productDesc-top-right',
          { 'productDesc-top-right-textMore': productDesc.textMore },
        ]"
      >
        {{ productDesc.desc }}
      </div>
    </div>
    <div
      :class="['productDesc-bottom', productDesc.bgClassName]"
      :style="{ backgroundImage: `url(${productDesc.bg})` }"
    ></div>
    <div v-if="productDesc.bgText" class="productDesc-bgText">
      Image will be provided based on document
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const { productDesc } = defineProps({
  productDesc: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>
<style lang="less" scoped>
.productDesc {
  box-sizing: content-box;
  width: 947px;
  //   height: 660px;
  display: inline-flex;
  padding: 1px 206px 112px 209px;
  flex-direction: column;
  align-items: center;
  margin: 107px auto 0;
  &.MaxStyle {
    width: 1087px;
    padding: 1px 66px 112px 209px;
  }
  &.ProMaxStyle {
    width: 1087px;
    padding: 1px 66px 112px 209px;
  }
  &-bottom {
    margin: 47px auto 0;
    width: 947px;
    height: 440px;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 16px;
    &.MaxBgStyle {
      border-radius: 16px;
      border: 1px solid #e0e0e0;
      background-position: -107.861px -122.211px;
      background-size: 112.672% 136.406%;
      background-repeat: no-repeat;
    }
    &.ProMaxBgStyle {
      border-radius: 16px;
      border: 1px solid #e0e0e0;
      background-position: 50% 50%;
      background-size: contain;
      background-repeat: no-repeat;
    }
    // &.G1BgStyle {
    //   background-position: 47.004px -54.359px;
    //   background-size: 89.222% 120.761%;
    //   background-repeat: no-repeat;
    // }
  }
  &-bgText {
    text-align: center;
    color: #060b13;
    position: relative;
    bottom: 30px;

    /* H3 */
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 37px; /* 115.625% */
  }
  &-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-left {
      display: flex;
      width: 488px;
      height: 173px;
      flex-direction: column;
      justify-content: center;
      color: #060b13;
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;

      /* H2 */
      font-family: Manrope;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: 65px; /* 135.417% */
      letter-spacing: -2px;
      span {
        color: var(--Color, #fcb62e);
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;

        /* H2 */
        font-family: Manrope;
        font-size: 48px;
        font-style: normal;
        font-weight: 600;
        line-height: 65px;
        letter-spacing: -2px;
      }
    }
    &-right {
      width: 399px;
      color: var(--Color-5, #9a9a9a);
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;

      /* H5 */
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px; /* 161.111% */
      &-textMore {
        flex-grow: 1;
      }
    }
  }
}
</style>