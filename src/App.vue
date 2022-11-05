<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import OurGame from "./components/OurGame.vue";
import Footer from "./components/Footer.vue";
import Slide from "./components/Slide.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    About,
    OurGame,
    Footer,
    Slide,
  },
};
</script>

<template>
  <div class="overflow-hidden">
    <navbar msg="Welcome to Your Vue.js App" />
    <hero />
    <about />
    <our-game />
    <slide />
    <Footer />
  </div>
</template>

<style></style>
