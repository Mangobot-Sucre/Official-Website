<template>
  <div class="precision">
    <div class="precision-title">Precision Sensor Intelligence</div>
    <div class="precision-grid">
      <div class="precision-card" v-for="item in sensors" :key="item.title">
        <div class="precision-card-icon">
          <img :src="item.icon" alt="" />
        </div>
        <div class="precision-card-title">{{ item.title }}</div>
        <div class="precision-card-text">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import cameraIcon from '../images/camera-01.svg'
import rgbIcon from '../images/camera-lens.svg'
import touchIcon from '../images/touchpad-04.svg'
import lidarIcon from '../images/airplay-line.svg'
const sensors = [
  {
    icon: cameraIcon,
    title: "Interactive RGB Camera",
    description:
      "Supports facial recognition, object detection, gesture recognition, and environmental semantic perception, forming the foundation for intelligent, context-aware interaction.",
  },
  {
    icon: rgbIcon,
    title: "RGB-D Camera",
    description:
      "Delivers accurate 3D spatial perception and depth-aware environmental understanding to support real-time operational decision-making.",
  },
  {
    icon: touchIcon,
    title: "Touch Sensor",
    description:
      "Detects head-touch interactions and responds instantly with natural feedback actions such as nodding or head shaking, strengthening human-robot emotional engagement.",
  },
  {
    icon: lidarIcon,
    title: "Multi-Line LiDAR",
    description:
      "Captures high-density point-cloud data to meet high-precision positioning requirements for 3D SLAM, enabling reliable navigation and spatial mapping.",
  },
];
</script>

<style lang="less" scoped>
.precision {
  width: 1362px;
  margin: 54px auto;
  box-sizing: border-box;

  &-title {
    color: #0f0f0f;

    /* H3 */
    font-family: Manrope;
    font-size: 58px;
    font-style: normal;
    font-weight: 500;
    line-height: 76px; /* 131.034% */
  }

  &-grid {
    margin-top: 87px;
    display: flex;
    gap: 24px;
  }

  &-card {
    width: 320px;
    height: 290px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 21.093px;
  }

  &-card-icon {
    display: flex;
    width: 45.7px;
    height: 45.7px;
    padding: 11px 10.802px 10.7px 10.898px;
    justify-content: center;
    align-items: center;
    border-radius: 87.885px;
    background: var(--Color, #ff4500);
    img {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }
  }

  &-card-icon-placeholder {
    width: 32px;
    height: 32px;
    background: #fff;
    border-radius: 4px;
    opacity: 0.9;
  }

  &-card-title {
    width: 240.806px;
    color: var(--Color-4, #1a1e1d);
    text-align: center;

    /* H4 */
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 37px; /* 132.143% */
  }

  &-card-text {
    color: var(--Color-5, #9a9a9a);
    text-align: center;

    /* H6 */
    font-family: Manrope;
    font-size: var(--font-size-base, 16px);
    font-style: normal;
    font-weight: var(--font-weight-medium, 500);
    line-height: normal;
  }
}
</style>
