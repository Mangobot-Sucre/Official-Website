<template>
  <div class="withus">
    <div class="withus-title">Connect with us</div>
    <div class="withus-social">
      <a
        v-for="(item, index) in socialList"
        :key="item.name"
        :href="item.link"
        target="_blank"
        class="withus-social-item"
        :class="{ 'withus-social-item-active': index === 0 }"
      >
        <img :src="item.icon" :alt="item.name" />
        <span v-if="index === 0">{{ item.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Placeholder icons - replace with actual icons
import linkedinIcon from "@/assets/linkedin.svg";
import xIcon from "@/assets/x.svg";
import instagramIcon from "@/assets/instagram.svg";
import tiktokIcon from "@/assets/tiktok.svg";
import youtubeIcon from "@/assets/youtube.svg";

const socialList = ref([
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    link: "https://linkedin.com",
  },
  {
    name: "X",
    icon: xIcon,
    link: "https://x.com",
  },
  {
    name: "Instagram",
    icon: instagramIcon,
    link: "https://instagram.com",
  },
  {
    name: "TikTok",
    icon: tiktokIcon,
    link: "https://tiktok.com",
  },
  {
    name: "YouTube",
    icon: youtubeIcon,
    link: "https://youtube.com",
  },
]);
</script>

<style lang="less" scoped>
.withus {
  width: 1362px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;

  &-title {
    color: #18181b;
    font-family: Manrope;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -1px;
  }

  &-social {
    display: flex;
    align-items: center;
    gap: 12px;

    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      height: 52px;
      padding: 0 20px;
      border-radius: 8px;
      border: 1px solid #e4e4e7;
      background: #fff;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;

      img {
        width: 20px;
        height: 20px;
      }

      span {
        color: #fff;
        font-family: Manrope;
        font-size: 16px;
        font-weight: 500;
      }

      &:hover {
        border-color: #d4d4d8;
        background: #fafafa;
      }

      &-active {
        border: none;
        background: linear-gradient(90deg, #f97316 0%, #ec4899 100%);
        padding: 0 24px;

        img {
          filter: brightness(0) invert(1);
        }

        &:hover {
          background: linear-gradient(90deg, #ea580c 0%, #db2777 100%);
        }
      }
    }
  }
}
</style>