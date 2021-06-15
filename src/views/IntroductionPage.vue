<template>
  <div
    class="
      w-screen
      h-screen
      flex
      md:flex-row
      flex-column
      items-center
      xl:p-32
      p-16
    "
  >
    <div class="left-container w-full md:w-2/4">
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

    <div
      class="
        right-container
        items-center
        justify-center
        hidden
        md:flex md:w-2/4
      "
    >
      <DonutChart
        :data="[68, 32]"
        :colors="['orange', 'white']"
        :options="{
          plugins: {
            tooltip: {
              enabled: false,
            },
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
            hover: {
              mode: null,
            },
          },
          maintainAspectRatio: false,
        }"
        :canvas-width="150"
        :canvas-height="150"
        >Test</DonutChart
      >
    </div>
    <div class="absolute bottom-4 left-1/2" style="width: 500px">
      <ProgressBar :quantity="95" skill="Test" />
    </div>
    <!-- <Follower /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DonutChart from "@/components/Animations/Donut.vue";
import ProgressBar from "@/components/Animations/ProgressBar.vue";
// import Follower from "@/components/Animations/Followers.vue";

@Component({
  components: {
    DonutChart,
    ProgressBar,
    // Follower
  },
})
export default class IntroductionPage extends Vue {}
</script>

<style scoped></style>
