<template lang="pug">
  .header-container
    .headline
      h1 Highly <br> Speculative <br> Design <br> Fiction
    MatrixSVG2d
</template>

<script>
export default {
  name: "HeaderHome"
}
</script>

<style scoped>
.header-container {
  height: 100vh;
  display: grid;
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
  font-size: 6.5vw;
  line-height: 1;
  transform: scaleX(1.25);
  color: #ff0000;
  letter-spacing: -0.05em;
  text-shadow: 0 0 6px #fff, 0 0 16px #fff, 0 0 26px #fff, 0 0 36px #fff;
  filter: url(#displacementFilter)
}
</style>
