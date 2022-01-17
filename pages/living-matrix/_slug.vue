<template lang="pug">
  .living-matrix-page
    h1 Work
    p The living matrix is our ongoing research archive
    template(v-for="marker in markers")
      h2()
        NuxtLink(:to="`/living-matrix/${marker.slug}`") {{ marker.year }} {{ marker.title }}
          p {{marker.category}}
      div(v-if="marker.slug === slug")
        p {{marker.szenario}}
    .living-matrix
      .living-matrix-background
        .box
        .box
        .box
        .box
      LivingMatrix
    //template(v-if="this.slug")
    //  .overlay-matrix
    //    p {{ currentData }}
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
.living-matrix-page {
  background: #3366ff;
  color: white;
}
a {
  color: unset;
  text-decoration: none;
}
.nuxt-link-active {
  color: red;
}
.living-matrix {
  display: grid;
  height: 100vh;
}
.living-matrix > * {
  grid-column: 1;
  grid-row: 1;
}
.living-matrix-background {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  /*padding: 1rem;*/
}
.box {
  background: linear-gradient(0deg, rgba(204,204,204,1) 20%, rgba(255,204,0,1) 30%, rgba(255,204,0,1) 70%, rgba(204,204,204,1) 80%);
  border-radius: 2rem;
  /*mix-blend-mode: soft-light;*/
  backdrop-filter: blur(25px);
  position: relative;
}
</style>
