<template>
  <div class="description">
    <VideoDesc v-if="descriptionInfo?.video" :video="descriptionInfo?.video" />
    <Solution v-if="descriptionInfo?.solution" :solution="descriptionInfo?.solution" />
    <Preview v-for="item in descriptionInfo?.preview" :key="item.title" :preview="item" />
    <Usecase v-if="descriptionInfo?.usecase" />
    <Secenarios v-if="descriptionInfo?.scenarios" />
    <BgDesc v-if="descriptionInfo?.bg" :bg="descriptionInfo?.bg" />
    <High v-if="descriptionInfo?.high" />
    <Attributes v-if="descriptionInfo?.attributes" :attributes="descriptionInfo?.attributes?.items" />
    <Items v-if="descriptionInfo?.Items" :items="descriptionInfo?.Items" />
    <Process v-if="descriptionInfo?.process" :process="descriptionInfo?.process" />
    <Anatomy v-if="descriptionInfo?.anatomy" :anatomy="descriptionInfo?.anatomy" />
    <Bionic v-if="descriptionInfo?.bionic" />
    <Precision v-if="descriptionInfo?.precision" />
    <Speach v-if="descriptionInfo?.speach" :leftSpecs="descriptionInfo?.speach?.leftSpecs" :rightSpecs="descriptionInfo?.speach?.rightSpecs" />
    <Tech v-if="descriptionInfo?.tech" :specifications="descriptionInfo?.tech" />
    <Price v-if="descriptionInfo?.price" />
  </div>
</template>
<script setup>
import Bionic from "./components/bionic.vue";
import Solution from "./components/solution.vue";
import Speach from "./components/speach.vue";
import Anatomy from "./components/anatomy.vue";
import High from "./components/high.vue";
import Usecase from "./components/usecase.vue";
import Secenarios from "./components/secenarios.vue";
import Preview from "./components/preview.vue";
import Precision from "./components/precision.vue";
import Price from "./components/price.vue";
import Process from "./components/process.vue";
import Attributes from "./components/attrubutes.vue";
import VideoDesc from "./components/video.vue";
import BgDesc from "./components/bg.vue";
import Items from "./components/Items.vue";
import Tech from "./components/tech.vue";
import { descriptionConfig } from './config'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
const route = useRoute()

const descriptionInfo = computed(() => {
  return Object.values(descriptionConfig).find((item) => item.path === route.path)
})

</script>
<style lang="less" scoped>
</style>