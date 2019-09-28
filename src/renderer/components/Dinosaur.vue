<template>
  <div class="screen">
    <model-obj src="static/ryu0xb.obj"></model-obj>

    <canvas id="canvas" width="100%" height="400px"></canvas>
  </div>
</template>
<script>
import { ModelObj } from "vue-3d-model";

export default {
  name: "dinosur",
  components: { ModelObj },
  data() {
    return {
      container: null,
      width: 960,
      height: 540
    };
  },
  created() {},
  mounted() {},
  methods: {
    init() {
      // const scene = new THREE.Scene()
      const THREE = this.$THREE;
    }
  }
};
</script>
<style lang="scss">
.screen {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
#canvas {
  width: 100%;
}
</style>