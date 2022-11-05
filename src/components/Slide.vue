<script setup>
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Pagination, Navigation];
</script>

<template>
  <section
    id="partner"
    class="bg-[#F6F6F6] mt-[130px] pt-[120px] pb-[50px] lg:px-[150px] text-center"
  >
    <h2 class="ct-main-title mb-20">{{ $t("partner.title-partner") }}</h2>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :navigation="true"
      :pagination="{ clickable: true }"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
        },
        '768': {
          slidesPerView: 4,
        },
        '1024': {
          slidesPerView: 5,
        },
      }"
      class=""
    >
      <swiper-slide class="grid place-items-center">
        <img src="../assets/images/ea.png" class="" />
      </swiper-slide>
      <swiper-slide class="grid place-items-center">
        <img src="../assets/images/game.png" class="" />
      </swiper-slide>
      <swiper-slide class="grid place-items-center">
        <img src="../assets/images/firstpowerup.png" class="" />
      </swiper-slide>
      <swiper-slide class="grid place-items-center h-60">
        <img src="../assets/images/disney.png" class="" />
      </swiper-slide>
      <swiper-slide class="grid place-items-center">
        <img src="../assets/images/bookpro.png" class="" />
      </swiper-slide>
      <swiper-slide class="grid place-items-center">
        <img src="../assets/images/sega.png" class="" />
      </swiper-slide>
      <swiper-slide class="grid place-items-center">
        <img src="../assets/images/2k.png" class="" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<style>
.swiper-wrapper {
  align-items: center;
}

.swiper-pagination {
  display: none;
}

.swiper-button-prev,
.swiper-button-next {
  background: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.25));
}

.swiper-button-prev:after,
.swiper-button-next:after {
  color: #ccc;
  font-size: 14px;
  font-weight: 700;
}
</style>
