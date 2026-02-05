<template>
  <div class="policy">
    <div class="policy-header">
      <h1 class="policy-title">Terms & Conditions</h1>
      <div class="policy-date">Last Updated: 31/12/2025</div>
    </div>
    <div class="policy-line"></div>
    <div class="policy-intro">
      <p>
        Welcome to the Mangobot website. By accessing or using this website, you
        agree to comply with the following Terms & Conditions.
      </p>
    </div>

    <div class="policy-content">
      <section class="policy-section">
        <h2 class="policy-section-title">1. Use of Website</h2>
        <p class="policy-section-text">
          This website is intended for informational and business purposes only.
          You agree to use it lawfully and not engage in any activity that may
          damage or disrupt the website.
        </p>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">2. Intellectual Property</h2>
        <p class="policy-section-text">
          All content on this website, including text, images, videos, graphics,
          logos, and designs, is the property of Mangobot unless otherwise stated.
          Unauthorized use, reproduction, or distribution is prohibited.
        </p>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">3. Information Accuracy</h2>
        <p class="policy-section-text">
          While we strive to keep all information up to date and accurate,
          Mangobot does not guarantee completeness or accuracy and reserves the
          right to update content at any time.
        </p>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">4. Product & Service Inquiries</h2>
        <p class="policy-section-text">
          Any product descriptions, demonstrations, or service information
          provided on this website are for general reference only and do not
          constitute a binding offer. Final terms will be confirmed separately
          through official communication.
        </p>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">5. Limitation of Liability</h2>
        <p class="policy-section-text">
          Mangobot shall not be held liable for any direct or indirect damages
          resulting from the use or inability to use this website.
        </p>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">6. Third-Party Links</h2>
        <p class="policy-section-text">
          This website may contain links to third-party websites for reference
          purposes. Mangobot is not responsible for the content or privacy
          practices of those sites.
        </p>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">7. Governing Law</h2>
        <p class="policy-section-text">
          These Terms & Conditions are governed by the laws of the United Arab
          Emirates.
        </p>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">8. Changes to Terms</h2>
        <p class="policy-section-text">
          Mangobot reserves the right to modify these Terms & Conditions at any
          time. Updates will be published on this page.
        </p>
      </section>

      <section class="policy-section">
        <h2 class="policy-section-title">9. Contact Information</h2>
        <p class="policy-section-text">
          For any questions regarding these terms, please contact us at:
          <span>info@mangobot.com</span>
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
    margin-bottom: 40px;
  }

  &-line {
    width: 100%;
    height: 1px;
    background: #d5d5d5;
  }

  &-title {
    color: #0f0f0f;

    /* H3 */
    font-family: Geist;
    font-size: 58px;
    font-style: normal;
    font-weight: 500;
    line-height: 76px; /* 131.034% */
  }

  &-date {
    /* H5_2 */
    font-family: Geist;
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
      font-family: Geist;
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
      font-family: Geist;
      font-size: var(--font-size-xl, 20px);
      font-style: normal;
      font-weight: var(--font-weight-medium, 700);
      line-height: 29px;
      letter-spacing: var(--font-letter-spacing-tight, -0.4px);
    }
    &-title {
      /* H5_2 */
      font-family: Geist;
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
      font-family: Geist;
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
    font-family: Geist;
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
