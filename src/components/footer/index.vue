  <template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-top-left" @click="goHome"></div>
      <div class="footer-top-right">
        <div
          class="footer-top-right-row"
          v-for="item in footerLinks"
          :key="item.name"
        >
          <div
            class="footer-top-right-row-item"
            v-for="child in item.children"
            @click="handleClick(child.path)"
            :key="child.name"
          >
            {{ child.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-top">
        <div
          class="footer-bottom-top-item"
          v-for="item in footerBottomTopItems"
          :key="item.name"
          @click="handleClick(item.path)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="footer-bottom-middle">
        MangoBot pioneers AI and robotics innovation, creating intelligent
        solutions that drive efficiency and transform industries for a smarter
        future.
      </div>
      <div class="footer-bottom-text">
        © 2025 MangoBot. All rights reserved.
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const footerBottomTopItems = [
  {
    name: "EMAIL US",
    path: "/contactus",
  },
  {
    name: "CALL US",
    path: "/contactus",
  },
  {
    name: "GET OUR LOCATION",
    path: "/contactus",
  },
];

const footerLinks = [
  {
    name: "Navigation",
    children: [
      {
        path: "/",
        name: "Home",
      },
      {
        path: "/about",
        name: "About us",
      },
      {
        path: "/products",
        name: "Products",
      },
      {
        path: "/privacy",
        name: "Privacy Policy",
      },
      {
        path: "/terms",
        name: "Terms & Conditions",
      },
    ],
  },
  {
    name: "Products",
    children: [
      {
        path: "/products/a2",
        name: "A2 Ultra",
      },
      {
        path: "/products/x2",
        name: "X2 Ultra",
      },
      {
        path: "/products/d1-ultra",
        name: "D1 ULTRA",
      },
      {
        path: "/products/g1-ultra",
        name: "G1 Ultra",
      },
      {
        path: "/products/d1-max",
        name: "D1 Max",
      },
      {
        path: "/products/d1-pro-max",
        name: "D1 Pro Max",
      },
    ],
  },
  {
    name: "Social",
    children: [
      {
        path: "https://www.instagram.com/mangobotrobotics",
        name: "INSTAGRAM",
      },
      {
        path: "https://www.tiktok.com/@mangobotrobotics?_t=ZS-90EqAq0VY6G&_r=1",
        name: "TIKTOK",
      },
      {
        path: "https://www.youtube.com/@mangobotrobotics",
        name: "YOUTUBE",
      },
      {
        path: "https://www.linkedin.com/company/mangobot/",
        name: "LINKEDIN",
      },
      {
        path: "https://x.com/mangobotrobot",
        name: "X",
      },
    ],
  },
];

function goHome() {
  router.push('/');
}

function handleClick(path) {
  if (path) {
    window.open(path, '_blank');
  }
}
</script>
<style lang="less" scoped>
.footer {
  display: flex;
  width: 1440px;
  padding: 0 76.14px;
  flex-direction: column;
  align-items: center;
  background: #141415;
  box-sizing: border-box;
  &-bottom {
    padding: 46.635px 0 100.702px 22.844px;
    width: 1203px;
    // height: 119px;
    &-top {
      display: flex;
      margin-bottom: 23px;
      padding: 0 524.053px 9.518px 0;
      gap: 30.456px;
      flex-shrink: 0;
      &-item {
        color: var(--Gray-4, #bdbdbd);

        /* BUTTON */
        font-family: Geist;
        font-size: var(--font-size-base, 16px);
        font-style: normal;
        font-weight: var(--font-weight-medium, 500);
        line-height: normal;
        margin-right: 32px;
        cursor: pointer;
      }
    }
    &-middle {
      color: var(--Gray-4, #bdbdbd);

      /* BUTTON */
      font-family: Geist;
      font-size: var(--font-size-base, 16px);
      font-style: normal;
      font-weight: var(--font-weight-medium, 500);
      line-height: normal;
      margin-bottom: 23px;
    }
    &-text {
      color: var(--Gray-4, #bdbdbd);

      /* BUTTON */
      font-family: Geist;
      font-size: var(--font-size-base, 16px);
      font-style: normal;
      font-weight: var(--font-weight-medium, 500);
      line-height: normal;
    }
  }
  &-top {
    display: flex;
    width: 1218.242px;
    padding: 76.14px 0 60.912px 0;
    justify-content: space-between;
    &-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      width: 246.504px;
      height: 102.789px;
      flex: none;
      order: 0;
      flex-grow: 0;
      background: url("@/assets/footer-logo.png") no-repeat center center;
      background-size: 100% 100%;
    }
    &-right {
      width: 765px;
      display: flex;
      justify-content: space-between;
      &-row {
        &:last-of-type {
          margin-right: 0;
        }
        &-item {
          width: 160px;
          color: var(--Gray-5, #e0e0e0);
          /* BUTTON */
          font-family: Geist;
          font-size: var(--font-size-base, 16px);
          font-style: normal;
          font-weight: var(--font-weight-medium, 500);
          line-height: normal;
          margin-bottom: 15.23px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>