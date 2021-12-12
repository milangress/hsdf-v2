<template>
  <svg ref="svg" width="100%" height="100%" :viewBox="`0 0 ${width} ${height}`"
       xmlns="http://www.w3.org/2000/svg">
    <filter id="displacementFilter">
      <feTurbulence type="turbulence" baseFrequency="0.5"
                    numOctaves="0.02" result="turbulence"/>
      <feDisplacementMap in2="turbulence" in="SourceGraphic"
                         scale="3" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <g style="filter: url(#displacementFilter)">
      <line :x1="widthP(50)" :y1="heightP(5)" :x2="widthP(50)" :y2="heightP(95)" class="line" />
      <line :x1="widthP(5)" :y1="heightP(50)" :x2="widthP(95)" :y2="heightP(50)" class="line" />
    </g>
  </svg>
</template>

<script>
export default {
  name: "MatrixSVG2d",
  data() {
    return {
      width: 0,
      height: 0
    }
  },
  methods: {
    widthP (p) {
      return (this.width / 100) * p
    },
    heightP (p) {
      return (this.height / 100) * p
    },
    calculateSize () {
      this.width = this.$refs.svg.getBoundingClientRect().width
      this.height = this.$refs.svg.getBoundingClientRect().height
    }
  },
  mounted() {
    this.calculateSize()
    window.addEventListener("resize", this.calculateSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.calculateSize);
  },
}
</script>

<style scoped>
.line {
  stroke-width: 1;
  stroke: #ff0000;
}

</style>
