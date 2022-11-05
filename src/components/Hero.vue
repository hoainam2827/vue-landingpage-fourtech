<template>
  <section id="hero" class="overflow-hidden">
    <div class="hero relative">
      <div
        class="ct-hero-content ct-bg-blend-mode flex flex-col absolute top-[45%] lg:top-[55%] left-[50%] translate-y-[-50%] translate-x-[-50%] items-center justify-around z-[999]"
      >
        <h1
          class="ct-hero-title text-[40px] md:text-[60px] leading-[45px] font-black text-white not-italic tracking-wide lg:text-[80px] md:leading-[120px] text-center mb-5"
        >
          <!-- We’re Getting Ready -->
          {{ $t("hero.main-message") }}
        </h1>
        <div
          class="ct-time-box w-[343px] h-[118px] sm:w-[80vw] lg:w-[756px] lg:h-[150px] m-auto text-center flex items-center justify-center px-[26px] py-[39px]"
        >
          <div class="flex gap-[13px] sm:gap-[40px] lg:gap-[52px] items-center">
            <div class="">
              <div class="flex flex-col">
                <div
                  class="not-italic font-black text-center text-black text-[36px] sm:text-[5vw] lg:text-[65px] lg:leading-[79px] leading-[64px] ct-Playfair"
                >
                  30
                </div>
                <div
                  class="not-italic font-bold text-sm leading-5 flex items-center text-center text-black mx-auto"
                >
                  {{ $t("hero.day") }}
                </div>
              </div>
            </div>
            <div class="">
              <div class="flex flex-col">
                <img src="../assets/images/dot.png" alt="dot" />
              </div>
            </div>
            <div class="">
              <div class="flex flex-col">
                <div
                  class="not-italic font-black text-center text-black text-[36px] sm:text-[5vw] lg:text-[65px] lg:leading-[79px] leading-[64px] ct-Playfair"
                >
                  18
                </div>
                <div
                  class="not-italic font-bold text-sm leading-5 flex items-center text-center text-black mx-auto"
                >
                  {{ $t("hero.hours") }}
                </div>
              </div>
            </div>
            <div class="">
              <div class="flex flex-col">
                <img src="../assets/images/dot.png" alt="dot" />
              </div>
            </div>
            <div class="">
              <div class="flex flex-col">
                <div
                  class="not-italic font-black text-center text-black text-[36px] sm:text-[5vw] lg:text-[65px] lg:leading-[79px] leading-[64px] ct-Playfair"
                >
                  20
                </div>
                <div
                  class="not-italic font-bold text-sm leading-5 flex items-center text-center text-black mx-auto"
                >
                  {{ $t("hero.minutes") }}
                </div>
              </div>
            </div>
            <div class="">
              <div class="flex flex-col">
                <img src="../assets/images/dot.png" alt="dot" />
              </div>
            </div>
            <div class="">
              <div class="flex flex-col">
                <div
                  class="not-italic font-black text-center text-black text-[36px] sm:text-[5vw] lg:text-[65px] lg:leading-[79px] leading-[64px] ct-Playfair"
                >
                  11
                </div>
                <div
                  class="not-italic font-bold text-sm leading-5 flex items-center text-center text-black mx-auto"
                >
                  {{ $t("hero.second") }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-[560px]">
          <h3 class="font-normal text-lg text-center text-white mt-[70px]">
            {{ $t("hero.sub-message") }}
          </h3>
          <div class="relative">
            <input
              type="email"
              class="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-8 bg-white rounded-lg h-14"
              id="email"
              :placeholder="$t('hero.enter-email')"
            />
            <img
              src="../assets/images/icons/arrow-right-dark.svg"
              alt="man"
              class="absolute mr-4 right-0 top-[50%] translate-y-[-50%]"
            />
          </div>
        </div>
      </div>
      <div
        class="man max-w-[938px] max-h-[938px] absolute bottom-0 hidden lg:block"
      >
        <img src="../assets/images/man.png" alt="man" />
      </div>
    </div>
  </section>
</template>

<style>
.hero {
  height: 100vh;
  background: url("../assets/images/hero.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.ct-hero-title {
  font-family: "Playfair Display";
}

#email::before {
  content: "";
  background: url("../assets/images/icons/check.svg");
}

.ct-bg-blend-mode {
  background: radial-gradient(
    27.72% 27.79% at 50.81% 68.15%,
    #210544 0%,
    rgba(23, 5, 68, 0.71) 50.52%,
    rgba(23, 5, 68, 0) 100%
  );
  mix-blend-mode: normal;
  backdrop-filter: blur(5px);
}

.ct-time-box {
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
}
</style>
