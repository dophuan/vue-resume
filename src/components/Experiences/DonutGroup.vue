<template>
  <div
    class="
      grid grid-rows-2 grid-cols-1
      md:grid-cols-3 md:grid-rows-1 md:grid-flow-col
      gap-4
      w-full
      h-auto
    "
  >
    <div class="col-span-1 border-l-4 border-yellow-500 p-4">
      <h2 class="font-bold text-xl">Delevoper skills</h2>
      <div>Some of my development skills</div>
    </div>
    <div class="col-span-2 mt-4">
      <div class="grid grid-rows-1 grid-cols-3 gap-6">
        <div class="col-span-1">
          <DonutChart
            :data="[68, 32]"
            :colors="['orange', 'white']"
            :options="chartOptions"
            :canvas-width="150"
            :canvas-height="150"
            id="donut-1"
            >68%</DonutChart
          >
        </div>
        <div class="col-span-1">
          <DonutChart
            :data="[75, 25]"
            :colors="['orange', 'white']"
            :options="chartOptions"
            :canvas-width="150"
            :canvas-height="150"
            id="donut-2"
            >75%</DonutChart
          >
        </div>
        <div class="col-span-1">
          <DonutChart
            :data="[55, 45]"
            :colors="['orange', 'white']"
            :options="chartOptions"
            :canvas-width="150"
            :canvas-height="150"
            id="donut-3"
            >55%</DonutChart
          >
        </div>
        <div class="col-span-1">
          <DonutChart
            :data="[98, 2]"
            :colors="['orange', 'white']"
            :options="chartOptions"
            :canvas-width="150"
            :canvas-height="150"
            id="donut-4"
            >98%</DonutChart
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DonutChart from "@/components/Animations/Donut.vue";

@Component({
  components: {
    DonutChart,
  },
})
export default class DonutGroup extends Vue {
  get chartOptions(): unknown {
    return {
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
    };
  }
}
</script>

<style scoped></style>
