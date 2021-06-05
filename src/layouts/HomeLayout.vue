<template>
  <div id="home__layout">
    <Header />
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
@Component({
  components: {
    Header,
  },
})
export default class HomeLayout extends Vue {}
</script>

<style scoped></style>
