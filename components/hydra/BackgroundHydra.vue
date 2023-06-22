<template lang="pug">
  .HydraCanvasWrapper
    canvas.hydraCanvas(ref="hydraCanvas" width="1000px" height="500px")
</template>

<script>
let Hydra
if (process.client) {
  Hydra = require('hydra-synth')
}
export default {
  name: "BackgroundHydra",
  mounted() {
    const h = new Hydra({
      canvas: this.$refs.hydraCanvas,
      makeGlobal: false,
      detectAudio: false
    }).synth
    h.src(h.o1).modulate(
      h.osc(6, 0, 1.5).brightness(-.5).modulate(h.noise().sub(h.gradient()), 1), 0.01
    ).layer(
      h.osc(9, 0.03).thresh(0.1, 0).luma(0.5, 0)
        .layer(h.osc(10, 0.03).thresh(0.9, 0).luma(0.5, 0).invert()
        ).modulate(h.osc(1, .1), 0.3)
        .modulateRotate(h.osc(2, .03).kaleid(999),
          () => document.body.scrollTop / 500 - .1)
        .modulatePixelate(h.src(h.o1).pixelate(24, 24), -1000, 1064)
    ).out(h.o1)
    h.src(h.o1).invert().out(h.o0)
  }
}
</script>

<style scoped>
.hydraCanvas {
  position: fixed;
  width: 100vw;
  height: 100vh;
}

</style>
