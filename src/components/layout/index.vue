<template>
  <div class="layout">
    <SiteHeader />
    <router-view />
    <div class="wechatApp">
      <div class="wechatApp-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_2383_9222)">
            <path
              d="M12.003 0H11.997C5.38052 0 1.57454e-05 5.382 1.57454e-05 12C-0.0040929 14.5275 0.795989 16.9908 2.28452 19.0335L0.789016 23.4915L5.40152 22.017C7.35807 23.3151 9.65503 24.005 12.003 24C18.6195 24 24 18.6165 24 12C24 5.3835 18.6195 0 12.003 0ZM18.9855 16.9455C18.696 17.763 17.547 18.441 16.6305 18.639C16.0035 18.7725 15.1845 18.879 12.4275 17.736C8.90102 16.275 6.63002 12.6915 6.45302 12.459C6.28352 12.2265 5.02802 10.5615 5.02802 8.8395C5.02802 7.1175 5.90252 6.279 6.25502 5.919C6.54452 5.6235 7.02302 5.4885 7.48202 5.4885C7.63052 5.4885 7.76402 5.496 7.88402 5.502C8.23652 5.517 8.41352 5.538 8.64602 6.0945C8.93552 6.792 9.64052 8.514 9.72452 8.691C9.81002 8.868 9.89552 9.108 9.77552 9.3405C9.66302 9.5805 9.56402 9.687 9.38702 9.891C9.21002 10.095 9.04202 10.251 8.86502 10.47C8.70302 10.6605 8.52002 10.8645 8.72402 11.217C8.92802 11.562 9.63302 12.7125 10.671 13.6365C12.0105 14.829 13.0965 15.21 13.485 15.372C13.7745 15.492 14.1195 15.4635 14.331 15.2385C14.5995 14.949 14.931 14.469 15.2685 13.9965C15.5085 13.6575 15.8115 13.6155 16.1295 13.7355C16.4535 13.848 18.168 14.6955 18.5205 14.871C18.873 15.048 19.1055 15.132 19.191 15.2805C19.275 15.429 19.275 16.1265 18.9855 16.9455Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2383_9222">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <!-- 悬浮展开内容 -->
      <div class="wechatApp-expand">
        <img class="wechatApp-expand-qr" src="@/assets/qrcode.jpg" alt="QR Code" />
        <div class="wechatApp-expand-phone">+971 50 279 6518</div>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>
<script setup>
import SiteHeader from "../header/index.vue";
import SiteFooter from "../footer/index.vue";
</script>
<style lang="less" scoped>
// 全局样式防止横向滚动条
:global(html) {
  overflow-x: hidden;
}

:global(body) {
  overflow-x: hidden;
  max-width: 100vw;
}

.layout {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  .wechatApp {
    position: fixed;
    top: 540px;
    right: 32px;
    display: flex;
    width: 60px;
    box-sizing: border-box;
    height: 60px;
    padding: 15px 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 95.175px;
    border: 0.952px solid var(--Gray-3, #828282);
    background: #00d419;
    z-index: 1000;
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      aspect-ratio: 1/1;
    }
    &-expand {
      position: absolute;
      right: 50px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px 20px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      pointer-events: none;

      &-qr {
        width: 150px;
        height: 150px;
        border-radius: 8px;
        object-fit: contain;
      }

      &-phone {
        margin-top: 12px;
        color: #1a1e1d;
        font-family: Manrope, sans-serif;
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
      }
    }

    &:hover {
      .wechatApp-icon {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 212, 25, 0.4);
      }

      .wechatApp-expand {
        opacity: 1;
        visibility: visible;
        right: 70px;
        pointer-events: auto;
      }
    }
  }
}
</style>