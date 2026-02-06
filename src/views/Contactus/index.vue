<template>
  <div class="contactus">
    <div class="contactus-hero">
      <div class="contactus-hero-content">
        <div class="contactus-hero-title">
          <span class="contactus-hero-title-highlight">Mangobot</span> Is Here
          for You
        </div>
        <div class="contactus-hero-desc">
          Ready to see how intelligent humanoid robotics fits your space?
          Whether you're exploring a private demo, deployment options,
          partnerships, or events, we're here to discuss your goals and show you
          exactly what's possible with Mangobot.
        </div>
        <div class="contactus-hero-image"></div>
      </div>
    </div>
    <div class="contactus-visit">
      <div class="contactus-visit-left">
        <div class="contactus-visit-left-logo"></div>
        <div class="contactus-visit-left-title">
          Visit the Mangobot<br />Showroom
        </div>
        <div class="contactus-visit-left-desc">
          See our robots live, explore real capabilities, and discuss use cases
          tailored to your needs.
        </div>
      </div>
      <div class="contactus-visit-right">
        <!-- Step 1: Choose Visit Type -->
        <template v-if="visitStep === 1">
          <div class="contactus-visit-right-title">Choose Visit Type</div>
          <div class="contactus-visit-right-options">
            <div
              v-for="(item, index) in visitTypes"
              :key="item.name"
              class="contactus-visit-right-option"
              :class="{
                'contactus-visit-right-option-active': visitActive === index,
              }"
              @click="
                visitActive = index;
                visitStep = 2;
              "
            >
              <div class="contactus-visit-right-option-info">
                <div class="contactus-visit-right-option-name">
                  {{ item.name }}
                </div>
                <div class="contactus-visit-right-option-time">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <circle
                      cx="10.5"
                      cy="10.5"
                      r="8.75"
                      stroke="#9A9A9A"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.25 6.125C11.25 5.71079 10.9142 5.375 10.5 5.375C10.0858 5.375 9.75 5.71079 9.75 6.125H10.5H11.25ZM12.3428 11.2822C12.0499 10.9893 11.5751 10.9893 11.2822 11.2822C10.9893 11.5751 10.9893 12.0499 11.2822 12.3428L11.8125 11.8125L12.3428 11.2822ZM12.5947 13.6553C12.8876 13.9482 13.3624 13.9482 13.6553 13.6553C13.9482 13.3624 13.9482 12.8876 13.6553 12.5947L13.125 13.125L12.5947 13.6553ZM10.5 6.125H9.75V9.1875H10.5H11.25V6.125H10.5ZM11.8125 11.8125L11.2822 12.3428L12.5947 13.6553L13.125 13.125L13.6553 12.5947L12.3428 11.2822L11.8125 11.8125ZM11.8125 10.5H11.0625C11.0625 10.8107 10.8107 11.0625 10.5 11.0625V11.8125V12.5625C11.6391 12.5625 12.5625 11.6391 12.5625 10.5H11.8125ZM10.5 11.8125V11.0625C10.1893 11.0625 9.9375 10.8107 9.9375 10.5H9.1875H8.4375C8.4375 11.6391 9.36091 12.5625 10.5 12.5625V11.8125ZM9.1875 10.5H9.9375C9.9375 10.1893 10.1893 9.9375 10.5 9.9375V9.1875V8.4375C9.36091 8.4375 8.4375 9.36091 8.4375 10.5H9.1875ZM10.5 9.1875V9.9375C10.8107 9.9375 11.0625 10.1893 11.0625 10.5H11.8125H12.5625C12.5625 9.36091 11.6391 8.4375 10.5 8.4375V9.1875Z"
                      fill="#9A9A9A"
                    />
                  </svg>
                  <span>{{ item.duration }}</span>
                </div>
              </div>
              <div class="contactus-visit-right-option-radio">
                <div class="contactus-visit-right-option-radio-inner"></div>
              </div>
            </div>
          </div>
        </template>

        <!-- Step 2: Select Date & Time -->
        <template v-else-if="visitStep === 2">
          <div class="contactus-visit-right-back" @click="visitStep = 1">
            ← Back
          </div>
          <div class="contactus-visit-right-title">Select Date & Time</div>
          <div class="contactus-visit-right-datetime">
            <div class="contactus-visit-right-calendar">
              <CustomCalendar v-model="selectedDate" @select="onDateSelect" />
              <div class="contactus-visit-right-timezone">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2461_13401)">
                      <path
                        d="M7 0C6.03385 0 5.12695 0.182292 4.2793 0.546875C3.42253 0.911458 2.67741 1.41048 2.04395 2.04395C1.41048 2.67741 0.911458 3.42253 0.546875 4.2793C0.182292 5.12695 0 6.03385 0 7C0 7.96615 0.182292 8.87305 0.546875 9.7207C0.911458 10.5775 1.41048 11.3226 2.04395 11.9561C2.67741 12.5895 3.42253 13.0885 4.2793 13.4531C5.12695 13.8177 6.03385 14 7 14C7.96615 14 8.87305 13.8177 9.7207 13.4531C10.5775 13.0885 11.3226 12.5895 11.9561 11.9561C12.5895 11.3226 13.0885 10.5775 13.4531 9.7207C13.8177 8.87305 14 7.96615 14 7C14 6.03385 13.8177 5.12695 13.4531 4.2793C13.0885 3.42253 12.5895 2.67741 11.9561 2.04395C11.3226 1.41048 10.5775 0.911458 9.7207 0.546875C8.87305 0.182292 7.96615 0 7 0ZM6.30273 12.5508C5.61003 12.4688 4.96745 12.2637 4.375 11.9355C3.77344 11.6165 3.25391 11.2109 2.81641 10.7188C2.37891 10.2266 2.03255 9.66146 1.77734 9.02344C1.52214 8.38542 1.39453 7.71094 1.39453 7C1.39453 6.78125 1.4082 6.56706 1.43555 6.35742C1.46289 6.14779 1.49935 5.94271 1.54492 5.74219L4.89453 9.10547V9.80273C4.89453 10.1855 5.03125 10.5137 5.30469 10.7871C5.57812 11.0605 5.91081 11.1973 6.30273 11.1973V12.5508ZM11.1289 10.7734C11.0378 10.4909 10.8714 10.2585 10.6299 10.0762C10.3883 9.89388 10.1126 9.80273 9.80273 9.80273H9.10547V7.69727C9.10547 7.50586 9.03711 7.3418 8.90039 7.20508C8.76367 7.06836 8.59505 7 8.39453 7H4.19727V5.60547H5.60547C5.79688 5.60547 5.96094 5.53711 6.09766 5.40039C6.23438 5.26367 6.30273 5.09505 6.30273 4.89453V3.5H7.69727C8.08919 3.5 8.42188 3.36328 8.69531 3.08984C8.96875 2.81641 9.10547 2.48828 9.10547 2.10547V1.80469C9.61589 2.01432 10.0853 2.29232 10.5137 2.63867C10.9421 2.98503 11.3112 3.38379 11.6211 3.83496C11.931 4.28613 12.1725 4.7806 12.3457 5.31836C12.5189 5.847 12.6055 6.40755 12.6055 7C12.6055 7.72917 12.4733 8.41732 12.209 9.06445C11.9447 9.71159 11.5846 10.2812 11.1289 10.7734Z"
                        fill="#1A1E1D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2461_13401">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 14)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Time Zone:</span
                >
                <a-select v-model:value="selectedTimezone" :options="timezoneOptions" />
              </div>
            </div>
            <div class="contactus-visit-right-times">
              <div
                v-for="time in timeSlots"
                :key="time"
                class="contactus-visit-right-time"
                :class="{ active: selectedTime === time }"
                @click="
                  selectedTime = time;
                  visitStep = 3;
                "
              >
                {{ time }}
              </div>
            </div>
          </div>
        </template>

        <!-- Step 3: Visitor Details -->
        <template v-else-if="visitStep === 3">
          <div class="contactus-visit-right-back" @click="visitStep = 2">
            ← Back
          </div>
          <div class="contactus-visit-right-title">Visitor Details</div>
          <div class="contactus-visit-right-selected">
            <div class="contactus-visit-right-selected-item">
              <span class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 2V4M6 2V4"
                    stroke="url(#paint0_linear_2462_13746)"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897"
                    stroke="url(#paint1_linear_2462_13746)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 8H20.5"
                    stroke="url(#paint2_linear_2462_13746)"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                    stroke="url(#paint3_linear_2462_13746)"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 8H21"
                    stroke="url(#paint4_linear_2462_13746)"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2462_13746"
                      x1="18"
                      y1="3"
                      x2="6"
                      y2="3"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EF536B" />
                      <stop offset="1" stop-color="#F79355" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2462_13746"
                      x1="16"
                      y1="15"
                      x2="8"
                      y2="15"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EF536B" />
                      <stop offset="1" stop-color="#F79355" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_2462_13746"
                      x1="20.5"
                      y1="8.5"
                      x2="3.5"
                      y2="8.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EF536B" />
                      <stop offset="1" stop-color="#F79355" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_2462_13746"
                      x1="21.5"
                      y1="12.5"
                      x2="2.5"
                      y2="12.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EF536B" />
                      <stop offset="1" stop-color="#F79355" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_2462_13746"
                      x1="21"
                      y1="8.5"
                      x2="3"
                      y2="8.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EF536B" />
                      <stop offset="1" stop-color="#F79355" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <div>
                <div class="date">{{ formatSelectedDate }}</div>
                <div class="time">{{ selectedTime }}</div>
              </div>
            </div>
            <div class="contactus-visit-right-selected-item">
              <span class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                    stroke="url(#paint0_linear_2462_13754)"
                    stroke-width="1.5"
                  />
                  <path
                    d="M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2"
                    stroke="url(#paint1_linear_2462_13754)"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21"
                    stroke="url(#paint2_linear_2462_13754)"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 13.4523C21.1129 12.9411 20 12.7308 18.8734 13.5405C16.7177 15.0898 15.2314 13.806 14.5619 15.0889C13.5765 16.9775 17.0957 17.5711 14 22"
                    stroke="url(#paint3_linear_2462_13754)"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2462_13754"
                      x1="22"
                      y1="12"
                      x2="2"
                      y2="12"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EF536B" />
                      <stop offset="1" stop-color="#F79355" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2462_13754"
                      x1="20"
                      y1="5.5"
                      x2="10"
                      y2="5.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EF536B" />
                      <stop offset="1" stop-color="#F79355" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_2462_13754"
                      x1="9"
                      y1="16"
                      x2="2"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EF536B" />
                      <stop offset="1" stop-color="#F79355" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_2462_13754"
                      x1="22"
                      y1="17.5"
                      x2="14"
                      y2="17.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EF536B" />
                      <stop offset="1" stop-color="#F79355" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <div class="timezone">Time Zone: {{ selectedTimezone }}</div>
            </div>
          </div>
          <div class="contactus-visit-right-form">
            <div class="contactus-visit-right-form-row">
              <div class="contactus-visit-right-form-field">
                <label>Full Name *</label>
                <a-input
                  v-model:value="visitorForm.fullName"
                  placeholder="Enter your name"
                />
              </div>
              <div class="contactus-visit-right-form-field">
                <label>Company / Organization</label>
                <a-input
                  v-model:value="visitorForm.company"
                  placeholder="Enter your organization name"
                />
              </div>
            </div>
            <div class="contactus-visit-right-form-row">
              <div class="contactus-visit-right-form-field">
                <label>Email *</label>
                <a-input
                  v-model:value="visitorForm.email"
                  placeholder="Enter your email address"
                />
              </div>
              <div class="contactus-visit-right-form-field">
                <label>Phone / WhatsApp *</label>
                <a-input
                  v-model:value="visitorForm.phone"
                  placeholder="Enter your contact number"
                />
              </div>
            </div>
          </div>
          <button class="contactus-visit-right-submit" @click="submitVisit">
            Confirm Visit
          </button>
          <div v-if="visitSubmitted" class="contactus-visit-right-success">
            Your showroom visit request has been submitted. Our team will
            confirm your time and share details shortly.
          </div>
        </template>
      </div>
    </div>
    <div class="contactus-withus">
      <div class="contactus-withus-title">Connect with us</div>
      <div class="contactus-withus-social">
        <a
          v-for="(item, index) in socialList"
          :key="item.name"
          :href="item.link"
          target="_blank"
          class="contactus-withus-social-item"
          @mouseenter="active = index"
          :class="{ 'contactus-withus-social-item-active': index === active }"
        >
          <img :src="index === active ? item.activeIcon : item.icon" :alt="item.name" />
          <span v-if="index === active">{{ item.name }}</span>
        </a>
      </div>
    </div>
    <contactForm />
    <div class="contactus-faq">
      <div class="contactus-faq-title">Frequently Asked Questions</div>
      <div class="contactus-faq-list">
        <!-- 左侧列 01, 02, 03 -->
        <div class="contactus-faq-col">
          <div
            v-for="(item, index) in faqList.slice(0, 3)"
            :key="index"
            class="contactus-faq-item"
            :class="{ 'contactus-faq-item-active': faqActive === index }"
            @click="faqActive = faqActive === index ? -1 : index"
          >
            <div class="contactus-faq-item-header">
              <div class="contactus-faq-item-num">
                {{ String(index + 1).padStart(2, "0") }}
              </div>
              <div class="contactus-faq-item-question">{{ item.question }}</div>
              <div class="contactus-faq-item-icon">
                {{ faqActive === index ? "×" : "+" }}
              </div>
            </div>
            <div v-if="faqActive === index" class="contactus-faq-item-answer">
              {{ item.answer }}
            </div>
          </div>
        </div>
        <!-- 右侧列 04, 05, 06 -->
        <div class="contactus-faq-col">
          <div
            v-for="(item, index) in faqList.slice(3, 6)"
            :key="index + 3"
            class="contactus-faq-item"
            :class="{ 'contactus-faq-item-active': faqActive === index + 3 }"
            @click="faqActive = faqActive === index + 3 ? -1 : index + 3"
          >
            <div class="contactus-faq-item-header">
              <div class="contactus-faq-item-num">
                {{ String(index + 4).padStart(2, "0") }}
              </div>
              <div class="contactus-faq-item-question">{{ item.question }}</div>
              <div class="contactus-faq-item-icon">
                {{ faqActive === index + 3 ? "×" : "+" }}
              </div>
            </div>
            <div
              v-if="faqActive === index + 3"
              class="contactus-faq-item-answer"
            >
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contactus-download">
      <div class="contactus-download-title">Download Resources</div>
      <div class="contactus-download-list">
        <div
          v-for="(item, index) in downloadList"
          :key="index"
          class="contactus-download-item"
        >
          <div class="contactus-download-item-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M3.33594 15.9994C3.33594 10.0282 3.33594 7.04267 5.19093 5.18768C7.04592 3.33269 10.0315 3.33269 16.0026 3.33269C21.9737 3.33269 24.9593 3.33269 26.8143 5.18768C28.6693 7.04267 28.6693 10.0282 28.6693 15.9994C28.6693 21.9705 28.6693 24.956 26.8143 26.811C24.9593 28.666 21.9737 28.666 16.0026 28.666C10.0315 28.666 7.04592 28.666 5.19093 26.811C3.33594 24.956 3.33594 21.9705 3.33594 15.9994Z"
                stroke="#141B34"
                stroke-width="2"
              />
              <path
                d="M10.668 21.666C10.1157 21.666 9.66797 22.1137 9.66797 22.666C9.66797 23.2183 10.1157 23.666 10.668 23.666L10.668 22.666L10.668 21.666ZM21.3346 23.666C21.8869 23.666 22.3346 23.2183 22.3346 22.666C22.3346 22.1137 21.8869 21.666 21.3346 21.666V22.666V23.666ZM20.0535 16.4498C20.4374 16.0528 20.4268 15.4197 20.0298 15.0358C19.6328 14.6519 18.9997 14.6624 18.6158 15.0594L19.3346 15.7546L20.0535 16.4498ZM17.7691 17.3735L18.4879 18.0687H18.4879L17.7691 17.3735ZM14.2335 17.3735L13.5147 18.0687L13.5147 18.0687L14.2335 17.3735ZM13.3868 15.0594C13.0029 14.6624 12.3698 14.6518 11.9728 15.0358C11.5758 15.4197 11.5652 16.0528 11.9491 16.4498L12.668 15.7546L13.3868 15.0594ZM17.0013 9.33269C17.0013 8.7804 16.5536 8.33269 16.0013 8.33269C15.449 8.33269 15.0013 8.7804 15.0013 9.33269L16.0013 9.33269L17.0013 9.33269ZM10.668 22.666L10.668 23.666L21.3346 23.666V22.666V21.666L10.668 21.666L10.668 22.666ZM19.3346 15.7546L18.6158 15.0594L17.0502 16.6783L17.7691 17.3735L18.4879 18.0687L20.0535 16.4498L19.3346 15.7546ZM14.2335 17.3735L14.9524 16.6783L13.3868 15.0594L12.668 15.7546L11.9491 16.4498L13.5147 18.0687L14.2335 17.3735ZM17.7691 17.3735L17.0502 16.6783C16.6137 17.1297 16.3552 17.3939 16.1475 17.5578C15.9613 17.7046 15.9432 17.666 16.0013 17.666L16.0013 18.666V19.666C16.5772 19.666 17.0262 19.412 17.3862 19.128C17.7246 18.861 18.0911 18.479 18.4879 18.0687L17.7691 17.3735ZM14.2335 17.3735L13.5147 18.0687C13.9115 18.479 14.278 18.861 14.6164 19.128C14.9764 19.412 15.4254 19.666 16.0013 19.666V18.666L16.0013 17.666C16.0594 17.666 16.0413 17.7046 15.8551 17.5578C15.6474 17.3939 15.3889 17.1297 14.9524 16.6783L14.2335 17.3735ZM16.0013 18.666H17.0013L17.0013 9.33269L16.0013 9.33269L15.0013 9.33269L15.0013 18.666H16.0013Z"
                fill="#141B34"
              />
            </svg>
          </div>
          <div class="contactus-download-item-text">{{ item.name }}</div>
        </div>
      </div>
      <div class="contactus-download-bg"></div>
    </div>
    <div class="contactus-away">
      <div class="contactus-away-title">
        The Future Is a<br />
        Conversation Away
      </div>
      <div class="contactus-away-desc">
        Many organizations started with curiosity. One conversation later, they
        had clarity. Let's find yours.
      </div>
    </div>
  </div>
