<template lang="pug">
  .background-image(:style="blurEffectCSS")
</template>

<script>
export default {
  name: "BackgroundBlur",
  data() {
    return {
      scrollTop: 0,
    }
  },
  computed: {
    blurEffectCSS() {
      const blurVal = Math.round(Math.min(Math.max(this.scrollTop / 100, 0), 5))
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
.background-image {
  height: 100vh;
  width: 100%;
  background-image: url("/Startbildschirm-HSDf-Groß-ohnelogo.png");
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  position: fixed;
  z-index: -100;
  filter: blur(10px);
}
</style>
