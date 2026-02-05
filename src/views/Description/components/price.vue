<template>
  <div class="price">
    <div class="parice-left">
      <div class="price-note">Connect with us for one-on-one guidance</div>
      <div class="price-layout">
        <div class="price-title">
          Personalized product<br/>insights,and tailored pricing.
        </div>
      </div>
    </div>
     <div class="price-button" @click="goContact">
        Contact Us
        <div class="price-button-icon">
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
.price {
  width: 1362px;
  height: 285px;
  margin: 85px auto 62px;
  padding: 11px 92px 62px 93px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  &-left {
    width: 982px;
  }
  &-note {
    color: var(--Color, #fcb62e);
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 102%; /* 32.64px */
    letter-spacing: -1.92px;
  }

  &-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  &-title {
    color: var(--Color-4, #1a1e1d);

    /* H1 */
    font-family: Manrope;
    font-size: 70px;
    font-style: normal;
    font-weight: 600;
    line-height: 84px;
    letter-spacing: -2px;
  }

  &-button {
    display: flex;
    width: 205px;
    height: 68px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: var(--White, #fff);
    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
    text-transform: uppercase;
    box-sizing: border-box;
    border-radius: 130px;
    background: var(--Color-4, #1a1e1d);
    cursor: pointer;
  }

  &-button-icon {
    width: 45px;
    height: 45px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>