<template>
  <div class="header">
    <img class="header-logo" src="@/assets/logo.png" alt="logo" @click="goHome" />
    <div class="header-menu" ref="menuRef">
      <div
        :class="[
          'header-menu-item',
          item.active ? 'header-menu-item-active' : '',
        ]"
        v-for="item in menuItems"
        :key="item.name"
        @click="go(item)"
        :ref="(el) => setMenuItemRef(el, item)"
      >
        {{ item.name }}
        <img
          v-if="item.children?.length > 0"
          :style="{
            transform: item.active && !item.show ? 'rotate(180deg)' : 'none',
          }"
          :src="item.active || item.show ? iconActive : icon"
          alt="arrow-down"
        />
      </div>
    </div>
    <div class="header-contact" @click="goContact">contact us</div>
    <!-- 菜单栏 -->
    <Transition name="menu-fade">
      <div v-if="showProducts" ref="productsMenuRef" class="header-products" :class="{ 'has-selected': selectedProduct }">
        <div
          class="header-products-item"
          v-for="(item, index) in currentProducts"
          @click="goProduct(item)"
          @mouseenter="selectedProduct = item.name"
          @mouseleave="selectedProduct = null"
          :key="item.name"
          :class="[
            `product-${index}`,
            { 
              'is-selected': selectedProduct === item.name,
              'is-dimmed': selectedProduct && selectedProduct !== item.name
            }
          ]"
          :style="{ '--delay': `${index * 50}ms` }"
        >
          <div
            class="header-products-item-img"
            :style="{ backgroundImage: `url(${item.img})` }"
          ></div>
          <div class="header-products-item-name">{{ item.name }}</div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import icon from "@/assets/arrow-down-01-sharp.svg";
import iconActive from "@/assets/arrow-down-active.svg";
import a2 from "./images/a2.png";
import x2 from "./images/x2.png";
import d1 from "./images/D1.png";
import g1 from "./images/G1.png";
import d1Max from "./images/max.png";
import d1ProMax from "./images/promax.png";
const route = useRoute();
const goContact = () => {
  router.push('/contactus');
};
const router = useRouter();
const showProducts = ref(false);
const currentProducts = ref(null);
const productsMenuRef = ref(null);
const menuRef = ref(null);
const selectedProduct = ref(null);
const menuItemRefs = new Map();
const menuItems = ref([
  {
    name: "Product",
    path: "/",
    show: false,
    active: false,
    children: [
      {
        name: "A2 Ultra",
        path: "/products/a2",
        img: a2,
      },
      {
        name: "X2 Ultra",
        path: "/products/x2",
        img: x2,
      },
      {
        name: "G1 ULTRA",
        path: "/products/g1-ultra",
        img: d1,
      },
      {
        name: "D1 ULTRA",
        path: "/products/d1-ultra",
        img: g1,
      },
      {
        name: "D1 Max",
        path: "/products/d1-max",
        img: d1Max,
      },
      {
        name: "D1 Pro Max",
        path: "/products/d1-pro-max",
        img: d1ProMax,
      },
    ],
  },
  {
    name: "Event Ready Robotics",
    path: "/robotics",
    active: false,
  },
  {
    name: "About Mangobot",
    path: "/aboutus",
    active: false,
  },
]);
// 检查路径是否匹配菜单项
function isPathMatch(item, path) {
  if (item.path === path) return true;
  if (item.children?.some((child) => child.path === path)) return true;
  return false;
}

// 更新菜单显示状态
function updateMenuState() {
  const currentPath = route.path;

  menuItems.value.forEach((item) => {
    const isMatch = isPathMatch(item, currentPath);
    // active 控制激活状态（高亮显示）
    item.active = isMatch;

    // 刷新时只设置激活状态，不自动展开菜单
    // show 状态由用户点击控制，不在这里自动设置
  });

  // 如果当前路径不匹配任何菜单项，隐藏产品菜单
  const hasActiveWithChildren = menuItems.value.some(
    (item) => item.active && item.children && item.show
  );
  if (!hasActiveWithChildren) {
    showProducts.value = false;
  }
}

