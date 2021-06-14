<template>
  <div
    class="
      home
      w-screen
      md:h-screen md:w-auto
      overflow-x-hidden overflow-y-scroll
      md:overflow-x-scroll md:overflow-y-hidden
      block
      md:flex md:flex-column md:ml-20
      bg-hero-md
      ml-0
    "
    id="home"
  >
    <div class="child">
      <IntroductionPage />
    </div>
    <div class="child">
      <Experiences />
    </div>
    <div class="child">
      <Skills />
    </div>
    <div class="child">
      <Education />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Skills from "@/views/Skills.vue";
import Experiences from "@/views/Experiences.vue";
import Education from "@/views/Education.vue";
import IntroductionPage from "@/views/IntroductionPage.vue";
@Component({
  components: {
    Skills,
    Experiences,
    Education,
    IntroductionPage,
  },
})
export default class Home extends Vue {
  point: number;
  bgClass: string;
  constructor() {
    super();
    this.point = 50;
    this.bgClass = "bg-hero-md";
  }

  mounted(): void {
    let element = document.getElementById("home") as HTMLDivElement;
    const scrollAmount = 100;
    document.addEventListener(
      "wheel",
      (event) => {
        if (window.innerWidth >= 768) {
          if (event.deltaY < 0) {
            element.scrollLeft += scrollAmount;
          } else if (event.deltaY > 0) {
            element.scrollLeft -= scrollAmount;
          }
          event.preventDefault();
        }
      },
      {
        passive: false,
      }
    );
  }
}
</script>

<style lang="scss" scoped>
#home {
  scroll-snap-type: y mandatory;
  .child {
    scroll-snap-align: start;
  }
}
</style>
