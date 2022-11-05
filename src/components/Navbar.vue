<template>
  <nav
    ref="navbar"
    class="ct-navbar fixed top-0 left-0 w-full bg-primary-200 z-20 transition duration-200 px-[16px] md:px-0"
  >
    <div class="container flex items-center justify-between h-20 m-auto mt-3">
      <div class="relative z-30 flex items-center gap-2 mb-2 lg:mb-0">
        <img src="../assets/images/logo.png" alt="logo" />
      </div>
      <div class="flex lg:hidden items-center gap-2">
        <button
          @click="showMenu = !showMenu"
          class="relative z-30 text-white -mt-2 p-2"
        >
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div
        class="absolute lg:static top-20 inset-x-0 flex flex-col lg:flex-row items-center lg:gap-[84px] bg-primary-200 lg:bg-transparent pb-10 px-5 lg:p-0 transition duration-500 lg:duration-200 lg:-translate-y-0"
        :class="
          !showMenu
            ? 'translate-y-[-80px] pt-32 z-[99999999] bg-white gap-0 text-black w-screen h-screen lg:w-auto lg:h-auto lg:text-white'
            : '-translate-y-[120%] pt-5 gap-5'
        "
      >
        <a
          @click="showMenu = true"
          class="ct-link font-bold text-sm leading-4 not-italic md:ct-link-pc"
          href="#about"
          >{{ $t("nav.about") }}</a
        >
        <a
          @click="showMenu = true"
          class="ct-link font-bold text-sm leading-4 not-italic md:ct-link-pc"
          href="#game"
          >{{ $t("nav.game") }}</a
        >
        <a
          @click="showMenu = true"
          class="ct-link font-bold text-sm leading-4 not-italic md:ct-link-pc"
          href="#partner"
          >{{ $t("nav.partners") }}</a
        >
        <a
          @click="showMenu = true"
          class="ct-link font-bold text-sm leading-4 not-italic md:ct-link-pc"
          href="#footer"
          >{{ $t("nav.contact") }}</a
        >
        <a-dropdown :trigger="['click']" :placement="['bottomRight']">
          <a
            class="ct-dropdown-link ant-dropdown-link flex items-center justify-center relative"
            @click.prevent
          >
            <img
              :src="require('../assets/images/' + flag + '.png')"
              alt="us"
              class="mr-[14px]"
            />
            <!-- <img src="../assets/images/en.png" alt="us" class="mr-[14px]" /> -->
            <img
              src="../assets/images/icons/arrow-down.svg"
              alt="arrow"
              class="hidden lg:block"
            />
            <img
              src="../assets/images/icons/arrow-down-dark.svg"
              alt="arrow"
              class="lg:hidden"
            />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item key="1" class="flex" @click="changeLocale('vn')">
                <div class="" v-if="flag === 'vn'">
                  <img
                    src="../assets/images/icons/check.svg"
                    alt="check"
                    class="mr-2 h-[14px]"
                  />
                </div>
                <img
                  src="../assets/images/vn.png"
                  alt="vietnam"
                  class="mr-[7px]"
                />
                <div
                  class="font-bold leading-4 text-black not-italic text-[10px]"
                >
                  {{ $t("nav.vietnam") }}
                </div>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="2" @click="changeLocale('en')">
                <div class="" v-if="flag === 'en'">
                  <img
                    src="../assets/images/icons/check.svg"
                    alt="check"
                    class="mr-2 h-[14px]"
                  />
                </div>
                <img src="../assets/images/en.png" alt="us" class="mr-[10px]" />
                <div
                  class="font-bold leading-4 text-black not-italic text-[10px]"
                >
                  {{ $t("nav.english") }}
                </div>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        <div class="ct-close lg:hidden">
          <button
            @click="showMenu = !showMenu"
            class="relative z-30 text-white -mt-2 p-2"
          >
            <img src="../assets/images/icons/close.svg" alt="close" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent, ref } from "vue";
import { DownOutlined } from "@ant-design/icons-vue";
import i18n from "../languages/i18n";
import { useI18n } from "vue-i18n";
// import en from "../assets/images/en.png";
export default {
  name: "Navbar",
  components: {
    DownOutlined,
  },
  props: {
    msg: String,
  },
  setup(props, context) {
    const showMenu = ref(false);
    const flag = ref("en");
    // const en = ref("../assets/images/en.png");

    const changeLocale = (locale) => {
      i18n.global.locale = locale;
      flag.value = locale;
    };

    return {
      changeLocale,
      showMenu,
      flag,
    };
  },
};
</script>

<style scoped>
.ant-dropdown-menu {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 8px;
}

.ct-navbar {
  z-index: 9999999;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) -25%,
    rgba(0, 0, 0, 0) 100%
  );
}

.ct-dropdown-link {
  background: rgb(246, 246, 246);
  border: 1px solid rgb(175, 175, 175);
  border-radius: 8px;
  padding: 3px 7px;
  top: 48px;
  left: 16px;
  position: absolute;
}

.ct-close {
  padding: 3px 7px;
  top: 48px;
  right: 16px;
  position: absolute;
}

.ct-link {
  margin-top: 33px;
  padding-bottom: 33px;
  border-bottom: 2px solid #ddd;
  width: 95vw;
  text-align: center;
  font-weight: 700;
}

@media screen and (min-width: 1024px) {
  .ct-link {
    margin-top: 0 !important;
    padding-bottom: 0 !important;
    border-bottom: 0px solid #ddd !important;
    width: unset !important;
    text-align: center !important;
    color: #fff;
  }

  .ct-dropdown-link {
    background: transparent;
    border: 0px solid rgb(175, 175, 175);
    border-radius: 8px;
    padding: 0;
    top: 0;
    left: 0;
    position: relative;
  }
}
</style>
