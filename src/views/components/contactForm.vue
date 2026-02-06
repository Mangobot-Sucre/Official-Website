<template>
  <div class="contact-form">
    <div class="contact-form-left">
      <div class="contact-form-title">Contact Us</div>

      <!-- Steps Indicator -->
      <div class="contact-form-steps">
        <div
          class="contact-form-steps-item"
          :class="{ active: currentStep >= 1 }"
        >
          <span v-if="currentStep <= 1" class="step-num">1</span>
          <span v-if="currentStep > 1" class="step-num-icon">
            <img src="@/assets/check.svg" alt="" />
          </span>
          <span
            :class="['step-text', currentStep > 1 ? 'step-text-active' : '']"
            >Your Information</span
          >
        </div>
        <div
          class="contact-form-steps-line"
          :class="{ active: currentStep >= 1 }"
        ></div>
        <div
          class="contact-form-steps-item"
          :class="{ active: currentStep >= 2 }"
        >
          <span v-if="currentStep <= 2" class="step-num">2</span>
          <span v-if="currentStep > 2" class="step-num-icon">
            <img src="@/assets/check.svg" alt="" />
          </span>
          <span
            :class="['step-text', currentStep > 2 ? 'step-text-active' : '']"
            >Your Inquiry</span
          >
        </div>
        <div
          class="contact-form-steps-line"
          :class="{ active: currentStep >= 2 }"
        ></div>
        <div
          class="contact-form-steps-item"
          :class="{ active: currentStep >= 3 }"
        >
          <span v-if="currentStep <= 3" class="step-num">3</span>
          <span v-if="currentStep > 3" class="step-num-icon">
            <img src="@/assets/check.svg" alt="" />
          </span>
          <span
            :class="['step-text', currentStep > 3 ? 'step-text-active' : '']"
            >Preferred Contact</span
          >
        </div>
      </div>

      <!-- Step 1: Your Information -->
      <div v-if="currentStep === 1" class="contact-form-content">
        <div class="contact-form-section-title">Your Information</div>
        <div class="contact-form-grid">
          <div class="contact-form-field">
            <label>Full Name</label>
            <a-input
              v-model:value="form.fullName"
              placeholder="Enter your name"
              size="large"
            />
          </div>
          <div class="contact-form-field">
            <label>Email</label>
            <a-input
              v-model:value="form.email"
              placeholder="Enter your email"
              size="large"
            />
          </div>
          <div class="contact-form-field">
            <label>Phone</label>
            <a-input
              v-model:value="form.phone"
              placeholder="Enter your contact number"
              size="large"
            />
          </div>
          <div class="contact-form-field">
            <label>Organization</label>
            <a-input
              v-model:value="form.organization"
              placeholder="Enter your organization name"
              size="large"
            />
          </div>
          <div class="contact-form-field">
            <label>Title / Position</label>
            <a-input
              v-model:value="form.title"
              placeholder="Enter your position"
              size="large"
            />
          </div>
          <div class="contact-form-field">
            <label>Country / Region</label>
            <a-select
              v-model:value="form.country"
              show-search
              placeholder="Select country"
              size="large"
              style="width: 100%"
            >
              <a-select-option v-for="item in countryList" :key="item[0]" :value="item[0]">{{ item[0] }}</a-select-option>
            </a-select>
          </div>
        </div>
      </div>

      <!-- Step 2: Your Inquiry -->
      <div v-if="currentStep === 2" class="contact-form-content">
        <div class="contact-form-section-title">Your Inquiry</div>
        <div class="contact-form-grid">
          <div class="contact-form-field">
            <label>Which Mangobot model interests you?</label>
            <a-select
              v-model:value="form.model"
              placeholder="Select model"
              size="large"
              style="width: 100%"
            >
              <a-select-option value="A2 Ultra">A2 Ultra</a-select-option>
              <a-select-option value="X2 Ultra">X2 Ultra</a-select-option>
              <a-select-option value="D1 Ultra">D1 Ultra</a-select-option>
              <a-select-option value="G1 Ultra">G1 Ultra</a-select-option>
              <a-select-option value="Multiple">Multiple</a-select-option>
              <a-select-option value="Not Sure">Not Sure</a-select-option>
            </a-select>
          </div>
          <div class="contact-form-field">
            <label>What's your primary use case?</label>
            <a-select
              v-model:value="form.useCase"
              placeholder="Select use case"
              size="large"
              style="width: 100%"
            >
              <a-select-option value="Fashion Shows"
                >Fashion Shows</a-select-option
              >
              <a-select-option value="Private Demonstration">Private Demonstration</a-select-option>
              <a-select-option value="Leasing Options">Leasing Options</a-select-option>
              <a-select-option value="Techniacal Consultation">Techniacal Consultation</a-select-option>
              <a-select-option value="Event & Entertainment">Event & Entertainment</a-select-option>
              <a-select-option value="Creators">Creators</a-select-option>
              <a-select-option value="Media & Press">Media & Press</a-select-option>
              <a-select-option value="Exploring / Not Sure Yet">Exploring / Not Sure Yet</a-select-option>
              <a-select-option value="Other">Other</a-select-option>
            </a-select>
          </div>
        </div>
        <div class="contact-form-field contact-form-field-full">
          <label>What's your timeline?</label>
          <a-radio-group
            v-model:value="form.timeline"
            class="contact-form-radio-group"
          >
            <a-radio-button
              v-for="option in timelineOptions"
              :key="option"
              :value="option"
            >
              {{ option }}
            </a-radio-button>
          </a-radio-group>
        </div>
        <div class="contact-form-field contact-form-field-full">
          <label>How did you hear about us?</label>
          <a-select
            v-model:value="form.source"
            placeholder="Select"
            size="large"
            style="width: 100%"
          >
            <a-select-option value="Conference">Conference</a-select-option>
            <a-select-option value="Referral">Referral</a-select-option>
            <a-select-option value="Web Search">Web Search</a-select-option>
            <a-select-option value="Social Media">Social Media</a-select-option>
            <a-select-option value="Press">Press</a-select-option>
            <a-select-option value="Other">Other</a-select-option>
          </a-select>
        </div>
        <div class="contact-form-field contact-form-field-full">
          <label>Tell Us More:</label>
          <a-textarea
            v-model:value="form.message"
            placeholder="Start writing from this..."
            :rows="4"
          />
        </div>
      </div>

      <!-- Step 3: Preferred Contact -->
      <div v-if="currentStep === 3" class="contact-form-content">
        <div class="contact-form-section-title">Preferred Content</div>
        <div class="contact-form-grid">
          <div class="contact-form-field">
            <label>Best time to reach you?</label>
            <a-date-picker
              v-model:value="form.preferredTime"
              show-time
              placeholder="Select Date & Time"
              size="large"
              style="width: 100%"
            />
          </div>
          <div class="contact-form-field">
            <label>Preferred communication method?</label>
            <a-select
              v-model:value="form.communicationMethod"
              placeholder="Select"
              size="large"
              style="width: 100%"
            >
              <a-select-option value="Email">Email</a-select-option>
              <a-select-option value="WhatsApp">WhatsApp</a-select-option>
            </a-select>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="contact-form-nav">
        <div class="contact-form-nav-step">Step {{ currentStep }} of 3</div>
        <div class="contact-form-nav-buttons">
          <button v-if="currentStep > 1" class="btn-back" @click="prevStep">
            Back
          </button>
          <button v-if="currentStep < 3" class="btn-next" @click="nextStep">
            Next
          </button>
          <button
            v-if="currentStep === 3"
            class="btn-submit"
            @click="submitForm"
          >
            Submit
          </button>
        </div>
      </div>

      <div v-if="submitted && currentStep === 3" class="contact-form-success">
        Thank you. Your inquiry has been received. Our team will be in touch
        shortly.
      </div>
    </div>

    <!-- Right Side: Contact Info -->
    <div class="contact-form-right">
      <div class="contact-form-info">
        <div class="contact-form-info-item">
          <div class="contact-form-info-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M18.157 28.4892C17.5787 29.0306 16.8059 29.3333 16.0015 29.3333C15.1971 29.3333 14.4242 29.0306 13.846 28.4892C8.5507 23.5013 1.45435 17.9292 4.91502 9.83951C6.78618 5.4655 11.2778 2.66663 16.0015 2.66663C20.7252 2.66663 25.2168 5.4655 27.088 9.83951C30.5443 17.919 23.4654 23.5185 18.157 28.4892Z"
                stroke="url(#paint0_linear_2383_15396)"
                stroke-width="1.5"
              />
              <path
                d="M20.6673 14.6667C20.6673 17.244 18.578 19.3333 16.0007 19.3333C13.4233 19.3333 11.334 17.244 11.334 14.6667C11.334 12.0893 13.4233 10 16.0007 10C18.578 10 20.6673 12.0893 20.6673 14.6667Z"
                stroke="url(#paint1_linear_2383_15396)"
                stroke-width="1.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2383_15396"
                  x1="28.0025"
                  y1="16"
                  x2="4"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EF536B" />
                  <stop offset="1" stop-color="#F79355" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2383_15396"
                  x1="20.6673"
                  y1="14.6667"
                  x2="11.334"
                  y2="14.6667"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EF536B" />
                  <stop offset="1" stop-color="#F79355" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="contact-form-info-content">
            <div class="contact-form-info-label">Address:</div>
            <div class="contact-form-info-value">
              Unit 3905-068, Single Business Tower, Business Bay, Dubai, UAE
            </div>
          </div>
        </div>
        <div class="contact-form-info-item">
          <div class="contact-form-info-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M2.66602 8L11.8834 13.2226C15.2815 15.148 16.7172 15.148 20.1153 13.2226L29.3327 8"
                stroke="url(#paint0_linear_2383_15407)"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M2.68704 17.9675C2.7742 22.0548 2.81779 24.0985 4.32596 25.6124C5.83413 27.1263 7.93313 27.1791 12.1311 27.2845C14.7184 27.3496 17.2803 27.3496 19.8676 27.2845C24.0656 27.1791 26.1646 27.1263 27.6728 25.6124C29.1809 24.0985 29.2245 22.0548 29.3117 17.9675C29.3397 16.6532 29.3397 15.3467 29.3117 14.0325C29.2245 9.94511 29.1809 7.90142 27.6728 6.38751C26.1646 4.8736 24.0656 4.82086 19.8676 4.71538C17.2803 4.65038 14.7184 4.65037 12.1311 4.71538C7.93312 4.82084 5.83413 4.87358 4.32595 6.38749C2.81778 7.9014 2.7742 9.94509 2.68703 14.0325C2.65901 15.3467 2.65901 16.6532 2.68704 17.9675Z"
                stroke="url(#paint1_linear_2383_15407)"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2383_15407"
                  x1="29.3327"
                  y1="11.3333"
                  x2="2.66602"
                  y2="11.3333"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EF536B" />
                  <stop offset="1" stop-color="#F79355" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2383_15407"
                  x1="29.3327"
                  y1="16"
                  x2="2.66602"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EF536B" />
                  <stop offset="1" stop-color="#F79355" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="contact-form-info-content">
            <div class="contact-form-info-label">Contact:</div>
            <div class="contact-form-info-value">+971 50 279 6518</div>
          </div>
        </div>
        <div class="contact-form-info-item">
          <div class="contact-form-info-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M5.03618 15.9231C3.77215 13.719 3.16181 11.9193 2.7938 10.0949C2.24951 7.39673 3.4951 4.76103 5.55852 3.07926C6.43061 2.36847 7.43032 2.61132 7.94602 3.53649L9.11026 5.62517C10.0331 7.28071 10.4945 8.10848 10.403 8.98608C10.3114 9.86368 9.68917 10.5784 8.44465 12.008L5.03618 15.9231ZM5.03618 15.9231C7.59469 20.3843 11.6098 24.4016 16.0762 26.9631M16.0762 26.9631C18.2803 28.2272 20.08 28.8375 21.9044 29.2055C24.6026 29.7498 27.2383 28.5042 28.9201 26.4408C29.6308 25.5687 29.388 24.569 28.4628 24.0533L26.3741 22.8891C24.7186 21.9662 23.8908 21.5048 23.0132 21.5964C22.1356 21.6879 21.4209 22.3101 19.9913 23.5547L16.0762 26.9631Z"
                stroke="url(#paint0_linear_2383_15417)"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2383_15417"
                  x1="29.3327"
                  y1="16"
                  x2="2.66602"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EF536B" />
                  <stop offset="1" stop-color="#F79355" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="contact-form-info-content">
            <div class="contact-form-info-label">Email Address:</div>
            <div class="contact-form-info-value">info@mangobot.com</div>
          </div>
        </div>
      </div>
      <div class="contact-form-map" @click="goMap">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { countryList } from "@/constant/index";
