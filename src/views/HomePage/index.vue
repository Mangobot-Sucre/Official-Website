<template>
    <div class="homePage">
        <Task />
        <Duba />
        <World />
        <Robot />
        <Soul />
    </div>
</template>
<script setup>
import Task from '../components/task.vue'
import Duba from '../components/duba.vue'
import Soul from '../components/soul.vue'
import World from '../components/world.vue'
import Robot from '../components/robot.vue'
</script>
<style lang="less" scoped>
.homePage{
    width: 100%;
}
</style>