</template>

<script setup>
import { message } from 'ant-design-vue';
import { ref, computed } from "vue";
import contactForm from "@/views/components/contactForm.vue";
import CustomCalendar from "@/views/components/CustomCalendar.vue";
import linkedinIcon from "@/assets/linkedin.svg";
import linkedinIconActive from "@/assets/linkedin-active.png";  
import xIcon from "@/assets/x.svg";
import xIconActive from "@/assets/x-active.png";
import instagramIcon from "@/assets/instagram.svg";
import instagramIconActive from "@/assets/instagram-active.png";
import tiktokIcon from "@/assets/TikTok.svg";
import tiktokIconActive from "@/assets/TikTok-active.png";
import youtubeIcon from "@/assets/youtube.svg";
import youtubeIconActive from "@/assets/youtube-active.png";
import dayjs from "dayjs";

const active = ref(0);
const visitActive = ref(1);
const visitStep = ref(1);
const selectedDate = ref(dayjs());
const selectedTime = ref("");
const selectedTimezone = ref("Gulf Standard Time");
const visitSubmitted = ref(false);

const visitorForm = ref({
  fullName: "",
  company: "",
  email: "",
  phone: "",
});

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
];

// 所有时区选项
const timezoneOptions = [
  { value: "Gulf Standard Time", label: "(GMT+4) Gulf Standard Time - Dubai" },
  { value: "China Standard Time", label: "(GMT+8) China Standard Time - Beijing/Shanghai" },
  { value: "Japan Standard Time", label: "(GMT+9) Japan Standard Time - Tokyo" },
  { value: "Korea Standard Time", label: "(GMT+9) Korea Standard Time - Seoul" },
  { value: "India Standard Time", label: "(GMT+5:30) India Standard Time - Mumbai" },
  { value: "Singapore Time", label: "(GMT+8) Singapore Time" },
  { value: "Hong Kong Time", label: "(GMT+8) Hong Kong Time" },
  { value: "Australian Eastern Time", label: "(GMT+10) Australian Eastern Time - Sydney" },
  { value: "New Zealand Time", label: "(GMT+12) New Zealand Time - Auckland" },
  { value: "Greenwich Mean Time", label: "(GMT+0) Greenwich Mean Time - London" },
  { value: "Central European Time", label: "(GMT+1) Central European Time - Paris/Berlin" },
  { value: "Eastern European Time", label: "(GMT+2) Eastern European Time - Athens" },
  { value: "Moscow Time", label: "(GMT+3) Moscow Time" },
  { value: "Eastern Time", label: "(GMT-5) Eastern Time - New York" },
  { value: "Central Time", label: "(GMT-6) Central Time - Chicago" },
  { value: "Mountain Time", label: "(GMT-7) Mountain Time - Denver" },
  { value: "Pacific Time", label: "(GMT-8) Pacific Time - Los Angeles" },
  { value: "Alaska Time", label: "(GMT-9) Alaska Time" },
  { value: "Hawaii Time", label: "(GMT-10) Hawaii Time" },
  { value: "Brazil Time", label: "(GMT-3) Brazil Time - São Paulo" },
  { value: "Argentina Time", label: "(GMT-3) Argentina Time - Buenos Aires" },
];

