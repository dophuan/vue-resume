<template>
  <div
    class="
      w-screen
      h-screen
      grid grid-rows-2 grid-cols-1
      md:grid-rows-1 md:grid-cols-2
      gap-4
      flex
      items-center
      p-16
    "
  >
    <div class="col-span-1">
      <p>
        {{ $t("introduction.hello") }}
      </p>
      <h1>Phu An Do</h1>
      <p>
        {{ $t("introduction.description") }}
      </p>

      <div>
        {{ $t("introduction.find_me") }}
      </div>
      <div class="social-networks flex flex-column">
        <a href="javascript:void(0)" class="mr-4">
          <i class="fab fa-linkedin" />
        </a>
        <a href="javascript:void(0)" class="mr-4">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
    <div class="col-span-1">
      <!-- <ProgressBarGroup /> -->
      <DonutGroup />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DonutChart from "@/components/Animations/Donut.vue";
import ProgressBar from "@/components/Animations/ProgressBar.vue";
import DonutGroup from "@/components/Experiences/DonutGroup.vue";
import ProgressBarGroup from "@/components/Experiences/ProgressBarGroup.vue";
// import Follower from "@/components/Animations/Followers.vue";

@Component({
  components: {
    DonutChart,
    ProgressBar,
    ProgressBarGroup,
    DonutGroup,
    // Follower
  },
})
export default class IntroductionPage extends Vue {}
</script>

<style scoped></style>
