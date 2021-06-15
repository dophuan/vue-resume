<template>
  <div class="relative pt-1 w-full">
    <div class="flex flex-row">
      <div class="font-bold">{{ skill }}</div>
      <div class="ml-auto font-bold">{{ `${percentage}%` }}</div>
    </div>
    <div class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-900 mt-1">
      <div
        :id="id"
        :style="`width: ${percentage}%`"
        class="
          shadow-none
          flex flex-col
          text-center
          whitespace-nowrap
          text-white
          justify-center
          bg-yellow-500
          transition
          duration-700
        "
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ProgressBar extends Vue {
  @Prop({ default: 0, required: true, type: Number })
  readonly quantity!: number;
  @Prop({ default: "", type: String }) readonly skill!: string;
  @Prop({ default: "bar", type: String }) readonly id!: string;

  percentage: number;
  constructor() {
    super();
    this.percentage = 0;
  }

  mounted(): void {
    let progress = 0;
    let intervalSpeed = 15;
    let incrementSpeed = 1;
    document.addEventListener("DOMContentLoaded", () => {
      let progressInterval = setInterval(() => {
        progress += incrementSpeed;
        if (!this.quantity || progress > this.quantity) {
          clearInterval(progressInterval);
        } else {
          this.percentage = progress;
        }
      }, intervalSpeed);
    });
  }
}
</script>

<style scoped></style>
