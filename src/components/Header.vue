/* eslint-disable prettier/prettier */
<template>
  <div
    class="
      flex
      md:p-6 md:h-screen md:w-20 md:border-r md:flex-col
      p-4
      h-20
      w-screen
      border-b border-gray-300f
      items-center
      content-center
      bg-white
      fixed
    "
  >
    <div>An Do</div>
    <div
      class="
        hidden
        md:inline
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
    />
    <a
      href="javascript:void(0)"
      class="ml-auto md:hidden"
      @click.stop="toggleMenu"
    >
      <i class="fa fa-chevron-down"></i>
    </a>
    <div class="transform -rotate-90 mt-auto hidden md:inline">
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
