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
      bg-white
    "
  >
    <h1>An Do</h1>
    <div
      class="
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-x-1/2
        border-t border-b border-gray-800
        w-12
        h-4
        cursor-pointer
      "
      @click.stop="toggleMenu"
    ></div>
    <div class="transform -rotate-90 mt-auto">
      <span>An Do Copyright</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  private toggleMenu(): void {
    this.$root.$emit("toggleMenu");
  }
}
</script>

<style scoped></style>