const formatSelectedDate = computed(() => {
  return selectedDate.value
    ? selectedDate.value.format("dddd, MMMM D, YYYY")
    : "";
});

const onDateSelect = (date) => {
  selectedDate.value = date;
};

const submitVisitApi = () => {
  // 检查所有必填项是否填写
  if (!visitorForm.value.fullName || !visitorForm.value.email || !visitorForm.value.phone) {
    message.error('Please fill in all required fields');
    return;
  }
  fetch('https://email.mangobot.org/api/send',{
    method: 'POST',
    headers : {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: 'changekuan@gmail.com',
      subject: 'New Visit Request',
      text: `
        Type: ${visitTypes.value[visitActive.value].name} ${visitTypes.value[visitActive.value].duration}
        Date: ${selectedDate.value?.format("YYYY-MM-DD")}
        Time: ${selectedTime.value}
        Timezone: ${selectedTimezone.value}
        Visitor: ${visitorForm.value.fullName}
        Company: ${visitorForm.value.company}
        Email: ${visitorForm.value.email}
        Phone: ${visitorForm.value.phone}
      `,
    }),
  }).then(res => {
    if (res.ok) {
      visitSubmitted.value = true;
      message.success('Visit request submitted successfully');
      setTimeout(() => {
        visitSubmitted.value = false;
        visitorForm.value = {
          fullName: "",
          company: "",
          email: "",
          phone: "",
        };
        selectedDate.value = dayjs();
        selectedTime.value = "";
        selectedTimezone.value = "Gulf Standard Time";
        visitActive.value = 1;
        visitStep.value = 1;
      }, 500);
    }
  }).catch(err => {
    console.error(err);
  });
};

