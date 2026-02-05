<template>
  <div class="arrow-down-sharp">
    <div class="elements">
      <img class="vector" alt="Vector" :src="vector" />
    </div>
  </div>
</template>

<script>
import vector from "@/assets/vector.png";

export default {
  name: "ArrowDownSharp",
  data() {
    return {
      vector,
    };
  },
};
</script>

<style>
.arrow-down-sharp {
  height: 24px;
  width: 24px;
}

.arrow-down-sharp .elements {
  height: 25.00%;
  left: 25.00%;
  position: relative;
  top: 37.50%;
  width: 50.00%;
}

.arrow-down-sharp .vector {
  height: 100%;
  left: -6.25%;
  position: absolute;
  top: -12.50%;
  width: 100%;
}
</style>