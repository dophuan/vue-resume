<template>
  <div
    class="
      follower-wrapper
      overflow-hidden
      h-screen
      w-full
      grid
      fixed
      top-20
      md:top-0
      left-0
      md:left-20
    "
  >
    <div v-for="i in cell" :key="i" class="cell w-full h-full z-10"></div>
    <div
      class="
        content
        absolute
        top-0
        right-0
        bottom-0
        left-0
        flex
        content-center
        items-center
      "
    >
      <div
        v-for="index in follower"
        :key="index"
        class="follower absolute w-2 h-2 rounded-full"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Follower extends Vue {
  cell: number;
  follower: number;
  constructor() {
    super();
    this.cell = 400;
    this.follower = 1;
  }
}
</script>

<style lang="scss" scoped>
.follower-wrapper {
  grid-template: repeat(20, 1fr) / repeat(20, 1fr);
}

@for $i from 0 to 20 {
  .cell:nth-child(20n + #{$i + 1}):hover ~ .content {
    --positionX: #{$i};
  }
  .cell:nth-child(n + #{20 * $i + 1}):nth-child(-n + #{20 * ($i + 1)}):hover
    ~ .content {
    --positionY: #{$i};
  }
}

.content {
  --positionX: 10;
  --positionY: 10;
}

.follower {
  background-color: orange;
  transform-origin: center 20px;
  animation: rotate infinite linear;

  @for $i from 0 to 5 {
    &:nth-child(#{$i + 1}) {
      top: calc(#{1 + (random(30) / 10)}% + var(--positionY) * 5%);
      left: calc(#{1 + (random(30) / 10)}% + var(--positionX) * 5%);
      background-color: hsl(360/5 * $i, 75%, 75%);
      animation-duration: #{1 + $i / 10}s;
      transition: all #{0.3 + $i / 10}s;
    }
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -20px) rotate(0);
    }
    to {
      transform: translate(-50%, -20px) rotate(360deg);
    }
  }
}
</style>
