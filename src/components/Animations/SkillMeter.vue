<template>
  <div class="relative pt-1">
    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-emerald-200">
      <div
        :style="`width: ${point}%`"
        class="
          shadow-none
          flex flex-col
          text-center
          whitespace-nowrap
          text-white
          justify-center
          bg-emerald-500
        "
      ></div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class SkillMeter extends Vue {
  @Prop({ default: 0, required: true, type: Number })
  readonly point!: number;
  constructor() {
    super();
  }
}
</script>

<style scoped></style>
