<template>
  <svg
    class="triangle"
    viewBox="-30 -30 120 120"
    width="100"
    height="100"
    style="transform: rotate(185.44deg)"
  >
    <path d="M 0, 60 L 30, 0 60,60 Z" class="triangle-path"></path>
    <path
      d="M 0, 65 L 30, 5 60,65 Z"
      fill="none"
      stroke="white"
      stroke-width="1"
      class="triangle-stroke"
      style="transform: translateX(5.30224px) translateY(-5.30224px)"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TriangleCursor extends Vue {}
</script>

<style scoped></style>
