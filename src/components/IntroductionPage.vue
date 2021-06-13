<template>
  <div
    class="
      w-screen
      h-screen
      bg-hero-md
      flex
      md:flex-row
      flex-column
      items-center
      xl:p-32
      p-16
    "
  >
    <div class="left-container">
      <p>
        {{ $t("introduction.hello") }}
      </p>

      <p>
        {{ $t("introduction.description") }}
      </p>

      <div>
        {{ $t("introduction.find_me") }}
      </div>
    </div>

    <div class="right-container"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class IntroductionPage extends Vue {}
</script>

<style scoped></style>