const faqActive = ref(1);

const faqList = ref([
  {
    question: "How much does Mangobot cost?",
    answer:
      "Investment depends on model, customization, and lease vs. purchase. Contact us for a detailed proposal tailored to your needs.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "Typically 2-4 weeks from order to operation, including installation, integration, and training.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship globally and have regional support offices across the Middle East.",
  },
  {
    question: "Can I see Mangobot before committing?",
    answer:
      "Absolutely. We encourage private demonstrations at our showroom. You’re welcome to visit anytime.",
  },
  {
    question: "What kind of maintenance is required?",
    answer:
      "For leasing business, we provide on-site technician for robot maintenance. For selling business, we provide on-site delivery and professional training to ensure a smooth project delivery.",
  },
  {
    question: "Can I customize Mangobot for my specific needs?",
    answer:
      "All humanoid robots are fully customizable through our Link-Soul software platform. Contact us to learn more.",
  },
]);

const visitTypes = ref([
  { name: "Showroom Tour", duration: "15 min" },
  { name: "Live Robot Demo", duration: "30 min" },
  { name: "Business Consultation", duration: "45 min" },
]);

const socialList = ref([
  { name: "LinkedIn", icon: linkedinIconActive, activeIcon: linkedinIcon, link: "https://www.linkedin.com/company/mangobot/" },
  { name: "X", icon: xIcon, activeIcon: xIconActive, link: "https://x.com/mangobotrobot" },
  { name: "Instagram", icon: instagramIcon, activeIcon: instagramIconActive,  link: "https://www.instagram.com/mangobotrobotics" },
  { name: "TikTok", icon: tiktokIcon, activeIcon: tiktokIconActive, link: "https://www.tiktok.com/@mangobotrobotics?_t=ZS-90EqAq0VY6G&_r=1" },
  { name: "YouTube", icon: youtubeIcon, activeIcon: youtubeIconActive, link: "https://www.youtube.com/@mangobotrobotics" },
]);

