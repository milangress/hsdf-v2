<template lang="pug">
  .project-links
    .box
      p The FaaS-Maschine (Future as a Service) is part of our finals and was created as a tool to aid our creative process. Our research was based around finding new ways to take back control over the future and democratizing the process of future speculation. The sentences are based on hand-picked sentence fragments in a Google sheet. The fragments are combined at random and sometimes create vague as well as very specific statements about the future. Thereby allowing one to think in new and unexpected ways about the future.
      .button-bottom
          BlurButton(to="https://faas.unreal.enterprises/" bg-color="rgb(0,255,0)" extern) Future as a Service <br> FAAS-Machine
    .box
      p The HSDF-Matrix (Highly Speculative Design Fiction) was part of our finals and the main tool we created for developing new future scenarios. We mapped different relevant social tendencies into 3D space and formed a matrix where different scenarios could live side by side, therefore emphasizing that the future is a movable and actionable space. The HSDF-Page was used to decipher and communicate this abstract future space. With the possibility to change and edit the axis and quadrants, we also created a way to dynamically use our matrix for collaborative future making in a workshop setting.
      .button-bottom
          BlurButton(to="https://matrix.unreal.enterprises/" bg-color="rgb(252,11,11)" extern) HSDF <br> Matrix

</template>

<script>
import BlurButton from "~/components/BlurButton"
export default {
  name: "ProjectLinks",
  components: {BlurButton},
}
</script>

<style scoped>
.project-links {
  height: 50vh;
  min-height: 50em;
  /*margin-top: -4rem;*/
  margin-top: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
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
  filter: saturate(1.5);
}
.box p {
  transform: scaleX(0.9);
  margin-bottom: 5rem;
}
.box:nth-child(1) {
  background: linear-gradient(180deg, rgba(0,255,1,1) 0%, rgba(209,209,209,1) 30%, rgba(209,209,209,1) 50%, rgba(255,255,255,1) 75%)
}
.box:nth-child(2) {
  background: linear-gradient(180deg, rgba(252,11,11,1) 0%, rgba(209,209,209,1) 30%, rgba(209,209,209,1) 50%, rgba(255,255,255,1) 75%)
}
.button-bottom {
  position: sticky;
  bottom: -2rem;
}
.button-bottom:hover {
  filter: saturate(40000);
}

@media (max-width: 800px) {
  .project-links {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .box {
    overflow-x: auto;
    overflow-y: hidden;
    padding: 2rem 1rem 0 1rem;
    text-align: left;
  }
  .button-bottom {
    position: relative;
    bottom: 2rem;
  }
  .box:nth-child(1) {
    background: linear-gradient(180deg, rgba(0,255,1,1) 0%, rgba(209,209,209,1) 30%, rgba(209,209,209,1) 50%, rgba(255,255,255,1) 100%)
  }
  .box:nth-child(2) {
    background: linear-gradient(180deg, rgba(252,11,11,1) 0%, rgba(209,209,209,1) 30%, rgba(209,209,209,1) 50%, rgba(255,255,255,1) 100%)
  }
}

</style>