watch(
  () => route.path,
  () => {
    updateMenuState();
  },
  {
    immediate: true,
  }
);

function goHome() {
  router.push('/');
}

function goProduct(item) {
  // 跳转到产品页面
  if (item.path) {
    location.href = item.path;
    // 关闭菜单
    showProducts.value = false;
    selectedProduct.value = null;
    menuItems.value.forEach((menuItem) => {
      if (menuItem.children) {
        menuItem.show = false;
      }
    });
  }
}

// 设置菜单项引用
function setMenuItemRef(el, item) {
  if (el) {
    menuItemRefs.set(item.name, el);
  }
}

// 点击外部区域隐藏菜单
function handleClickOutside(event) {
  if (!showProducts.value) return;

  const target = event.target;

  // 检查是否点击在菜单内部
  if (productsMenuRef.value && productsMenuRef.value.contains(target)) {
    return;
  }

  // 检查是否点击在菜单项按钮上
  for (const [key, menuItemEl] of menuItemRefs.entries()) {
    if (menuItemEl && menuItemEl.contains(target)) {
      return;
    }
  }

  // 如果点击在外部，隐藏菜单
  showProducts.value = false;
  selectedProduct.value = null;
  menuItems.value.forEach((item) => {
    if (item.children) {
      item.show = false;
    }
  });
}

// 跳转
function go(item) {
  // 如果有子菜单，切换显示状态
  if (item.children) {
    const wasShowing = item.show;

    // 先关闭所有其他菜单
    menuItems.value.forEach((menuItem) => {
      if (menuItem !== item && menuItem.children) {
        menuItem.show = false;
      }
    });

    // 切换当前菜单
    item.show = !wasShowing;
    currentProducts.value = item.children;
    showProducts.value = item.show;
    return;
  }

  // 如果没有子菜单，执行跳转
  showProducts.value = false;
  selectedProduct.value = null;

  // 关闭所有菜单
  menuItems.value.forEach((menuItem) => {
    if (menuItem.children) {
      menuItem.show = false;
    }
  });

  // 处理跳转
  if (item.path) {
    router.push(item.path);
  }
}

