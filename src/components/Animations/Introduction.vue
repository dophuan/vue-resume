<template>
  <div class="instruction-animation ml-20 grid h-screen overflow-hidden">
    <div v-for="i in range" :key="i" class="cell w-full h-full z-10"></div>
    <div
      class="
        content
        absolute
        top-0
        right-0
        bottom-0
        left-0
        flex
        items-center
        p-4
        text-center text-base text-gray-400
      "
    >
      <div class="text"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Introduction extends Vue {
  range: number;
  constructor() {
    super();
    this.range = 56;
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");

$display-text: "Hi, I am Phu An DO, a fullstack overflow developer";

*,
*::before,
*::after {
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
}

.instruction-animation {
  grid-template: 100% / 3fr repeat(54, 1fr) 3fr;
}

@for $i from 0 to 56 {
  .cell:nth-child(#{$i + 1}):hover ~ .content {
    --partialString: "#{str-slice($display-text, 1, $i + 1)}";
    --size: 32px;
    --color: #000;
  }
}

.content {
  --partialString: "Hover over the screen to reveal the text...";
}

.text:after {
  content: var(--partialString);
  font-family: "Fredoka One", cursive;
  font-size: var(--size);
  color: var(--color);
}
</style>
