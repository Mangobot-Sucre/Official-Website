<template>
  <div class="robotics">
    <div class="robotics-content">
      <div class="robotics-content-container">
        <h1 class="robotics-title">
          Robot performances. Rent the <br />experience.
        </h1>
        <p class="robotics-description">
          In a world of countless events, standing out demands more than
          planning, it demands <br />
          moments that captivate. Mangobot transforms performances into stories
          your guests<br />
          remember.
        </p>
      </div>
    </div>
    <div class="robotics-imgs">
      <div
        class="robotics-imgs-item"
        v-for="item in roboticsCards"
        :key="item.title"
        :style="{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%), url(${item.image})`,
        }"
      >
        <div class="robotics-imgs-item-content">
          <h3 class="robotics-imgs-item-title">{{ item.title }}</h3>
          <p class="robotics-imgs-item-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div class="robotics-brands">
      <div class="robotics-brands-process">
        <div class="robotics-brands-process-line"></div>
        <div
          class="robotics-brands-process-item"
          v-for="item in processSteps"
          :key="item.title"
        >
          <div class="robotics-brands-process-node">
            <div class="robotics-brands-process-node-dot"></div>
            <div class="robotics-brands-process-node-connector"></div>
          </div>
          <div class="robotics-brands-process-card">
            <div class="robotics-brands-process-card-title">
              {{ item.title }}
            </div>
            <div class="robotics-brands-process-card-description">
              {{ item.description }}
            </div>
            <ul
              v-if="item.bullets"
              class="robotics-brands-process-card-bullets"
            >
              <li v-for="bullet in item.bullets" :key="bullet">
                {{ bullet }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="robotics-advantages">
      <h2 class="robotics-advantages-title">Experience First Advantages</h2>
      <div class="robotics-advantages-cards">
        <div
          class="robotics-advantages-card"
          v-for="(item, index) in advantagesCards"
          :key="item.title"
          :class="{ 'robotics-advantages-card-bottom': index >= 3 }"
        >
          <div class="robotics-advantages-card-icon">
            <img :src="item.icon" :alt="item.title" />
          </div>
          <h3 class="robotics-advantages-card-title">{{ item.title }}</h3>
          <p class="robotics-advantages-card-description">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="robotics-learn">
      <div class="robotics-learn-tags">
        <span class="robotics-learn-tag">Unit deployment & installation</span>
        <span class="robotics-learn-tag">Onsite technical support</span>
        <span class="robotics-learn-tag"
          >Maintenance, repairs & software updates</span
        >
      </div>
      <h2 class="robotics-learn-title">Included in Leasing</h2>
      <button class="robotics-learn-button" @click="goContact('/contactus')">
        Request Custom Proposal
        <div class="robotics-learn-button-icon">
          <img src="@/assets/go.png" alt="" />
        </div>
      </button>
    </div>
    <div class="robotics-deploy">
      <h2 class="robotics-deploy-title">
        Deploy Intelligence Without<br />
        the Commitment
      </h2>
      <div class="robotics-deploy-image"></div>
      <div class="robotics-deploy-content">
        <div class="robotics-deploy-left">
          <p class="robotics-deploy-description">
            Deploy Mangobot in your environment, validate real-world impact, and
            scale deliberately. Experience First turns leasing into a measured,
            strategic choice.
          </p>
          <button class="robotics-deploy-button" @click="goContact('/contactus')">
            Get In Touch To Explore Leasing Options
            <img src="@/assets/go.png" alt="" />
          </button>
        </div>
        <div class="robotics-deploy-right">
          <ul class="robotics-deploy-checklist">
            <li class="robotics-deploy-checklist-item">
              <img src="@/assets/ok.png" alt="" />
              <span>Flexible terms aligned with your operational cycles</span>
            </li>
            <li class="robotics-deploy-checklist-item">
              <img src="@/assets/ok.png" alt="" />
              <span>Comprehensive support and tech maintenance included</span>
            </li>
            <li class="robotics-deploy-checklist-item">
              <img src="@/assets/ok.png" alt="" />
              <span>Upgrade pathways as technology evolves</span>
            </li>
            <li class="robotics-deploy-checklist-item">
              <img src="@/assets/ok.png" alt="" />
              <span>Convert to ownership when you're ready</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="robotics-abous">
      <h2 class="robotics-abous-title">Ready to Experience the Future?</h2>
      <p class="robotics-abous-description">
        Transformations aren't read, they're lived. Let's design a deployment or
        event experience that removes<br />
        risk, delivers results, and leaves a lasting impression.
      </p>
      <div class="robotics-abous-buttons">
        <button class="robotics-abous-button">
          Speak With Our Team
          <div class="robotics-abous-button-icon">
            <img src="@/assets/Whatsapp.svg" alt="" />
          </div>
        </button>
        <button class="robotics-abous-button" @click="goContact('/contactus')">Get a Custom Proposal</button>
        <button class="robotics-abous-button" @click="goContact('/contactus')">Explore Leasing Options</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import fashionBrands from "@/assets/fashion-brands.png";
import corporateEvents from "@/assets/corporate-events.png";
import privateCelebrations from "@/assets/private-celebrations.png";
import entertainmentVenues from "@/assets/entertainment-venues.png";

import financialIcon from "@/assets/Applications/money-03.svg";
import riskIcon from "@/assets/Applications/setting-error-04.svg";
import scalabilityIcon from "@/assets/Applications/square-arrow-expand-02-sharp.svg";
import technologyIcon from "@/assets/Applications/ai-laptop.svg";
import supportIcon from "@/assets/Applications/customer-support.svg";

const roboticsCards = ref([
  {
    title: "Fashion & Luxury Brands",
    description:
      "Runway performances, product reveals, and high-impact brand moments designed to captivate audiences and drive social visibility.",
    image: fashionBrands, // 图片路径预留
  },
  {
    title: "Corporate Events & Conferences",
    description:
      "Dynamic robot-led experiences that elevate launches, energize conferences, and attract attention at trade shows and keynotes.",
    image: corporateEvents, // 图片路径预留
  },
  {
    title: "Private Celebrations",
    description:
      "Elegant, interactive performances that transform weddings, galas, and milestone events into unforgettable VIP experiences.",
    image: privateCelebrations, // 图片路径预留
  },
  {
    title: "Entertainment Venues",
    description:
      "Immersive robot performances that enhance atmosphere, engage crowds, and increase foot traffic across nightlife, festivals, and public spaces.",
    image: entertainmentVenues, // 图片路径预留
  },
]);

const router = useRouter();

const goContact = (path) => {
  location.href = path;
};

const advantagesCards = ref([
  {
    title: "Financial Flexibility",
    description:
      "Preserve capital, predictable monthly investment, optional conversion to ownership",
    icon: financialIcon, // 图标路径预留
  },
  {
    title: "Risk Mitigation",
    description:
      "Prove ROI first, protection against obsolescence, no depreciation concerns",
    icon: riskIcon, // 图标路径预留
  },
  {
    title: "Scalability",
    description: "Start small, scale at your pace",
    icon: scalabilityIcon, // 图标路径预留
  },
  {
    title: "Current Technology Access",
    description: "Leasing ensures access to latest innovations",
    icon: technologyIcon, // 图标路径预留
  },
  {
    title: "Comprehensive Support",
    description: "Maintenance, repairs, updates included",
    icon: supportIcon, // 图标路径预留
  },
]);

const processSteps = ref([
  {
    title: "Consultation",
    description:
      "Assess needs, environment, and objectives. Define success metrics.",
  },
  {
    title: "Deployment & Integration",
    description:
      "Robots arrive ready-to-go. Installation and integration handled by Mangobot.",
  },
  {
    title: "Experience & Measure",
    description:
      "Teams interact daily. Measure engagement, efficiency, security, or impact.",
  },
  {
    title: "Evaluate & Decide",
    description: "",
    bullets: [
      "Continue leasing",
      "Upgrade to newer models",
      "Scale deployment",
    ],
  },
]);
</script>

<style lang="less" scoped>
.robotics {
  &-content {
    width: 1362px;
    height: 888px;
    margin: 46px auto 0;
    position: relative;

    border-radius: 14px;
    background: url("@/assets/roboticsbg.png") lightgray 50% / cover no-repeat;
  }
  &-content-container {
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 1362px;
    height: 629px;
    padding: 0 0 55px 54px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
    border-radius: 14px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000 100%);
    backdrop-filter: blur(1.5px);
    -webkit-backdrop-filter: blur(2px);
  }

  &-title {
    color: #fff;
    font-variant-numeric: ordinal;
    font-feature-settings: "dlig" on;
    font-family: Manrope;
    font-size: 58px;
    font-style: normal;
    font-weight: 600;
    line-height: 84px; /* 144.828% */
    letter-spacing: -2px;
    margin: 0 0 18px 0;
  }

  &-description {
    color: #fff;
    font-variant-numeric: ordinal;
    font-feature-settings: "dlig" on;

    /* H5 */
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px; /* 161.111% */
  }

  &-imgs {
    margin: 67px auto 0;
    width: 100%;
    display: flex;
    gap: 13.6px;
    padding: 0 39px;
    box-sizing: border-box;
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }

    &-item {
      width: 330.8px;
      height: 421px;
      flex-shrink: 0;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 25.086px;
      background-color: lightgray;
      background-position: -29.848px -62.549px;
      background-size: 118.087% 114.922%;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;
      &:nth-of-type(2) {
        background-color: lightgray;
        background-position: -29.848px -62.549px;
        background-size: 118.087% 114.922%;
        background-repeat: no-repeat;
      }
      &:nth-of-type(3) {
        background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          #000 100%
        );
        background-color: lightgray;
        background-position: -25.275px -50.736px;
        background-size: 115.053% 111.969%;
        background-repeat: no-repeat;
      }
      &:nth-of-type(4) {
        background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          #000 100%
        );
        background-color: lightgray;
        background-position: -40.831px -161.59px;
        background-size: 125.033% 146.107%;
        background-repeat: no-repeat;
      }
      &-content {
        width: 293px;
        position: absolute;
        bottom: 0;
      }

      &-title {
        color: var(--White, #fff);
        leading-trim: both;
        text-edge: cap;

        /* H5 */
        font-family: Manrope;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 37px; /* 154.167% */
      }

      &-description {
        color: var(--Color-5, #9a9a9a);
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;

        /* H5 */
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px; /* 161.111% */
      }
    }
  }

  &-brands {
    width: calc(1440px - 128px);
    margin: 20px auto 0;
    box-sizing: border-box;
    background: #fff;

    &-process {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      min-height: 400px;
    }

    &-process-line {
      width: calc(1440px - 438px);
      position: absolute;
      top: 48px;
      left: 155px;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #ff4500 0%, #ff6b9d 100%);
      z-index: 1;
    }

    &-process-item {
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 2;
    }

    &-process-node {
      position: relative;
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -1.5px;
      margin-bottom: 20px;

      &::before {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 69px;
        background: rgba(255, 69, 0, 0.69);
        filter: blur(71.1500015258789px);
        z-index: 1;
      }

      &-dot {
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background: #ff4500;
        position: relative;
        z-index: 10;
      }

      &-connector {
        position: absolute;
        bottom: -18px;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        height: 71px;
        border-left: 2px dashed rgba(255, 69, 0, 0.5);
        z-index: 2;
      }
    }

    &-process-card {
      display: flex;
      width: 310px;
      height: 269px;
      padding: 24px;
      box-sizing: border-box;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      border-radius: 14px;
      border: 1px solid rgba(154, 154, 154, 0.2);

      &-title {
        color: var(--Color-4, #1a1e1d);

        /* H3 */
        font-family: Manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 37px;
      }

      &-description {
        margin-top: 10px;
        align-self: stretch;
        color: var(--Color-5, #9a9a9a);
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;

        /* H5 */
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px;
      }

      &-bullets {
        list-style: none;
        padding: 0;
        margin: 10px 0 0 0;
        display: flex;
        flex-direction: column;
        gap: 4px;

        li {
          color: var(--Color-5, #9a9a9a);
          font-variant-numeric: ordinal;
          font-feature-settings: "dlig" on;

          /* H5 */
          font-family: Manrope;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 29px;
          padding-left: 0;
        }
      }
    }
  }

  &-advantages {
    width: 1362px;
    margin: 82px auto 88px;
    box-sizing: border-box;
    background: #fff;

    &-title {
      color: var(--Color-4, #1a1e1d);
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;
      font-family: Manrope;
      font-size: 72px;
      font-style: normal;
      font-weight: 600;
      line-height: 84px; /* 116.667% */
      letter-spacing: -2px;
    }

    &-cards {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 18px;
    }

    &-card {
      display: flex;
      width: 328px;
      height: 357px;
      padding: 32px 16px;
      flex-direction: column;
      align-items: flex-start;
      box-sizing: border-box;
      flex-shrink: 0;
      border-radius: 33px;
      border: 1px solid var(--Linear, #ef536b);
      gap: 52px;

      &-icon {
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        aspect-ratio: 1/1;

        img {
          width: 100%;
          height: 100%;
        }
      }

      &-title {
        color: var(--Color-4, #1a1e1d);

        /* H4 */
        font-family: Manrope;
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: 37px; /* 132.143% */
      }

      &-description {
        width: 296px;
        color: var(--Color-5, #9a9a9a);
        leading-trim: both;
        text-edge: cap;

        /* H5 */
        font-family: Manrope;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
      }
    }
  }

  &-learn {
    width: 1440px;
    margin-bottom: 86px;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-tags {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 40px;
    }

    &-tag {
      display: flex;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 100px;
      background: var(--Color, #ff4500);
      color: var(--White, #fff);

      /* SMALL-TAG */
      font-family: Geist;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 21px */
      letter-spacing: -0.14px;
    }

    &-title {
      color: var(--Color-Black, #000);
      text-align: center;

      /* H1 */
      font-family: Geist;
      font-size: 100px;
      font-style: normal;
      font-weight: 500;
      line-height: 108%; /* 108px */
      letter-spacing: -6px;
      margin: 40px 0;
    }

    &-button {
      display: flex;
      width: 300px;
      height: 68px;
      padding: 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 130px;
      background: linear-gradient(270deg, #ef536b 0%, #f79355 100%);
      color: var(--White, #fff);
      text-align: center;
      font-family: Manrope;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 22.4px */
      letter-spacing: -0.32px;
      text-transform: capitalize;
      border-width: 0px;
      cursor: pointer;

      &-icon {
        width: 45px;
        height: 45px;
        flex-shrink: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  &-deploy {
    width: calc(1440px - 168px);
    margin: 0 auto 86px;

    &-title {
      color: var(--Color-4, #1a1e1d);
      text-align: center;
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;

      /* H1 */
      font-family: Manrope;
      font-size: 72px;
      font-style: normal;
      font-weight: 600;
      line-height: 84px; /* 116.667% */
      letter-spacing: -2px;
    }

    &-image {
      width: 1278px;
      height: 440px;
      margin: 39px auto 87px;
      border-radius: 14px;
      background: url(@/assets/Applications/deploy-banner.png) lightgray 50% /
        cover no-repeat;
    }

    &-content {
      display: flex;
      justify-content: space-between;
    }

    &-left {
      display: flex;
      flex-direction: column;
    }

    &-description {
      width: 622px;
      color: #000;
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;

      /* H5 */
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px; /* 161.111% */
    }

    &-button {
      margin-top: 30px;
      display: flex;
      width: 411px;
      height: 68px;
      padding: 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 130px;
      background: linear-gradient(270deg, #ef536b 0%, #f79355 100%);
      color: var(--White, #fff);
      text-align: center;
      font-family: Manrope;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 22.4px */
      letter-spacing: -0.32px;
      text-transform: capitalize;
      border-width: 0px;
      cursor: pointer;
      img {
        width: 45px;
        height: 45px;
        flex-shrink: 0;
      }
    }
    &-right {
      margin-top: 14px;
    }

    &-checklist {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    &-checklist-item {
      display: flex;
      align-items: flex-start;
      color: #363d4f;

      /* H6 */
      font-family: Manrope;
      font-size: var(--font-size-base, 16px);
      font-style: normal;
      font-weight: var(--font-weight-medium, 500);
      line-height: normal;
      gap: 15px;
      img {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
      }
    }
  }

  &-abous {
    width: 1361px;
    height: 594px;
    margin: 0 auto 26px;
    padding: 38px 68px 21px 68px;
    box-sizing: border-box;
    border-radius: 14px;
    background: url("@/assets/abousbg.png") lightgray 0px -230.155px / 100% 138.773%
      no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &-title {
      margin-top: 113px;
      width: 611.024px;
      color: var(--White, #fff);
      text-align: center;
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;

      /* H2 */
      font-family: Manrope;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: 65px; /* 135.417% */
      letter-spacing: -2px;
    }

    &-description {
      margin-top: 26px;
      color: rgba(250, 250, 250, 0.6);
      text-align: center;
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;

      /* H5 */
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px; /* 161.111% */
    }

    &-buttons {
      margin-top: 26px;
      display: flex;
      gap: 27px;
      flex-wrap: wrap;
      justify-content: center;
    }

    &-button {
      display: flex;
      height: 60px;
      cursor: pointer;
      padding: 0 20px;
      align-items: center;
      justify-content: center;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 15px;
      border-radius: 95.175px;
      border: 0.952px solid var(--Gray-3, #828282);
      color: #bdbdbd;

      /* TAG */
      font-family: Manrope;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 21px */
      letter-spacing: -0.14px;
      background: transparent;

      &-icon {
        display: flex;
        height: 46px;
        width: 46px;
        justify-content: center;
        align-items: center;
        border-radius: 72.968px;
        border: 0.73px solid var(--Gray-3, #828282);
        background: #00d419;

        img {
          width: 18.4px;
          height: 18.4px;
        }
      }
    }
  }
}
</style>