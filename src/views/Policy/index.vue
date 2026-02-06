<template>
  <div class="policy">
    <div class="policy-header">
      <h1 class="policy-title">Privacy Policy</h1>
      <div class="policy-date">Last Updated: 31/12/2025</div>
    </div>
    <div class="policy-line"></div>
    <div class="policy-intro">
      <p>
        Mangobot ("we," "our," or "us") respects your privacy and is committed
        to protecting any personal information you share with us through our
        website.
      </p>
    </div>

    <div class="policy-content">
      <section class="policy-section">
        <h2 class="policy-section-title">1. Information We Collect</h2>
        <p class="policy-section-text">
          We may collect the following types of information:
        </p>
        <ul class="policy-list">
          <li>
            Personal Information: Name, email address, phone number, and any
            other information you voluntarily provide when contacting us or
            using our services.
          </li>
          <li>
            Technical Information: IP address, browser type, device information,
            and other technical data collected automatically when you visit our
            website.
          </li>
          <li>
            Website Usage Data: Pages visited, time spent on pages, click
            patterns, and other analytics data to help us improve our website.
          </li>
        </ul>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">2. How We Use Your Information</h2>
        <p class="policy-section-text">
          We use the collected information for the following purposes:
        </p>
        <ul class="policy-list">
          <li>To respond to your inquiries and provide customer support</li>
          <li>
            To provide you with information about our products and services
          </li>
          <li>
            To improve and optimize our website functionality and user
            experience
          </li>
          <li>
            To communicate with you about updates, promotions, or important
            notices
          </li>
        </ul>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">3. Cookies & Analytics</h2>
        <p class="policy-section-text">
          Our website uses cookies and analytics tools to enhance your browsing
          experience. These tools help us understand how visitors interact with
          our website. We do not collect personally identifiable information
          through cookies unless you voluntarily provide it. You can disable
          cookies through your browser settings, though this may affect some
          website functionality.
        </p>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">4. Data Protection</h2>
        <p class="policy-section-text">
          We take reasonable measures to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction. However,
          no method of transmission over the internet or electronic storage is
          100% secure. Our website is managed internally by Mangobot, and we
          implement appropriate security measures to safeguard your data.
        </p>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">5. Data Sharing</h2>
        <p class="policy-section-text">
          We do not sell, rent, or trade your personal information to third
          parties. We may share your information with trusted service providers
          who assist us in operating our website and conducting our business,
          provided they agree to keep your information confidential and use it
          only for the purposes we specify.
        </p>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">6. Your Rights</h2>
        <p class="policy-section-text">You have the right to:</p>
        <ul class="policy-list">
          <li>Access the personal information we hold about you</li>
          <li>Request correction or deletion of your personal information</li>
          <li>Withdraw your consent for data processing at any time</li>
        </ul>
        <p class="policy-section-text">
          To exercise these rights, please contact us using the information
          provided below.
        </p>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">7. Changes to This Policy</h2>
        <p class="policy-section-text">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated "Last Updated" date. We
          encourage you to review this policy periodically to stay informed
          about how we protect your information.
        </p>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">8. Contact Us</h2>
        <p class="policy-section-text">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at: <span>info@mangobot.com</span>
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.policy {
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
  padding: 73px 39px 200px 39px;
  box-sizing: border-box;
  background: #fff;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 49px;
  }

  &-line {
    width: 100%;
    height: 1px;
    background: #d5d5d5;
  }

  &-title {
    color: #0f0f0f;
    /* H3 */
    font-family: Manrope;
    font-size: 58px;
    font-style: normal;
    font-weight: 500;
    line-height: 76px; /* 131.034% */
  }

  &-date {
    /* H5_2 */
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.48px;
    background: var(
      --Linear,
      linear-gradient(270deg, #ef536b 0%, #f79355 100%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &-intro {
    margin: 49px auto 63px;
    p {
      color: var(--Description, #757d89);
      font-feature-settings: "ss02" on, "ss03" on, "ss08" on;

      /* H6 */
      font-family: Manrope;
      font-size: var(--font-size-xl, 20px);
      font-style: normal;
      font-weight: var(--font-weight-medium, 500);
      line-height: 29px; /* 145% */
      letter-spacing: var(--font-letter-spacing-tight, -0.4px);
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
  }

  &-section {
    span {
      color: var(--Description, #757d89);
      font-feature-settings: "ss02" on, "ss03" on, "ss08" on;

      /* H6 */
      font-family: Manrope;
      font-size: var(--font-size-xl, 20px);
      font-style: normal;
      font-weight: var(--font-weight-medium, 700);
      line-height: 29px;
      letter-spacing: var(--font-letter-spacing-tight, -0.4px);
    }
    &-title {
      /* H5_2 */
      font-family: Manrope;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px; /* 133.333% */
      letter-spacing: -0.48px;
      background: var(
        --Linear,
        linear-gradient(270deg, #ef536b 0%, #f79355 100%)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 16px;
    }

    &-text {
      color: var(--Description, #757d89);
      font-feature-settings: "ss02" on, "ss03" on, "ss08" on;

      /* H6 */
      font-family: Manrope;
      font-size: var(--font-size-xl, 20px);
      font-style: normal;
      font-weight: var(--font-weight-medium, 500);
      line-height: 29px; /* 145% */
      letter-spacing: var(--font-letter-spacing-tight, -0.4px);
    }
  }

  &-list {
    color: var(--Description, #757d89);
    font-feature-settings: "ss02" on, "ss03" on, "ss08" on;

    /* H6 */
    font-family: Manrope;
    font-size: var(--font-size-xl, 20px);
    font-style: normal;
    font-weight: var(--font-weight-medium, 500);
    line-height: 29px; /* 145% */
    letter-spacing: var(--font-letter-spacing-tight, -0.4px);

    li {
      margin-bottom: 12px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>