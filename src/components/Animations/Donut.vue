<template>
  <div class="relative">
    <div
      class="
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
        text-gray-600
      "
    >
      <slot />
    </div>
    <canvas
      id="doughnut"
      ref="donut"
      :width="canvasWidth"
      :height="canvasHeight"
    ></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Chart from "chart.js/auto";

@Component
export default class Donut extends Vue {
  @Prop({ default: () => [] }) readonly labels!: Array<string>;
  @Prop({ default: () => [] }) readonly colors!: Array<string>;
  @Prop({ default: () => [] }) readonly data!: Array<number>;
  @Prop({ default: 40 }) readonly canvasWidth!: number;
  @Prop({ default: 40 }) readonly canvasHeight!: number;
  @Prop({
    default: () => {
      return Chart.defaults;
    },
  })
  readonly options: unknown | undefined;

  mounted(): void {
    this.createChart({
      datasets: [
        {
          data: this.data,
          backgroundColor: this.colors,
        },
      ],
      labels: this.labels,
    });
  }

  public createChart(chartData: unknown): void {
    const canvas = document.getElementById("doughnut") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.canvas.width = this.canvasWidth;
      ctx.canvas.height = this.canvasHeight;
    }
    const options = {
      type: "doughnut",
      data: chartData,
      options: this.options,
    };
    new Chart(canvas, options);
  }
}
</script>

<style scoped></style>
