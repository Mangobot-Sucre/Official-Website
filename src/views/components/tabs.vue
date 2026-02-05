<template>
  <div class="products-tabs">
    <div @click="go(item)" :class="['products-tabs-item', item.path === $route.path ? 'products-tabs-item-active' : '']" v-for="item in tabs" :key="item.name">
      {{ item.name }}
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { products } from "@/config";
import { useRouter, useRoute } from "vue-router";
const tabs = ref(products);
const router = useRouter();
const route = useRoute();
function go(item) {
  router.push(item.path);
}


</script>
<style lang="less" scoped>
.products-tabs {
    margin: 0 auto;
  display: flex;
  padding: 7px 24px 7px 7px;
  align-items: center;
  justify-content: space-around;
  width: 1269px;
  height: 65px;
  border-radius: 13.333px;
  background: #fff;
  box-shadow: 0 13.333px 53.333px 0 rgba(24, 24, 27, 0.06),
    0 0 0 1.667px rgba(24, 24, 27, 0.04);
  &-item {
    display: flex;
    width: 201px;
    padding: 14px 0;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    color: var(--Color-5, #9a9a9a);
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 37px; /* 132.143% */
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;

    &-active {
      background: var(
        --Linear,
        linear-gradient(270deg, #ef536b 0%, #f79355 100%)
      );
      color: var(--Color-2, #fff);
      transform: scale(1.02);
      box-shadow: 0 4px 12px rgba(239, 83, 107, 0.3);
    }

    &:hover {
      background: var(
        --Linear,
        linear-gradient(270deg, #ef536b 0%, #f79355 100%)
      );
      color: var(--Color-2, #fff);
      transform: scale(1.01);
    }

    &:not(&-active):hover {
      background: rgba(239, 83, 107, 0.1);
      color: var(--Color-4, #1a1e1d);
    }
  }
}
</style>