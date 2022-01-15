<template lang="pug">
  .project-links
    .box
      p »Highly Speculative Design Fiction« is a research project—somewhere in the blurry field between design and art— Milan Gress and I started this project during our studies at Hochschule Mainz  [DE] and our joint bachelor project originated under the same name/idea and is still in progress today...with »Highly Speculative Design Fiction« is a research project—somewhere in the blurry field between design and art— Milan Gress and I started this project during our studies at Hochschule Mainz  [DE] and our joint bachelor project originated under the same name/idea and is still in progress today...with
      .button-bottom
        BlurButton(to="FaaS-machine" bg-color="rgb(0,255,0)") Future as a Service <br> FAAS-Machine
    .box
      p »Highly Speculative Design Fiction« is a research project—somewhere in the blurry field between design and art— Milan Gress and I started this project during our studies at Hochschule Mainz  [DE] and our joint bachelor project originated under the same name/idea and is still in progress today...with »Highly Speculative Design Fiction« is a research project—somewhere in the blurry field between design and art— Milan Gress and I started this project during our studies at Hochschule Mainz  [DE] and our joint bachelor project originated under the same name/idea and is still in progress today...with
      .button-bottom
        BlurButton(to="matrix" bg-color="rgb(252,11,11)") HSDF <br> Matrix

</template>

<script>
export default {
  name: "ProjectLinks",
}
</script>

<style scoped>
.project-links {
  height: 50vh;
  /*margin-top: -4rem;*/
  margin-top: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  /*padding: 1rem;*/
  z-index: 1;
}
.box {
  background-color: rgba(204, 204, 204, 204.5);
  border-radius: 2rem;
  text-align: center;
  color: white;
  font-size: 2rem;
  padding: 2rem 4rem;
  line-height: 1;
  overflow-x: scroll;
  position: relative;
}
.box p {
  transform: scaleX(0.9);
  margin-bottom: 7rem;
}
.box:nth-child(1) {
  background: linear-gradient(180deg, rgba(0,255,1,1) 0%, rgba(209,209,209,1) 25%, rgba(209,209,209,1) 50%, rgba(255,255,255,1) 75%)
}
.box:nth-child(2) {
  background: linear-gradient(180deg, rgba(252,11,11,1) 0%, rgba(209,209,209,1) 25%, rgba(209,209,209,1) 50%, rgba(255,255,255,1) 75%)
}
.button-bottom {
  position: sticky;
  bottom: 0;
}
.button-bottom:hover {
  mix-blend-mode:color-dodge;
}

</style>