const downloadList = ref([
  {
    name: "Product Overview Brochure (PDF)",
    iconColor: "#4caf50",
  },
  {
    name: "Technical Specification Sheets",
    iconColor: "#ffc107",
  },
  {
    name: "Case Study Collection",
    iconColor: "#e91e63",
  },
  {
    name: "Leasing vs. Purchase Comparison",
    iconColor: "#2196f3",
  },
  {
    name: "ROI Calculation Framework",
    iconColor: "#ff9800",
  },
]);


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


const submitVisit = debounce(submitVisitApi, 800);


</script>

<style lang="less" scoped>
.contactus {
  width: 1440px;
  margin: 0 auto;

  &-hero {
    margin-bottom: 48px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 975px;
    position: relative;
    overflow: hidden;
    &-image {
      position: absolute;
      top: -80px;
      left: -90px;
      width: 1620px;
      height: 1058px;
      z-index: -1;
      background: linear-gradient(
          175deg,
          rgba(255, 255, 255, 0) 69.88%,
          #fff 96.12%
        ),
        linear-gradient(180deg, #fff 25.66%, rgba(255, 255, 255, 0) 60.54%),
        url("@/assets/hear-bg.png") lightgray 75.194px 280.431px / 90.679%
          77.496% no-repeat;
    }

    &-content {
      padding-top: 73px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 34px;
    }

    &-title {
      width: 900px;
      color: var(--Color-4, #1a1e1d);
      font-variant-numeric: ordinal;
      font-feature-settings: "dlig" on;

      /* H1 */
      font-family: Manrope;
      font-size: 72px;
      font-style: normal;
      font-weight: 600;
      line-height: 84px;
      letter-spacing: -2px;

      &-highlight {
        color: var(--Color, #fcb62e);
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
    }

    &-desc {
      width: 860px;
      color: #000;
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
  }

  &-visit {
    display: flex;
    width: 1100px;
    padding: 24px;
    margin: 0 auto;
    // align-items: flex-start;
    align-content: space-between;
    gap: 32px;
    flex-wrap: wrap;
    box-sizing: border-box;

    &-left {
      display: flex;
      width: 435px;
      flex-direction: column;
      align-items: flex-start;
      gap: 51px;
      flex-shrink: 0;
      padding: 24px;
      box-sizing: border-box;

      &-logo {
        width: 160.828px;
        height: 66.985px;
        aspect-ratio: 160.83/66.99;
        background: url("@/assets/logo.png") 50% / cover no-repeat;
      }

      &-title {
        color: var(--Color-4, #1a1e1d);

        /* H3 */
        font-family: Manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 37px; /* 115.625% */
      }

      &-desc {
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

    &-right {
      display: flex;
      width: 550px;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      flex-shrink: 0;

      &-title {
        color: var(--Colors-Text-primery, #1a1a1a);
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;

        /* H5 */
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px; /* 161.111% */
      }

      &-options {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      &-option {
        color: var(--Color-4, #1a1e1d);
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;
        position: relative;

        /* H5 */
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px;
        width: 435px;
        border-radius: var(--Sizes-Border-Radius-BR-5, 16px);
        border: 1px solid var(--Colors-Neutrals-Neutral-400, #d9dbe9);
        background: var(--Colors-Neutrals-White, #fff);

        /* Shadows/Neutrals/Neutral 01 */
        box-shadow: 0 0.5px 1px 0 rgba(25, 33, 61, 0.04);
        box-sizing: border-box;
        padding: 24px;
        background: #fff;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          border: 1px solid var(--Linear, #ef536b);
        }

        &-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        &-name {
          color: var(--Color-4, #1a1e1d);
          font-variant-numeric: ordinal;
          font-feature-settings: "dlig" on;

          /* H5 */
          font-family: Manrope;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 29px; /* 161.111% */
        }

        &-time {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #a1a1aa;
          font-family: Manrope;
          font-size: 14px;
          font-weight: 400;

          svg {
            width: 21px;
            height: 21px;
          }
          span {
            display: flex;
            padding: 4px 6px 4px 4px;
            justify-content: center;
            align-items: center;
            gap: 4px;
            border-radius: 16px;
            border: 0.5px solid var(--Colors-Neutrals-Neutral-400, #d9dbe9);
            background: var(--Colors-Neutrals-Neutral-200, #fbfbfe);

            /* Shadows/Neutrals/Neutral 01 */
            box-shadow: 0 0.5px 1px 0 rgba(25, 33, 61, 0.04);
          }
        }

        &-radio {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          position: absolute;
          right: 18px;
          top: 18px;
          border: 1px solid var(--Colors-Neutral-400, #d9dbe9);
          background: var(--Colors-Neutral-100, #fff);
          gap: var(--checkboxes-radio-toogles-gaps-gap-regular, 6px);
          &-inner {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: transparent;
            transition: all 0.2s ease;
          }
        }

        &-active {
          .contactus-visit-right-option-time {
            color: #ef536b;
            span {
              border-radius: 16px;
              border: 0.5px solid var(--Colors-Primary-HUE-Purple-300, #d2ceff);
              background: var(--Colors-Primary-HUE-Purple-100, #f9f8ff);

              /* Shadows/Primary HUE/Primary 01 */
              box-shadow: 0 0.5px 1px 0 rgba(74, 58, 255, 0.07);
            }
          }

          .contactus-visit-right-option-radio {
            border-color: #ffff;
            border-radius: var(--checkboxes-radio-toogles-toggle-pill, 200px);
            background: var(
              --Linear,
              linear-gradient(270deg, #ef536b 0%, #f79355 100%)
            );

            &-inner {
              width: 8px;
              height: 8px;
              background: #fff;
            }
          }
        }
      }

      &-back {
        color: var(--Color-4, #1a1e1d);

        /* TAG */
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 21px */
        letter-spacing: -0.14px;
        cursor: pointer;
      }

      &-datetime {
        display: flex;
        gap: 24px;
        margin-top: 24px;
      }

      &-calendar {
        flex: 1;
        min-width: 380px;
      }

      &-timezone {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 24px;

        :deep(.ant-select) {
          width: 280px !important;

          .ant-select-selector {
            height: 48px !important;
            padding: 0 20px !important;
            border-radius: 24px !important;
            border: 1px solid transparent !important;
            background: linear-gradient(#fff, #fff) padding-box,
              linear-gradient(90deg, #f79355 0%, #ef536b 100%) border-box !important;
            display: flex;
            align-items: center;
          }

          .ant-select-selection-item {
            color: #ef536b;
            font-family: Manrope;
            font-size: 15px;
            font-weight: 400;
            line-height: 48px;
          }

          .ant-select-arrow {
            color: #9a9a9a;
            right: 16px;
          }

          &:hover,
          &.ant-select-focused {
            .ant-select-selector {
              border-color: transparent !important;
              box-shadow: none !important;
            }
          }
        }
      }

      &-times {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 120px;
        max-height: 500px;
        overflow-y: auto;
        padding-right: 8px;

        /* 默认隐藏滚动条 */
        &::-webkit-scrollbar {
          width: 6px;
        }
        &::-webkit-scrollbar-track {
          background: transparent;
        }
        &::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 3px;
        }

        /* hover 时显示滚动条 */
        &:hover::-webkit-scrollbar-thumb {
          background: rgba(154, 154, 154, 0.5);
        }
        &:hover::-webkit-scrollbar-thumb:hover {
          background: rgba(154, 154, 154, 0.8);
        }
      }

      &-time {
        display: flex;
        padding: 12px 0;
        justify-content: center;
        align-items: center;
        gap: 8px;
        align-self: stretch;
        border-radius: 28px;
        border: 1px solid #ef536b;
        color: #1a1e1d;

        /* H6 */
        font-family: Manrope;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        &:hover {
          border-color: #ef536b;
        }

        &.active {
          background: linear-gradient(270deg, #ef536b 0%, #f79355 100%);
          border-color: transparent;
          color: #fff;
        }
      }

      &-selected {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        align-self: stretch;
        border-radius: var(--Corner-Medium, 12px);
        background: rgba(252, 182, 46, 0.1);

        &-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;

          .icon {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            align-self: stretch;
            svg {
              width: 24px;
              height: 24px;
              aspect-ratio: 1/1;
            }
          }

          .date {
            /* H6 */
            font-family: Manrope;
            font-size: var(--font-size-base, 16px);
            font-style: normal;
            font-weight: var(--font-weight-medium, 500);
            line-height: normal;
            background: var(
              --Linear,
              linear-gradient(270deg, #ef536b 0%, #f79355 100%)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .time {
            /* H6 */
            font-family: Manrope;
            font-size: var(--font-size-base, 16px);
            font-style: normal;
            font-weight: var(--font-weight-medium, 500);
            line-height: normal;
            background: var(
              --Linear,
              linear-gradient(270deg, #ef536b 0%, #f79355 100%)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .timezone {
            text-align: center;

            /* H6 */
            font-family: Manrope;
            font-size: var(--font-size-base, 16px);
            font-style: normal;
            font-weight: var(--font-weight-medium, 500);
            line-height: normal;
            background: var(
              --Linear,
              linear-gradient(270deg, #ef536b 0%, #f79355 100%)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }

      &-form {
        display: flex;
        flex-direction: column;
        gap: 16px;

        &-row {
          display: flex;
          gap: 16px;
        }

        &-field {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;

          label {
            color: var(--Color-6, #393939);

            /* H6 */
            font-family: Manrope;
            font-size: var(--font-size-base, 16px);
            font-style: normal;
            font-weight: var(--font-weight-medium, 500);
            line-height: normal;
          }

          :deep(.ant-input) {
            width: 267px;
            display: flex;
            height: 48px;
            min-height: 48px;
            padding: 8px 16px;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
            border-radius: 14px;
            border: 1px solid #dcdcdc;
            background: var(--Colors-Neutral-100, #fff);

            /* Shadows/Neutrals/Neutral 01 */
            box-shadow: 0 0.5px 1px 0 rgba(25, 33, 61, 0.04);

            &::placeholder {
              color: #a1a1aa;
            }

            &:hover,
            &:focus {
              border-color: #d4d4d8;
            }
          }
        }
      }

      &-submit {
        display: flex;
        padding: 12px 24px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        align-self: stretch;
        border-radius: 40px;
        background: var(
          --Linear,
          linear-gradient(270deg, #ef536b 0%, #f79355 100%)
        );
        color: var(--Color-2, #fff);
        cursor: pointer;

        /* H6 */
        font-family: Manrope;
        font-size: var(--font-size-base, 16px);
        font-style: normal;
        font-weight: var(--font-weight-medium, 500);
        line-height: normal;
        border-width: 0px;
      }

      &-success {
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
    }
  }

  &-withus {
    width: 1362px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0;

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

        &-active {
          border-radius: 14px;
          background: var(
            --Linear,
            linear-gradient(270deg, #ef536b 0%, #f79355 100%)
          );
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

  &-faq {
    width: 1362px;
    margin: 0 auto;
    box-sizing: border-box;

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
      margin-bottom: 34px;
    }

    &-list {
      display: flex;
      gap: 16px;
    }

    &-col {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    &-item {
      width: 100%;
      min-height: 73px;
      display: flex;
      padding: 32px 20px;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;
      border-bottom: 1px solid var(--Border, #dcdcdc);
      cursor: pointer;
      transition: all 0.3s ease;

      &-header {
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: 45px;
      }

      &-num {
        color: var(--Colors-Neutrals-Neutral-500, #a0a3bd);

        /* H5 */
        font-family: Manrope;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 32.338px; /* 101.057% */
      }

      &-question {
        flex: 1;
        color: var(--Colors-Neutrals-Neutral-800, #170f49);
        leading-trim: both;
        text-edge: cap;

        /* H5 */
        font-family: Manrope;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 37px; /* 154.167% */
      }

      &-icon {
        color: #71717a;
        font-size: 28px;
        font-weight: 300;
        line-height: 32px;
        text-align: center;
      }

      &-answer {
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

      &-active {
        border-radius: 24px;
        background: #fff6e4;
        flex-direction: column;
        border-bottom-width: 0px;

        .contactus-faq-item-num {
          color: var(--Color, #fcb62e);
        }

        .contactus-faq-item-question {
          color: var(--Color, #fcb62e);
          leading-trim: both;
          text-edge: cap;

          /* H5 */
          font-family: Manrope;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 37px; /* 154.167% */
        }
        .contactus-faq-item-answer {
          width: 444px;
          position: relative;
          left: -10px;
        }

        .contactus-faq-item-icon {
          color: var(--Color, #fcb62e);
        }
      }
    }
  }

  &-download {
    width: 1019px;
    margin: 174px auto 0;
    position: relative;
    &-title {
      color: var(--Color-Black, #000);
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

    &-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 22px;
      margin-top: 69px;
    }

    &-bg {
      width: 624px;
      height: 208px;
      opacity: 0.36;
      background: linear-gradient(90deg, #fcb62e 0%, #ef3f6d 100%);
      filter: blur(99px);
      position: absolute;
      left: 50%;
      top: 15%;
      transform: translate(-50%, -50%);
    }

    &-item {
      width: 325px;
      height: 100px;
      border-radius: 14px;
      background: rgba(57, 57, 57, 0.12);
      display: flex;
      align-items: center;
      gap: 19px;
      padding: 20px 16px;
      box-sizing: border-box;
      border-radius: 14px;
      background: rgba(57, 57, 57, 0.12);
      &:nth-of-type(1) {
        .contactus-download-item-icon {
          border-radius: 8px;
          background: rgba(0, 192, 232, 0.2);
        }
      }
      &:nth-of-type(2) {
        .contactus-download-item-icon {
          border-radius: 8px;
          background: rgba(255, 56, 60, 0.2);
        }
      }
      &:nth-of-type(3) {
        .contactus-download-item-icon {
          border-radius: 8px;
          background: rgba(255, 204, 0, 0.2);
        }
      }
      &:nth-of-type(4) {
        .contactus-download-item-icon {
          border-radius: 8px;
          background: rgba(52, 199, 89, 0.2);
        }
      }
      &:nth-of-type(5) {
        .contactus-download-item-icon {
          border-radius: var(--Sizes-Border-Radius-BR-3, 8px);
          background: rgba(0, 136, 255, 0.2);
        }
      }

      &-icon {
        display: flex;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        svg {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
        }
      }

      &-text {
        width: 220px;
        color: var(--Color-6, #393939);
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

  &-away {
    width: 1362px;
    margin: 25px auto 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 165px 123px 100px 104px;
    box-sizing: border-box;

    &-title {
      width: 576px;
      color: #18181b;
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

    &-desc {
      width: 571px;
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
}
</style>