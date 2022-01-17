<template lang="pug">
  .matrix-overlay
    NuxtLink.matrix-button(to="living-matrix" style="left: 5%; top: 5%")
      BlurBox() Living Matrix <br> Environment
    template(v-for="marker in markers")
      NuxtLink.matrix-button(:to="`/living-matrix/${marker.slug}`" :style="`left: ${marker.pos.x}%; top: ${marker.pos.y}%`")
        BlurBox(bg-color="white") {{marker.title}}
</template>

<script>
export default {
  name: "LivingMatrix",
  data () {
    return {
    }
  },
  computed: {
    markers () {
      return this.$store.getters['livingMatrixStore/getMarkers']
    }
  }
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
}
.matrix-button {
  margin: -3rem;
  padding: 3rem;
  contain: paint;
  position: absolute;
  display: inline-block;
  font-size: 1.5rem;
  line-height: 1;
}

</style>
