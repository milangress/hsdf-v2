<template lang="pug">
  .headline-box(:style="filterStyle")
    HorizontalMarquee(:repeat="10" :pause-on-hover="false" :hide-overflow="true" :duration="20")
      slot()
    .footer
      slot(name="footer")
</template>

<script>
import HorizontalMarquee from "~/components/shared/HorizontalMarquee"

export default {
  name: "HeadlineBox",
  components: {HorizontalMarquee},
  props: {
    noFilter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    filterStyle () {
      return {
        filter: this.noFilter ? 'none' : 'var(--grainTest)'
      }
    }
  }
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
  /*padding-top: 0.1em;*/
  line-height: 1;

  margin-block: 1rem;
  overflow: hidden;
  white-space: nowrap;
  /*mix-blend-mode: multiply;*/
  filter: blur(0px) var(--grain);
  transition: 0.3s filter linear;
}
.headline-box:hover {
  filter: blur(5px) var(--grain) !important;
}
.headline-box > *:not(.footer) {
  /*filter: var(--grainTest);*/
  filter: blur(0px) var(--grain);
}
.footer {
  font-family: "authentic", sans-serif;
  font-size: 0.2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  filter: var(--grain-min)
}
</style>
