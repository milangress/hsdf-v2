<template lang="pug">
  .living-matrix
    .grid
      .box
      .box
      .box
      .box
    MatrixSVG2d

</template>

<script>
export default {
  name: "LivingMatrix"
}
</script>

<style scoped>
.living-matrix {
  height: 100vh;
  display: grid;
  margin-top: -4rem;
}
.living-matrix > * {
  grid-column: 1;
  grid-row: 1;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  /*padding: 1rem;*/
}
.box {
  background-color: rgba(204, 204, 204, 204.5);
  border-radius: 2rem;
  mix-blend-mode: soft-light;
  backdrop-filter: blur(25px);
}
.box:nth-child(1) {
  background: linear-gradient(180deg, rgba(193,193,193,1) 0%, rgba(250,254,21,1) 35%, rgba(255,255,255,1) 81%);

}
.box:nth-child(2) {
  background: linear-gradient(180deg, rgba(0,7,255,1) 0%, rgba(255,181,0,1) 35%, rgba(255,255,255,1) 81%);

}
.box:nth-child(1):after, .box:nth-child(1):before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 2rem;
  background: linear-gradient(180deg, rgba(214,214,214,1) 0%, rgba(255,246,0,1) 46%, rgba(255,255,255,1) 100%);
  mix-blend-mode: color-burn;

}
.box:nth-child(2):after, .box:nth-child(2):before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 2rem;
  background: linear-gradient(180deg, rgba(0,7,255,1) 0%, rgba(255,169,0,1) 46%, rgba(255,255,255,1) 100%);
  mix-blend-mode: multiply;

}

</style>
