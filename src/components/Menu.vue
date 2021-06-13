<template>
  <div
    class="fixed top-0 left-0 w-full h-screen bg-red-400 mt-20 md:ml-20 md:mt-0"
    v-show="isShowMenu"
  >
    Menu over here
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Menu extends Vue {
  isShowMenu: boolean;
  constructor() {
    super();
    this.isShowMenu = false;
  }

  created(): void {
    this.$root.$on("toggleMenu", () => {
      this.isShowMenu = !this.isShowMenu;
    });
  }
}
</script>

<style scoped></style>
