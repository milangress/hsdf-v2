<template lang="pug">
  .header-container
    FloatTitle
    .headline
      h1 Highly <br> Speculative <br> Design <br> Fiction
    MatrixSVG2d
</template>

<script>
import FloatTitle from "~/components/pages/home/FloatTitle"
export default {
  name: "HeaderHome",
  components: {FloatTitle}
}
</script>

<style scoped>
.header-container {
  height: 100vh;
  display: grid;
  /*filter: saturate(2);*/
}
.header-container > * {
  grid-column: 1;
  grid-row: 1;
}
.headline {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5.5vw;
  line-height: 1;
  transform: scaleX(1.35);
  color: #ff0000;
  letter-spacing: -0.05em;
  text-shadow: 0 0 6px #fff, 0 0 16px #fff, 0 0 26px #fff, 0 0 36px #fff;
  filter: url(#displacementFilter)
}
</style>
