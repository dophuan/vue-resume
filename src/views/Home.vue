<template>
  <div class="home some-other-class">
    <Introduction />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Introduction from "@/components/Animations/Introduction.vue";

@Component({
  components: {
    Introduction,
  },
})
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
    let element = document.getElementById("orange-box") as HTMLDivElement;
    document.addEventListener("wheel", (event) => {
      let width = parseInt(element.style.width);
      // let height= parseInt(element.style.height);

      if (event.deltaY > 0) {
        width = width + 5;
      } else if (event.deltaY < 0) {
        width = width - 5;
      }
      element.style.width = `${width}px`;
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
