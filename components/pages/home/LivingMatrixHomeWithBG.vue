<template lang="pug">
  .living-matrix
    .grid
      .box
      .box
      .box
      .box
    //MatrixSVG2d(:padding="20")
    LivingMatrix

</template>

<script>
import LivingMatrix from "~/components/LivingMatrix"
import MatrixSVG2d from "~/components/MatrixSVG2d"
export default {
  name: "LivingMatrixHomeWithBG",
  components: {MatrixSVG2d, LivingMatrix}
}
</script>

<style scoped>
.living-matrix {
  height: 100vh;
  display: grid;
  /*margin-top: -4rem;*/
}
.living-matrix > * {
  grid-column: 1;
  grid-row: 1;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  /*padding: 1rem;*/
}
.box {
  background-color: rgb(206, 203, 203);
  border-radius: 2rem;
  /*mix-blend-mode: soft-light;*/
  /*backdrop-filter: blur(5px);*/
  position: relative;
  box-shadow: inset 0 0 2rem 10px #fff, inset 0 0 2rem 10px #fff;
  opacity: 1;
}
/*.box:nth-child(1) {*/
/*  background: linear-gradient(180deg, rgba(193,193,193,1) 0%, rgba(250,254,21,1) 35%, rgba(255,255,255,1) 81%);*/

/*}*/
/*.box:nth-child(2) {*/
/*  background: linear-gradient(180deg, rgba(0,7,255,1) 0%, rgba(255,181,0,1) 35%, rgba(255,255,255,1) 81%);*/

/*}*/
/*.box:nth-child(1):after, .box:nth-child(1):before {*/
/*  content: '';*/
/*  position: absolute;*/
/*  inset: 0;*/
/*  border-radius: 2rem;*/
/*  background: linear-gradient(180deg, rgba(214,214,214,1) 0%, rgba(255,246,0,1) 46%, rgba(255,255,255,1) 100%);*/
/*  mix-blend-mode: color-burn;*/

/*}*/
/*.box:nth-child(2):after, .box:nth-child(2):before {*/
/*  content: '';*/
/*  position: absolute;*/
/*  inset: 0;*/
/*  border-radius: 2rem;*/
/*  background: linear-gradient(180deg, rgba(0,7,255,1) 0%, rgba(255,169,0,1) 46%, rgba(255,255,255,1) 100%);*/
/*  mix-blend-mode: multiply;*/

/*}*/

</style>
