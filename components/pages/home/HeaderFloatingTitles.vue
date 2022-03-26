<template lang="pug">
svg(:width="width" :height="height" :viewBox="`0 0 ${width} ${height}`")
  filter(id="shadow" x="0" y="0" width="200%" height="200%")
    feDropShadow(dx="0" dy="0" stdDeviation="5" flood-color="white")

  filter#filter(x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB")
    feTurbulence(type="turbulence" baseFrequency="0.015 0.15" numOctaves="1" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence")
    feDisplacementMap#displacement(in="SourceGraphic" in2="turbulence" scale="15" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" result="displacementMap1")
  //filter(id="HeaderFloatingTitlesDisplacement" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB")
  //  feTurbulence(type="turbulence" baseFrequency="0.1 0.1" numOctaves="2" seed="2" stitchTiles="stitch")
  //  feDisplacementMap(in2="turbulence" in="SourceGraphic" scale="10" xChannelSelector="R" yChannelSelector="G" )
  animate(xlink:href="#displacement" id="anim-scale" attributeName="scale" values="20;10;20" dur="8s" repeatCount="indefinite")
  g(filter="url(#shadow)")
    text.main-text(text-anchor="middle" :x="position.x" :y="position.y" filter="url(#filter)") {{sentence}}
</template>

<script>
// import { timeline } from 'motion'
export default {
  name: "HeaderFloatingTitles",
  data() {
    return {
      width: 1000,
      height: 1000,
      position: {
        x: this.width / 2,
        y: this.height / 2
      },
      sentence: 'feeling dizzy?',
      sentenceArray: ['losing reality?',
        'feeling dizzy?',
        'feeling fictitious today?',
        'sensing the awkward worlds?',
        'look out for illegal dimensions?',
        'in needs of a portable fiction?',
        'want to conquer the physical space?',
        'Know how to enter the utopian theme park?'
  ]
    }
  },
  mounted() {
    this.getSize()
    window.addEventListener('resize', this.getSize);
    window.setInterval(this.newSentence, 2500);
  },
  unmounted() {
    window.removeEventListener('resize', this.getSize);
  },
  methods: {
    getSize() {
      this.width = window.innerWidth
      this.height = window.innerHeight
    },
    newSentence() {
      this.sentence = this.sentenceArray[Math.floor(this.sentenceArray.length * Math.random())]
      this.newPosition()
    },
    newPosition() {
      this.position.x = this.width / 4 + (this.width * Math.random() / 2)
      this.position.y = this.height / 4 + (this.height * Math.random() / 2 )
    }
  }
}
</script>

<style scoped>
svg {
  position: absolute;
  /*filter: var(--grain);*/
  /*transform: rotate(90deg) translateY(-10rem);*/
  contain: strict;
}
.main-text {
  font-family: "Sneaky-Times",serif;
  font-size: 3rem;
  fill: white;
}
</style>