// 生命周期钩子
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
<style lang="less" scoped>
.header {
  display: flex;
  height: 80px;
  padding: 16px 32px 0 32px;
  box-sizing: border-box;
  justify-content: space-between;
  position: relative;
  &-products {
    display: inline-flex;
    padding: 10.719px 9.07px;
    align-items: center;
    gap: 19.788px;
    width: 1343px;
    height: 200px;
    position: absolute;
    box-sizing: content-box;
    top: 124px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 13.192px;
    border: 0.669px solid rgba(154, 154, 154, 0.4);
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(24.41025733947754px);
    z-index: 10;
    transition: background-color 0.4s ease;

    /* Background color shifts when item is selected */
    &.has-selected {
      background: rgba(255, 255, 255, 0.35);
    }

    &-item {
      width: 207.32px;
      height: 199.964px;
      border-radius: 18.057px;
      border: 0.669px solid rgba(154, 154, 154, 0.44);
      background: var(--Color-2, #fff);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      /* Animation on appear */
      opacity: 0;
      transform: translateY(15px);
      animation: slideUp 0.4s ease forwards;
      animation-delay: var(--delay, 0ms);
      /* Transition for hover/select effects */
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

      /* Dimmed state for non-selected items */
      &.is-dimmed {
        opacity: 0.55;
        transform: scale(0.96);
        filter: grayscale(0.15);
      }

      /* Selected/expanded state */
      &.is-selected {
        transform: scale(1.06);
        border-color: #ef536b;
        box-shadow: 0 12px 32px rgba(239, 83, 107, 0.2),
                    0 4px 12px rgba(0, 0, 0, 0.08);
        z-index: 5;
      }

      /* Per-robot background color tints on select */
      &.product-0.is-selected {
        background: linear-gradient(180deg, #fff9f0 0%, #fff 40%);
      }
      &.product-1.is-selected {
        background: linear-gradient(180deg, #f0f7ff 0%, #fff 40%);
      }
      &.product-2.is-selected {
        background: linear-gradient(180deg, #f5f0ff 0%, #fff 40%);
      }
      &.product-3.is-selected {
        background: linear-gradient(180deg, #f0fff7 0%, #fff 40%);
      }
      &.product-4.is-selected {
        background: linear-gradient(180deg, #fff0f5 0%, #fff 40%);
      }
      &.product-5.is-selected {
        background: linear-gradient(180deg, #fffbf0 0%, #fff 40%);
      }

      &:hover {
        border-radius: 18.057px;
        border: 0.669px solid var(--Linear, #ef536b);
      }

      &-name {
        color: var(--Color-4, #1a1e1d);
        text-align: center;
        font-variant-numeric: ordinal;
        font-feature-settings: "dlig" on;
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px;
        transition: color 0.3s ease, transform 0.3s ease;
      }

      &.is-selected &-name {
        color: #ef536b;
        font-weight: 600;
        transform: translateY(-2px);
      }

      &-img {
        width: 121.63px;
        height: 146.566px;
        transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      }

      &.is-selected &-img {
        transform: scale(1.08);
      }

      &:nth-of-type(1) > &-img {
        background-position: -2.128px -28.858px;
        background-size: 103.499% 128.819%;
        background-repeat: no-repeat;
      }
      &:nth-of-type(2) > &-img {
        background-position: 50%;
        background-size: contain;
        background-repeat: no-repeat;
      }
      &:nth-of-type(3) > &-img {
        background-position: 50%;
        background-size: contain;
        background-repeat: no-repeat;
      }
      &:nth-of-type(4) > &-img {
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
      }
      &:nth-of-type(5) > &-img {
        width: 175px;
        height: 147px;
        background-position: -64.221px 0.406px;
        background-size: 148.893% 99.705%;
        background-repeat: no-repeat;
      }
      &:nth-of-type(6) > &-img {
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
      }

      &-active {
        border-radius: 18.057px;
        border: 0.669px solid var(--Linear, #ef536b);
        background: var(--Color-2, #fff);
      }
    }
  }

  /* Slide up animation for items */
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Menu fade transition */
  .menu-fade-enter-active {
    transition: all 0.35s ease-out;
  }
  .menu-fade-leave-active {
    transition: all 0.25s ease-in;
  }
  .menu-fade-enter-from {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
  .menu-fade-leave-to {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
  &-logo {
    width: 160.828px;
    height: 66.985px;
    aspect-ratio: 160.83/66.99;
    object-position: center;
    object-fit: contain;
    cursor: pointer;
  }
  &-menu {
    display: flex;
    height: 67px;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    width: 500px;
    border-radius: 100px;
    background: #ededed;
    box-sizing: border-box;
    align-items: center;
    &-item {
      color: #1a1e1d;
      text-align: center;
      font-family: Manrope;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 21px */
      letter-spacing: -0.14px;
      display: flex;
      margin-right: 49px;
      cursor: pointer;
      &:hover {
        background: var(
          --Linear,
          linear-gradient(270deg, #ef536b 0%, #f79355 100%)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &-active {
        background: var(
          --Linear,
          linear-gradient(270deg, #ef536b 0%, #f79355 100%)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      img {
        margin-left: 12px;
        width: 24px;
        height: 24px;
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
  &-contact {
    display: flex;
    width: 164px;
    height: 59px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    border-radius: 99px;
    background: linear-gradient(270deg, #ef536b 0%, #f79355 100%);
    color: #fff;
    text-align: center;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: -0.14px;
    text-transform: capitalize;
    cursor: pointer;
  }
}
</style>