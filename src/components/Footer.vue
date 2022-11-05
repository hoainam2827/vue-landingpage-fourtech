<template>
  <footer
    id="footer"
    class="bg-no-repeat bg-cover bg-white relative flex items-center mx-auto lg:h-[526px] overflow-hidden"
    :style="{
      backgroundImage: `url(${bgFooter})`,
    }"
  >
    <div class="container max-w-[100%] mx-4 lg:mx-auto my-10">
      <div class="flex flex-col md:flex-row px-0 lg:px-[100px] gap-10">
        <div
          class="ct-footer-left w-[46%] flex flex-col gap-[44px] items-center mx-auto"
        >
          <div
            class="relative z-30 flex items-center gap-2 mb-2 lg:mb-0 w-[163px]"
          >
            <img src="../assets/images/logo.png" alt="logo" class="w-[163px]" />
          </div>
          <div class="relative flex gap-8">
            <img
              src="../assets/images/icons/twitter.svg"
              alt="icon"
              class="w-8 h-[26px]"
            />
            <img
              src="../assets/images/icons/facebook.svg"
              alt="icon"
              class="w-8 h-[26px]"
            />
            <img
              src="../assets/images/icons/linkin.svg"
              alt="icon"
              class="w-8 h-[26px]"
            />
          </div>
        </div>
        <div class="flex flex-col lg:flex-row">
          <div class="ct-footer-center">
            <div
              class="h-full relative flex items-start justify-start flex-col"
            >
              <h3
                class="not-italic font-bold text-2xl leading-7 text-white mb-5 lg:mb-10"
              >
                {{ $t("footer.title-address") }}
              </h3>
              <div
                v-for="address of addressList"
                :key="address.address"
                class="flex gap-3 mb-[23px] lg:mb-[43px]"
              >
                <div class="min-w-[30px] max-w-[30px] h-[26px]">
                  <img :src="address.image" class="w-full" alt="address" />
                </div>
                <div class="">
                  <p
                    class="not-italic font-normal text-sm text-white leading-[140%] mb-3"
                  >
                    {{ $t(address.desc) }}
                  </p>
                  <p
                    class="not-italic font-normal text-sm text-white leading-[140%]"
                  >
                    {{ address.desc2 ? $t(address.desc2) : "" }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="ct-footer-right">
            <div
              class="h-full relative flex items-start justify-start flex-col"
            >
              <h3
                class="not-italic font-bold text-2xl leading-7 text-white mb-5 lg:mb-10 mt-12 md:mt-0"
              >
                {{ $t("footer.title-subscribe") }}
              </h3>
              <div class="relative">
                <p
                  class="not-italic font-normal text-sm text-white leading-[140%]"
                >
                  {{ $t("footer.subscribe") }}
                </p>
                <div class="relative">
                  <input
                    type="email"
                    class="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-8 bg-transparent rounded-lg h-14"
                    id="email"
                    :placeholder="$t('footer.email-footer')"
                  />
                  <img
                    src="../assets/images/icons/arrow-right.svg"
                    alt="man"
                    class="absolute mr-4 right-0 top-[50%] translate-y-[-50%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import address from "../assets/images/icons/address.svg";
import phone from "../assets/images/icons/phone.svg";
import bgFooter from "../assets/images/background-footer.png";

const addressList = [
  {
    image: address,
    desc: "footer.address1",
    desc2: "footer.address2",
  },
  {
    image: phone,
    desc: "footer.phone",
  },
];
</script>

<style scoped></style>
