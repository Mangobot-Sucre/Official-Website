<template>
  <div class="anatomy">
    <img class="anatomy-img" :src="frontView ? anatomy.frontView : anatomy.backView" />
    <div class="anatomy-btn" v-if="Object.keys(anatomy).length > 1">
      <div :class="[frontView ? 'active' : '']" @click="frontView = true">
        Front View
      </div>
      <div :class="[!frontView ? 'active' : '']" @click="frontView = false">
        Back View
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
const frontView = ref(true);
const { anatomy } = defineProps({
  anatomy: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style lang="less" scoped>
.anatomy {
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  &-img {
    width: 1389px;
    height: 1369px;
  }
  &-btn {
    display: flex;
    width: 302px;
    height: 72px;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: var(--Color-6, #393939);
    text-align: center;
    border-radius: 100px;
    background: #ededed;
    gap: 49px;
    /* BUTTON */
    font-family: Geist;
    font-size: var(--font-size-base, 16px);
    font-style: normal;
    font-weight: var(--font-weight-medium, 500);
    line-height: normal;
    div {
      cursor: pointer;
    }
    .active {
      color: var(--Color, #ff4500);
    }
  }
}
</style>