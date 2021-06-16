<template>
  <div
    class="
      grid grid-rows-2 grid-cols-1
      md:grid-cols-3 md:grid-rows-1 md:grid-flow-col
      gap-4
      w-full
      h-auto
    "
  >
    <div class="col-span-1 border-l-4 border-yellow-500 p-4">
      <h2 class="font-bold text-xl">Delevoper skills</h2>
      <div>Some of my development skills</div>
    </div>
    <div class="col-span-2 mt-4">
      <div class="mb-4 w-full">
        <ProgressBar :quantity="95" skill="HTML5" />
      </div>
      <div class="mb-4 w-full">
        <ProgressBar :quantity="93" skill="CSS" />
      </div>
      <div class="mb-4 w-full">
        <ProgressBar :quantity="80" skill="Javascript" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProgressBar from "@/components/Animations/ProgressBar.vue";
import skillInfo from "@/assets/lang/skills.json";

@Component({
  components: {
    ProgressBar,
  },
})
export default class ProgressBarGroup extends Vue {
  get skills(): unknown {
    return skillInfo;
  }
}
</script>

<style scoped></style>
