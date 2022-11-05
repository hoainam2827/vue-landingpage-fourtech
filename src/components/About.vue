<template>
  <section
    id="about"
    class="flex flex-col items-center lg:pt-32 sm:max-w-[1160px] mx-auto"
  >
    <div class="container md:px-[60px]">
      <div
        class="man max-w-[351px] max-h-[351px] relative mx-auto lg:hidden translate-x-[50px] translate-y-[-135px]"
      >
        <img src="../assets/images/man.png" alt="man" />
      </div>
      <transition name="fade">
        <div
          id="pagetop"
          class="fixed md:right-[80px] right-[22px] top-[43%] z-[999] transition-all"
          :style="{
            transform: scY > 0 ? 'rotate(180deg)' : '',
          }"
          @click="toTop"
        >
          <img src="../assets/images/icons/gototop.svg" alt="gototop" />
        </div>
      </transition>
      <div class="flex gap-10 flex-col lg:flex-row">
        <div class="ct-about-left flex-1 px-4 sm:px-0">
          <h2 class="ct-main-title mb-10">{{ $t("about.title-about") }}</h2>
          <p
            class="font-normal text-sm not-italic leading-5 mb-20"
            style="color: rgba(117, 117, 117, 1)"
          >
            {{ $t("about.text-about") }}
          </p>
          <div class="flex gap-[55px] sm:gap-0 sm:flex-col">
            <div class="">
              <div class="relative flex items-end">
                <p
                  class="font-bold not-italic text-[44px] sm:text-[80px] leading-[98px] tracking-wider-[-1px] relative"
                  style="color: rgba(7, 155, 238, 1)"
                >
                  600
                </p>
                <span
                  class="font-bold not-italic text-[22px] sm:text-[40px] leading-[80px] md:leading-[65px] tracking-wider-[-1px] items-end"
                  style="color: rgba(7, 155, 238, 1)"
                  >M</span
                >
                <span
                  class="not-italic text-[30px] sm:smtext-[60px] leading-[100px] tracking-wider-[-1px] font-extrabold"
                  style="color: rgba(7, 155, 238, 1)"
                  >+</span
                >
              </div>
              <p
                class="font-bold text-2xl leading-7 text-black not-italic mb-10"
              >
                {{ $t("about.users") }}
              </p>
            </div>
            <div class="">
              <div class="relative flex items-end">
                <p
                  class="font-bold not-italic text-[44px] sm:text-[80px] leading-[98px] tracking-wider-[-1px] relative"
                  style="color: rgba(7, 155, 238, 1)"
                >
                  135
                </p>
                <span
                  class="not-italic text-[30px] sm:text-[60px] leading-[100px] tracking-wider-[-1px] font-extrabold"
                  style="color: rgba(7, 155, 238, 1)"
                  >+</span
                >
              </div>
              <p class="font-bold text-2xl leading-7 text-black not-italic">
                {{ $t("about.games") }}
              </p>
            </div>
          </div>
        </div>
        <div class="ct-about-right flex-1 bg-[#EEE]">
          <div
            class="flex items-stretch h-full sm:px-20 sm:pb-32 sm:pt-24 relative gap-10 flex-col py-10 px-4"
          >
            <div
              v-for="about of aboutList"
              :key="about.title"
              class="flex gap-6"
            >
              <div class="min-w-[46px] max-w-[46px]">
                <img
                  :src="about.image"
                  class="w-full bg-[#E3FCFF] p-[13px] rounded-full"
                  alt="about"
                />
              </div>
              <div class="">
                <h3 class="not-italic font-bold text-2xl leading-7 text-black">
                  {{ $t(about.title) }}
                </h3>
                <p
                  class="not-italic font-normal text-justify text-sm text-gray-600 leading-[140%] mt-[8px]"
                >
                  {{ $t(about.desc) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative flex flex-col items-center mt-[68px]">
        <img src="../assets/images/girl.png" alt="" class="ct-witch" />
        <img
          src="../assets/images/world.png"
          alt=""
          class="translate-y-[-90px] z-[-1]"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import hour from "../assets/images/icons/hour.svg";
import design from "../assets/images/icons/design.svg";
import team from "../assets/images/icons/team.svg";

export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
      aboutList: [
        {
          title: "about.hour",
          image: hour,
          desc: "about.text-hour",
        },
        {
          title: "about.design",
          image: design,
          desc: "about.text-design",
        },
        {
          title: "about.team",
          image: team,
          desc: "about.text-team",
        },
      ],
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};

// export default defineComponent({
//   setup() {
//     const aboutList = [
//       {
//         title: "about.hour",
//         image: hour,
//         desc: "about.text-hour",
//       },
//       {
//         title: "about.design",
//         image: design,
//         desc: "about.text-design",
//       },
//       {
//         title: "about.team",
//         image: team,
//         desc: "about.text-team",
//       },
//     ];

//     let scTimer = 0;
//     let scY = 0;

//     const handleScroll = () => {
//       if (scTimer) return;
//       scTimer = setTimeout(() => {
//         scY = window.scrollY;
//         clearTimeout(scTimer);
//         scTimer = 0;
//       }, 100);
//     };

//     const toTop = () => {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     };

//     // window.addEventListener("scroll", handleScroll());

//     return {
//       aboutList,
//       handleScroll,
//       toTop,
//       scTimer,
//       scY,
//     };
//   },
// });
</script>

<style scoped>
.ct-witch {
  animation: myMove 2.5s infinite;
}

@keyframes myMove {
  0% {
    transform: translateY(0);
    opacity: 0.7;
  }
  50% {
    transform: translateY(50px);
    opacity: 1;
  }
  100% {
    transform: translateY(0px);
    opacity: 0.7;
  }
}
</style>