import { message } from 'ant-design-vue';
const currentStep = ref(1);
const submitted = ref(false);

const form = ref({
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  title: "",
  country: "United Arab Emirates",
  model: "",
  useCase: "",
  timeline: "",
  source: "",
  message: "",
  preferredTime: "",
  communicationMethod: "",
});

const timelineOptions = ["Exploring", "1-3 months", "3-6 months", "Immediate"];

const nextStep = () => {
  if (currentStep.value < 3) currentStep.value++;
};

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--;
};

const realSubmit = () => {
  fetch('https://email.mangobot.org/api/send',{
    method: 'POST',
    headers : {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: 'changekuan@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${form.value.fullName}
        Email: ${form.value.email}
        Phone: ${form.value.phone}
        Organization: ${form.value.organization}
        Title: ${form.value.title}
        Country: ${form.value.country},
        Model: ${form.value.model},
        Use Case: ${form.value.useCase},
        Timeline: ${form.value.timeline},
        Source: ${form.value.source},
        Message: ${form.value.message},
        Preferred Time: ${form.value.preferredTime},
        Communication Method: ${form.value.communicationMethod}
      `,
    }),
  }).then(res => {
    if (res.ok) {
      submitted.value = true;
      message.success('Form submitted successfully');
      setTimeout(() => {
        submitted.value = false;
        form.value = {
          fullName: "",
          email: "",
          phone: "",
          organization: "",
          title: "",
          country: "United Arab Emirates",
          model: "",
          useCase: "",
          timeline: "",
          source: "",
          message: "",
          preferredTime: "",
          communicationMethod: "",
        };
        currentStep.value = 1;
      }, 500);
    }
  }).catch(err => {
    console.error(err);
  });
};


function goMap() {
  window.open('https://maps.app.goo.gl/bZbjY1cppuPtSLk49', '_blank');
}

/* ========================
   防抖函数（通用）
======================== */
function debounce(fn, delay = 800) {
  let timer = null;
  return function (...args) {
    if (timer) return; // 防止短时间重复触发
    timer = setTimeout(() => {
      timer = null;
    }, delay);
    fn.apply(this, args);
  };
}


const submitForm = debounce(realSubmit, 800);


</script>

<style lang="less" scoped>
.contact-form {
  width: 1365px;
  margin: 80px auto;
  display: flex;

  &-left {
    width: 695px;
    display: flex;
    gap: 24px;
    flex-direction: column;
  }

  &-content {
    width: 700px;
    border-radius: 32px;
    border: 1px solid var(--Colors-Neutrals-Neutral-300, #f1f2f9);
    background: var(--Colors-Neutrals-White, #fff);

    /* Shadows/Neutrals/Neutral 02 */
    box-shadow: 0 1px 8px 0 rgba(25, 33, 61, 0.06);
    display: flex;
    padding: 48px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    box-sizing: border-box;
  }

  &-title {
    color: #0f0f0f;
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

  &-steps {
    display: flex;
    padding: 24px;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    width: 700px;
    // box-sizing: border-box;
    border-radius: var(--Sizes-Border-Radius-BR-5, 16px);
    background: rgba(255, 69, 0, 0.1);
    box-shadow: 0 -1.167px 1.167px 0 rgba(150, 161, 172, 0.12) inset;

    &-item {
      display: flex;
      align-items: center;
      gap: 8px;

      .step-num {
        display: flex;
        width: 31px;
        height: 31px;
        padding: 10.5px;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        align-items: center;
        gap: 10px;
        color: var(--Colors-Neutrals-Neutral-700, #514f6e);
        text-align: center;
        leading-trim: both;
        text-edge: cap;
        font-feature-settings: "liga" off, "clig" off;

        /* Display 2/Bold */
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 115%; /* 16.1px */
        gap: 12px;
        border-radius: 8px;
        background: #d9dbe9;
        &-icon {
          display: flex;
          width: 31px;
          height: 31px;
          padding: 10.5px;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
          align-items: center;
          gap: 10px;
          color: var(--Colors-Neutrals-Neutral-700, #514f6e);
          text-align: center;
          leading-trim: both;
          text-edge: cap;
          font-feature-settings: "liga" off, "clig" off;

          /* Display 2/Bold */
          font-family: var(--Typography-Font-Family-Primary-Font, Inter);
          font-size: var(--Typography-Font-Size-Display-2, 14px);
          font-style: normal;
          font-weight: 600;
          line-height: 115%; /* 16.1px */
          gap: 12px;
          border-radius: var(--Sizes-Border-Radius-BR-3, 8px);
          border: 0.5px solid var(--Colors-Neutrals-Neutral-300, #f1f2f9);
          background: var(--Colors-Neutrals-White, #fff);
          box-shadow: 0 2px 5px 0 rgba(23, 15, 73, 0.06),
            0 -1.167px 1.167px 0 rgba(150, 161, 172, 0.12) inset;
          svg {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
          }
        }
      }

      .step-text {
        color: var(--Description, #757d89);
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;

        /* H5 */
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px; /* 161.111% */
      }

      &.active {
        .step-num {
          border-radius: var(--Sizes-Border-Radius-BR-3, 8px);
          background: #ff4500;
          color: #fff;
        }
        .step-text {
          color: #ff4500;
        }
        .step-text-active {
          color: #fff;
        }
      }
    }

    &-line {
      width: 32px;
      height: 3px;
      border-radius: var(--Sizes-Border-Radius-BR-1, 2px);
      background: var(--Colors-Neutrals-Neutral-400, #d9dbe9);

      &.active {
        height: 4px;
        border-radius: var(--Sizes-Border-Radius-BR-1, 2px);
        background: var(--Color, #ff4500);
      }
    }
  }

  &-section-title {
    color: var(--Color-6, #393939);
    leading-trim: both;
    text-edge: cap;

    /* H5 */
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 37px; /* 154.167% */
  }

  &-grid {
    margin-top: 32px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px 12px;
  }

  &-field {
    display: flex;
    flex-direction: column;
    gap: 12px ;
    min-width: 290px;

    label {
      color: #393939;
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    // Ant Design Input styles
    :deep(.ant-input) {
      height: 48px;
      border-radius: 14px;
      border: 1px solid #dcdcdc;
      font-family: Manrope;
      font-size: 14px;

      &:hover {
        border-color: #ff4500;
      }

      &:focus,
      &-focused {
        border-color: #ff4500;
        box-shadow: 0 0 0 2px rgba(255, 69, 0, 0.1);
      }
    }

    // Ant Design Select styles
    :deep(.ant-select) {
      .ant-select-selector {
        height: 48px !important;
        border-radius: 14px !important;
        border: 1px solid #dcdcdc !important;
        padding: 0 16px !important;

        .ant-select-selection-item,
        .ant-select-selection-placeholder {
          line-height: 46px !important;
          font-family: Manrope;
          font-size: 14px;
        }
      }

      &:hover .ant-select-selector {
        border-color: #ff4500 !important;
      }

      &.ant-select-focused .ant-select-selector {
        border-color: #ff4500 !important;
        box-shadow: 0 0 0 2px rgba(255, 69, 0, 0.1) !important;
      }
    }

    // Ant Design DatePicker styles
    :deep(.ant-picker) {
      height: 48px;
      border-radius: 14px;
      border: 1px solid #dcdcdc;

      &:hover {
        border-color: #ff4500;
      }

      &.ant-picker-focused {
        border-color: #ff4500;
        box-shadow: 0 0 0 2px rgba(255, 69, 0, 0.1);
      }

      .ant-picker-input > input {
        font-family: Manrope;
        font-size: 14px;
      }
    }

    // Ant Design Textarea styles
    :deep(.ant-input-textarea) {
      .ant-input {
        min-height: 100px;
        border-radius: 14px;
        border: 1px solid #dcdcdc;
        font-family: Manrope;
        font-size: 14px;
        resize: vertical;

        &:hover {
          border-color: #ff4500;
        }

        &:focus {
          border-color: #ff4500;
          box-shadow: 0 0 0 2px rgba(255, 69, 0, 0.1);
        }
      }
    }

    &-full {
      grid-column: 1 / -1;
      margin-top: 20px;
      width: 100%;

      :deep(.ant-select) {
        width: 100% !important;
      }

      :deep(.ant-input-textarea) {
        width: 100%;

        .ant-input {
          width: 100%;
        }
      }
    }
  }

  // Ant Design Radio Group styles
  &-radio-group {
    display: flex !important;
    flex-direction: row !important;
    gap: 12px;
    flex-wrap: nowrap !important;
    width: auto !important;

    :deep(.ant-radio-group) {
      display: flex !important;
      flex-direction: row !important;
      gap: 12px;
      flex-wrap: nowrap !important;
    }

    :deep(.ant-radio-button-wrapper) {
      height: 48px;
      padding: 0 16px 0 20px;
      border-radius: 16px !important;
      border: 1px solid #e4e4e7;
      font-family: Manrope;
      font-size: 14px;
      line-height: 46px;
      color: #52525b;
      background: #fff;
      display: inline-flex !important;
      align-items: center;
      gap: 12px;
      flex: 0 0 auto !important;
      width: auto !important;

      &::before {
        display: none !important;
      }

      // Add radio circle on the right
      &::after {
        content: "";
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid #d4d4d8;
        background: #fff;
        flex-shrink: 0;
        transition: all 0.2s;
      }

      &:hover {
        color: #52525b;
        border-color: #d4d4d8;
      }

      &.ant-radio-button-wrapper-checked {
        border-color: #e4e4e7;
        background: #fff;
        color: #18181b;

        &::after {
          border-color: #ff4500;
          background: #ff4500;
          box-shadow: inset 0 0 0 3px #fff;
        }

        &:hover {
          color: #18181b;
          border-color: #d4d4d8;
        }
      }
    }
  }

  &-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 48px;

    &-step {
      color: var(--Description, #757d89);

      /* H6 */
      font-family: Manrope;
      font-size: var(--font-size-base, 16px);
      font-style: normal;
      font-weight: var(--font-weight-medium, 500);
      line-height: normal;
    }

    &-buttons {
      display: flex;
      gap: 12px;
    }

    .btn-back {
      display: flex;
      width: 160px;
      height: 48px;
      min-height: 48px;
      padding: 16px 18px;
      justify-content: center;
      align-items: center;
      gap: 6px;
      box-sizing: border-box;
      border-radius: 12px;
      border: 1px solid #dcdcdc;
      background-color: #fff;
      color: var(--Colors-Neutrals-Neutral-800, #170f49);
      text-align: center;
      cursor: pointer;

      /* BUTTON */
      font-family: Manrope;
      font-size: var(--font-size-base, 16px);
      font-style: normal;
      font-weight: var(--font-weight-medium, 500);
      line-height: normal;
    }

    .btn-next,
    .btn-submit {
      display: flex;
      width: 160px;
      height: 48px;
      min-height: 48px;
      padding: 16px 18px;
      justify-content: center;
      align-items: center;
      gap: 6px;
      border-radius: var(--Sizes-Border-Radius-BR-4, 12px);
      background: var(--Color, #ff4500);
      border-width: 0px;
      color: var(--Colors-Neutrals-White, #fff);
      text-align: center;
      cursor: pointer;

      /* H6 */
      font-family: Manrope;
      font-size: var(--font-size-base, 16px);
      font-style: normal;
      font-weight: var(--font-weight-medium, 500);
      line-height: normal;
    }
  }

  &-success {
    margin-top: 20px;
    color: var(--Color-5, #9a9a9a);
    text-align: center;

    /* TAG */
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: -0.14px;
  }

  &-right {
    width: 525px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-left: 88px;
    margin-top: 116px;
  }

  &-info {
    display: flex;
    flex-direction: column;
    gap: 33px;
    margin: 0 auto;

    &-item {
      display: flex;
      align-items: flex-start;
      gap: 36px;
    }

    &-icon {
      width: 88px;
      height: 88px;
      border-radius: 99px;
      border: 1px solid #e9ebf1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      svg {
        width: 32px;
        height: 32px;
        aspect-ratio: 1/1;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: 13px;
    }

    &-label {
      color: #060b13;

      /* H3 */
      font-family: Manrope;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 37px; /* 115.625% */
    }

    &-value {
      color: #363d4f;
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

  &-map {
    width: 509px;
    height: 282.778px;
    margin: 25px auto 0;
    cursor: pointer;
    background: url('@/assets/map.jpg') 50% 50% / cover no-repeat;
  }
}
</style>