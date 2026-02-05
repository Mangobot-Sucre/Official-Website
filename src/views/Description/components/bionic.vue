<template>
  <div class="bionic">
    <!-- Header Section -->
    <div class="bionic-header">
      <div class="bionic-header-title">
        <span class="bionic-header-title-highlight"
          >High-DOF Bionic<br />
          Body
        </span>
      </div>
      <div class="bionic-header-desc">
        Designed to mirror human movement and communication, the high-degree-of-
        freedom (DOF) bionic body enables fluid gestures, expressive posture,
        and natural interaction in every scenario.
      </div>
    </div>

    <!-- Cards Grid -->
    <div class="bionic-grid">
      <div class="bionic-card" v-for="(item, index) in cardList" :key="index">
        <div class="bionic-card-content">
          <div class="bionic-card-title">{{ item.title }}</div>
          <div class="bionic-card-text">{{ item.text }}</div>
          <div class="bionic-card-tips" v-for="a in item.tips" :key="a.title">
            <span class="bionic-card-tips-title">• {{ a.title }}:</span>
            <span class="bionic-card-tips-text">{{ a.text }}</span>
          </div>
        </div>
        <div
          class="bionic-card-image"
          :style="{ backgroundImage: `url(${item.image})` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

// Placeholder images - replace with actual images
import bionicImg1 from "../images/boinc1.png";
import bionicImg2 from "../images/boinc3.png";
import bionicImg3 from "../images/boinc2.png";

const { bionic } = defineProps({
  bionic: {
    type: Object,
    default: () => ({}),
  },
});

const cardList = ref([
  {
    title: "Bionic Mechanical Design",
    text: "Equipped with 25-30 Degrees of Freedom, the robot accurately reproduces human body language logic. Movements feel intentional, expressive, and lifelike, enhancing engagement and emotional connection.",
    image: bionicImg1,
  },
  {
    title: "Single-Arm Dexterity",
    text: "The wrist features a cross-axis joint design with 5-7 Degrees of Freedom, enabling expressive gestures such as waving, pointing, and forming heart shapes with both hands. This design supports intuitive, human-style interaction rather than rigid mechanical motion.",
    image: bionicImg2,
  },
  {
    title: "Waist Dynamics",
    text: "The waist supports 3 Degrees of Freedom, allowing rotation, lateral swing, and bending. During locomotion, it naturally sways in sync with walking rhythm, closely replicating authentic human gait patterns.",
    image: bionicImg3,
  },
  {
    title: "Neck Responsiveness",
    text: "The neck features 1 Degree of Freedom, enabling subtle yet impactful head movement.",
    image: bionicImg1,
    tips: [
      {
        title: "Idle behavior",
        text: "The head gently scans the environment to simulate natural gaze shifts.",
      },
      {
        title: "Touch response",
        text: "When touched, the robot reacts with feedback gestures such as nodding or head movement, reinforcing emotional responsiveness.",
      },
    ],
  },
]);
</script>

<style lang="less" scoped>
.bionic {
  width: 1362px;
  margin: 53px auto 54px;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 48px;

    &-title {
      width: 585px;
      color: var(--Color, #fcb62e);
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;

      /* H1 */
      font-family: Manrope;
      font-size: 72px;
      font-style: normal;
      font-weight: 600;
      line-height: 84px; /* 116.667% */
      letter-spacing: -2px;

      &-highlight {
        color: var(--Primary, #fcb62e);
      }
    }

    &-desc {
      width: 713px;
      color: #000;
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 31px; /* 172.222% */
    }
  }

  &-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 25px 20px;
    width: 1362px;
  }

  &-card {
    display: flex;
    box-sizing: border-box;
    width: 671px;
    height: 320px;
    border-radius: 16px;
    padding: 23px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 8px 32px 0 rgba(24, 24, 27, 0.06),
      0 0 0 1px rgba(24, 24, 27, 0.04);
    &:nth-of-type(4) {
      .bionic-card-image {
        background-size: 497.107% 311.2%;
        background-position: -659.198px -43.269px;
      }
    }
    &-tips {
      font-family: Manrope;
      font-size: var(--font-size-base, 16px);
      font-style: normal;
      font-weight: var(--font-weight-medium, 500);
      line-height: 24px;
      margin-top: 4px;

      &-title {
        color: var(--Color-4, #1a1e1d);
      }

      &-text {
        color: var(--Color-5, #9a9a9a);
      }
    }
    &-image {
      width: 332px;
      height: 296px;
      border-radius: 8px;
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat;
    }

    &-content {
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    //   gap: 23px;
    }

    &-title {
      color: var(--Color-4, #1a1e1d);
      leading-trim: both;
      text-edge: cap;
      margin-bottom: 23px;

      /* H5 */
      font-family: Manrope;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 37px; /* 154.167% */
    }

    &-text {
      color: var(--Color-5, #9a9a9a);

      /* H6 */
      font-family: Manrope;
      font-size: var(--font-size-base, 16px);
      font-style: normal;
      font-weight: var(--font-weight-medium, 500);
      line-height: normal;
    }
  }
}
</style>