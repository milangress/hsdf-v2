<template lang="pug">
  .headline-box
    HorizontalMarquee(:repeat="10" :pause-on-hover="false" :hide-overflow="true")
      slot
</template>

<script>
import HorizontalMarquee from "~/components/shared/HorizontalMarquee"
export default {
  name: "HeadlineBox",
  components: {HorizontalMarquee}
}
</script>

<style scoped>
.headline-box {
  font-family: "SissiDisplay", serif;
  text-transform: uppercase;
  width: 100%;

  font-size: 14vh;
  border-radius: 2rem;
  background-color: black;
  color: white;
  padding-top: 0;
  line-height: 0.9;

  margin-block: 1rem;
  overflow: hidden;
  white-space: nowrap;
  filter: url(#displacementFilter);
  /*mix-blend-mode: multiply;*/
}

</style>
