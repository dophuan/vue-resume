<template>
  <div class="home some-other-class">
    <div class="demo-box" id="orange-box">{{ x }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  delta: number;
  x: number;
  y: number;
  constructor() {
    super();
    this.delta = 0;
    this.x = 0;
    this.y = 0;
  }

  mounted(): void {
    document.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        this.x = this.x - 10;
      } else if (event.deltaY < 0) {
        this.x = this.x + 10;
      }
      return 0;
    });
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100vh;
  .demo-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: orange;
    width: 50px;
    height: 50px;
  }
}
</style>
