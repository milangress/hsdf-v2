<template lang="pug">
svg(:width="width" :height="height" :viewBox="`0 0 ${width} ${height}`")
  filter(id="shadow" x="0" y="0" width="200%" height="200%")
    feDropShadow(dx="0" dy="0" stdDeviation="5" flood-color="white")

  filter#filter(x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB")
    feTurbulence(type="turbulence" baseFrequency="0.15 0.15" numOctaves="1" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence")
    feDisplacementMap(in="SourceGraphic" in2="turbulence" scale="20" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" result="displacementMap1")
  //filter(id="HeaderFloatingTitlesDisplacement" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB")
  //  feTurbulence(type="turbulence" baseFrequency="0.1 0.1" numOctaves="2" seed="2" stitchTiles="stitch")
  //  feDisplacementMap(in2="turbulence" in="SourceGraphic" scale="10" xChannelSelector="R" yChannelSelector="G" )
  //animate(xlink:href="#disp" id="anim-scale" attributeName="scale" from="140" to="0" dur="3s" fill="freeze" repeatCount="indefinite")
  g(filter="url(#shadow)")
    text.main-text(:x="width/2" :y="height/2" filter="url(#filter)") feeling dizzy?
</template>

<script>
export default {
  name: "HeaderFloatingTitles",
  data() {
    return {
      width: 1000,
      height: 1000
    }
  }
}
</script>

<style scoped>
svg {
  position: absolute;
  /*filter: var(--grain);*/
}
.main-text {
  font-family: "Sneaky-Times",serif;
  font-size: 5rem;
}
</style>
