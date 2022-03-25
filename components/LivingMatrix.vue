<template lang="pug">
  .matrix-wrapper
    template(v-if="googleFormIsOpen")
      GoogleForm(:pos="googleFormPos" @closeGoogleForm="closeGoogleForm")
    .matrix-overlay(@click="openGoogleForm")
      //NuxtLink.matrix-button(to="living-matrix" style="left: 5%; top: 5%")
      //  BlurBox() Living Matrix <br> Environment
      template(v-for="marker in markers")
        NuxtLink.matrix-button(:to="{path: `/living-matrix/${marker.slug}`}" :style="`left: ${marker.pos.x}%; top: ${marker.pos.y}%`")
          BlurBoxClean(bg-color="white") {{marker.title}}

</template>

<script>

import BlurBoxClean from "~/components/BlurBoxClean"
import GoogleForm from "~/components/GoogleForm"
export default {
  name: "LivingMatrix",
  components: {GoogleForm, BlurBoxClean},
  data () {
    return {
      googleFormIsOpen: false,
      googleFormPos: '50-50',
      markers: [],
    }
  },
  async fetch () {
    this.markers = await this.$store.dispatch('livingMatrixStore/update')
  },
  computed: {
  },
  methods: {
    openGoogleForm(event) {
      // eslint-disable-next-line no-console
      console.log(event)
      const rect = event.target.getBoundingClientRect()
      const x = Math.round((100 * event.clientX - rect.left) / rect.width)
      const y = Math.round((100 * event.clientY - rect.top) / rect.height)
      this.googleFormPos = `${x}-${y}`
      this.googleFormIsOpen = true;
    },
    closeGoogleForm() {
      // eslint-disable-next-line no-console
      console.log('close')
      this.googleFormIsOpen = false;
    }
  },
}
</script>

<style scoped>

a {
  text-decoration: none;
}
a.nuxt-link-active {
  color: red;
}

.matrix-overlay {
  height: 100vh;
  position: relative;
  cursor: url('~assets/images/Pointer-Blau.png') 38 67, crosshair;
  /*background-image: url(~assets/images/Pointer-Blau.png);*/
  /*cursor: crosshair;*/
}
.matrix-button {
  /*margin: -3rem;*/
  /*padding: 3rem;*/
  /*contain: paint;*/
  position: absolute;
  display: inline-block;
  font-size: 1.5rem;
  line-height: 1;
  color: white !important;
  text-shadow: 0px 0px 15px blue;
  filter: url(#displacementFilter);
  cursor: url('~assets/images/Pointer-schwarz.png') 63 67, crosshair;
}
.matrix-button:hover {
  filter: url(#displacementFilter) blur(2px);
}

</style>
