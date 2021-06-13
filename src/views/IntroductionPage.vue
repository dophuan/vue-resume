<template>
  <div
    class="
      w-screen
      h-screen
      flex
      md:flex-row
      flex-column
      items-center
      xl:p-32
      p-16
    "
  >
    <div class="left-container w-full md:w-2/4">
      <p>
        {{ $t("introduction.hello") }}
      </p>
      <h1>Phu An Do</h1>
      <p>
        {{ $t("introduction.description") }}
      </p>

      <div>
        {{ $t("introduction.find_me") }}
      </div>
      <div class="social-networks flex flex-column">
        <a href="javascript:void(0)" class="mr-4">
          <i class="fab fa-linkedin" />
        </a>
        <a href="javascript:void(0)" class="mr-4">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>

    <div
      class="
        right-container
        items-center
        justify-center
        hidden
        md:flex md:w-2/4
      "
    >
      <span>Hình tui</span>
    </div>
    <!-- <Follower /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import Follower from "@/components/Animations/Followers.vue";

// @Component({
//   components: {
//     Follower,
//   },
// })
@Component
export default class IntroductionPage extends Vue {}
</script>

<style scoped></style>
