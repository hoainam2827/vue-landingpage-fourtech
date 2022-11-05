<template>
  <section
    id="game"
    class="flex flex-col items-center pt-32 px-4 md:px-20 mx-auto translate-y-[-90px]"
  >
    <div class="">
      <div class="flex flex-col gap-20">
        <div class="ct-game-left flex-1 text-center m-auto max-w-[860px]">
          <h2 class="ct-main-title mb-10">{{ $t("games.title-game") }}</h2>
          <p
            class="font-normal text-sm not-italic leading-5"
            style="color: rgba(117, 117, 117, 1)"
          >
            {{ $t("games.text-game") }}
          </p>
        </div>
        <div class="ct-game-right lg:w-[100vw] lg:px-[80px]">
          <div class="relative xl:grid-cols-4 grid-cols-2 grid gap-4 xl:gap-10">
            <div v-for="game of gameList" :key="game.title" class="w-full">
              <div
                :class="`bg-center bg-no-repeat bg-cover mx-auto bg-white relative sm:max-w-[410px] sm:w-[100%] sm:max-h-[560px] sm:h-[560px] max-w-[164px] w-[100%] max-h-[268px] h-[268px] rounded-[20px]`"
                :style="{
                  backgroundImage: `url(${game.image})`,
                  transform: game.id % 2 === 0 ? 'translateY(120px)' : '',
                }"
              >
                <div
                  class="absolute px-[8px] sm:px-[32px] sm:py-[40px] py-[11px] bottom-0"
                >
                  <h3
                    class="not-italic font-bold text-[24px] leading-[30px] sm:text-5xl text-white sm:leading-[60px] mb-4"
                  >
                    {{
                      game.title === "games.magic-tree"
                        ? $t(game.title)
                        : game.title
                    }}
                  </h3>
                  <p
                    class="not-italic font-normal text-[12px] leading-[15px] sm:text-sm sm:leading-[140%] text-white"
                  >
                    {{ game.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import espace from "../assets/images/espace.png";
import kingLand from "../assets/images/kingland.png";
import theLastGame from "../assets/images/thelastgame.png";
import GDragon from "../assets/images/gdragon.png";
import pirates from "../assets/images/pirates.png";
import witchParty from "../assets/images/witchparty.png";
import rocky from "../assets/images/rocky.png";
import blueFire from "../assets/images/bluefire.png";
import magicTree from "../assets/images/magictree.png";
import aborigines from "../assets/images/aborigines.png";
import cinderella from "../assets/images/cinderella.png";
import egyptGame from "../assets/images/egyptgame.png";

const gameList = [
  {
    id: 1,
    title: "E-Space",
    image: espace,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Kingland",
    image: kingLand,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "The Last Game",
    image: theLastGame,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "G-Dragon",
    image: GDragon,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    title: "Pirates",
    image: pirates,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    title: "Witch Party",
    image: witchParty,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    title: "Rocky",
    image: rocky,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    title: "Blue Fire",
    image: blueFire,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    title: "games.magic-tree",
    image: magicTree,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 10,
    title: "Aborigines",
    image: aborigines,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 11,
    title: "Cinderella",
    image: cinderella,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 12,
    title: "Egypt Game",
    image: egyptGame,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
</script>

<style scoped>
.item:nth-child(2n) {
  transform: translateY(-120px);
}
</style>
