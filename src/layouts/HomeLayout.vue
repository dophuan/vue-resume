<template>
  <div id="home__layout">
    <Header />
    <Menu />
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
@Component({
  components: {
    Header,
    Menu,
  },
})
export default class HomeLayout extends Vue {}
</script>

<style scoped></style>
