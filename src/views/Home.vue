<template>
  <div
    class="
      home
      h-screen
      overflow-x-scroll overflow-y-hidden
      flex flex-column
      md:ml-20
      ml-0
    "
    id="home"
  >
    <span class="child">
      <IntroductionPage />
    </span>
    <span class="child">
      <Skills />
    </span>
    <span class="child">
      <Experiences />
    </span>
    <span class="child">
      <Education />
    </span>
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
  delta: number;
  x: number;
  y: number;
  point: number;
  constructor() {
    super();
    this.delta = 0;
    this.x = 0;
    this.y = 0;
    this.point = 50;
  }

  mounted(): void {
    let element = document.getElementById("home") as HTMLDivElement;
    let left = 0;

    document.addEventListener(
      "wheel",
      (event) => {
        if (event.deltaY < 0) {
          left = left + 100;
          element.scrollLeft += 30;
        } else if (event.deltaY > 0) {
          element.scrollLeft -= 30;
        }
        event.preventDefault();
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
