<template lang="pug">
  div
    h1 Work
    p The living matrix is our ongoing research archive
    template(v-for="marker in markers")
      h2()
        NuxtLink(:to="`/living-matrix/${marker.slug}`") {{ marker.title }}
      div(v-if="marker.slug === slug")
        p {{marker.szenario}}
    LivingMatrix
    template(v-if="this.slug")
      .overlay-matrix
        p {{ currentData }}
</template>

<script>
import LivingMatrix from "~/components/LivingMatrix"
export default {
  name: "LivingMatrixPage",
  components: {LivingMatrix},
  asyncData({ params }) {
    const slug = params.slug // When calling /abc the slug will be "abc"
    return { slug }
  },
  computed: {
    markers () {
      return this.$store.getters['livingMatrixStore/getMarkers']
    },
    currentData () {
      return this.markers.find(marker => marker.slug === this.slug)
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.nuxt-link-active {
  color: red;
}
</style>
