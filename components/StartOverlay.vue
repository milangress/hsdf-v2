<template lang="pug">
  .font-animation
    .front-image(:style="blurEffectCSS")
    .circle
</template>

<script>
export default {
  name: "StartOverlay",
  data() {
    return {
      scrollTop: 0,
    }
  },
  computed: {
    blurEffectCSS() {
      const blurVal = Math.round(Math.min(Math.max(this.scrollTop / 100, 0), 15))
      return `filter: blur(${blurVal}px);`
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handelScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handelScroll);
  },
  methods: {
    handelScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    }
  },
}
</script>

<style scoped>
.font-animation {
}
.circle {
  position: fixed;

  top: 150px;
  left: 50vw;
  width: 40vw;
  height: 0vh;
  background-color: rgb(210, 255, 131, 0.8);
  border-radius: 50%;
  filter: blur(50px);
  z-index: 200;

}
.front-image {
  display: none;
  pointer-events: none;
  height: 100vh;
  width: 100%;
  background-image: url("/Probe-Webfront_4.png");
  background-size: 100% 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  position: fixed;
  z-index: 100;
  filter: blur(10px);
  mix-blend-mode: overlay;
}
</style>
