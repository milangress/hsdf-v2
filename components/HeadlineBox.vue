<template lang="pug">
  .headline-box
    HorizontalMarquee(:repeat="10" :pause-on-hover="false")
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
  width: 100%;
  font-size: 8vh;
  border-radius: 2rem;
  background-color: #fff;
  padding-top: 1rem;
  margin-block: 1rem;
  overflow: hidden;
  white-space: nowrap;
}

</style>
