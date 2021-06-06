<template>
  <div
    class="
      p-6
      fixed
      h-screen
      w-20
      border-r border-gray-300f
      flex flex-col
      items-center
      content-center
    "
  >
    <h1>An Do</h1>
    <div class="transform -rotate-90 mt-auto">
      <span>An Do Copyright</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style scoped></style>
