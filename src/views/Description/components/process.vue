<template>
  <div class="process-section">
    <h2 class="process-title">Autonomous Task Processing</h2>
    <div class="process-cards">
      <div class="process-card" v-for="(card, index) in cards" :key="index">
        <div class="card-icon">
          <img :src="card.icon" alt="">
        </div>
        <div class="card-title">{{ card.title }}</div>
        <div class="card-desc">{{ card.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import  EnergyIcon from '@/assets/atomic-power.svg';
import  NavigationIcon from '@/assets/setting-06.svg';
import  ObstacleIcon from '@/assets/navigation-01 (1).svg';
const cards = [
  {
    icon:  ObstacleIcon,
    title: "Self-Directed Navigation",
    description:
      "Powered by LiDAR and RGB-D vision, Mangobot X2 Ultra continuously maps its environment and plans optimal routes in real time. Movement is precise, adaptive, and fully autonomous.",
  },
  {
    icon: NavigationIcon,
    title: "Proactive Obstacle Avoidance",
    description:
      "With LiDAR, RGB-D cameras, front stereo vision, rear monocular vision, and intelligent algorithms, AGIBOT X2 Ultra can detect obstacles ahead, respond quickly, adjust its path proactively, and avoid collisions.",
  },
  {
    icon: EnergyIcon,
    title: "Automatic Energy Replenishment",
    description:
      "When battery power is low, AGIBOT X2 Ultra autonomously locates charging equipment and performs automatic charging. This eliminates the need for manual operation, ensuring continuous and stable operation while providing uninterrupted service.",
  },
];
</script>

<style lang="less" scoped>
.process-section {
  margin: 71px auto 93px;
  display: flex;
  width: 1362px;
  flex-direction: column;
  align-items: flex-start;
  gap: 72px;
}

.process-title {
  color: #0f0f0f;

  /* H3 */
  font-family: Geist;
  font-size: 58px;
  font-style: normal;
  font-weight: 500;
  line-height: 76px; /* 131.034% */
}

.process-cards {
  display: flex;
  gap: 22px;
}

.process-card {
  display: flex;
  padding: 24px 17px 30px 24px;
  flex-direction: column;
  align-items: flex-start;
  width: 398px;
  box-sizing: content-box;
  border-radius: 20px;
  border: 1px solid var(--Border, #dcdcdc);
  background: linear-gradient(59deg, #fff 33.28%, #ff4500 210.58%);

  //   &:hover {
  //     transform: translateY(-4px);
  //     box-shadow: 0 12px 32px rgba(249, 147, 85, 0.15);
  //   }
}

.card-icon {
  display: flex;
  width: 52px;
  height: 52px;
  padding: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: var(--Color, #ff4500);

  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
}

.card-title {
  margin-top: 69px;
  color: #0f0f0f;

  /* H5_2 */
  font-family: Geist;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.48px;
}

.card-desc {
  margin-top: 14px;
  color: var(--Description, #757d89);
  font-feature-settings: "ss02" on, "ss03" on, "ss08" on;

  /* H6 */
  font-family: Geist;
  font-size: var(--font-size-xl, 20px);
  font-style: normal;
  font-weight: var(--font-weight-medium, 500);
  line-height: 29px; /* 145% */
  letter-spacing: var(--font-letter-spacing-tight, -0.4px);
}

</style>