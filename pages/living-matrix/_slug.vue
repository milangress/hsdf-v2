<template lang="pug">
  .living-matrix-page
    BackgroundBlur
    nav
      NuxtLink(to="/")
        BlurBox(bg-color="#ffffff") 🢨 back
    section.matrix-top
      h1 Work
      p The living matrix is our ongoing research archive

      p(v-if="$fetchState.pending") Loading....
      p(v-else-if="$fetchState.error") Error while fetching data
      template(v-else)

        select(v-model="selectedFilter")
          option(disabled value="") Filter
          template(v-for="category in everyCategory" )
            option() {{category}}

        template(v-for="marker in filteredMarkers")
          h2.marker-title(:id="marker.slug")
            NuxtLink(:to="{path: `/living-matrix/${marker.slug}`}")
              span.year {{ marker.year }}
              span {{ marker.title }}
            span
              span.category.vonUns(v-if="marker.vonUns" ) ❤
              span.category.author(v-if="marker.author" ) {{marker.author}}
              span.category(@click="selectedFilter = marker.category") {{marker.category}}
          div(v-if="marker.slug === slug")
            //p {{marker.text}}
            MarkdownSanitizer(:input="marker.text")
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
  data () {
    return {
      markers: [],
      selectedFilter: 'all'
    }
  },
  async fetch () {
    // eslint-disable-next-line no-console
    const updated = await this.$store.dispatch('livingMatrixStore/update')
    // eslint-disable-next-line no-console
    // console.log(updated)
    this.markers = updated
  },
  computed: {
    currentData () {
      return this.markers.find(marker => marker.slug === this.slug)
    },
    everyCategory () {
      if (this.markers) {
        const allCat = this.markers.map(marker => marker.category)
        return ['all', ...new Set(allCat)]
      } else {
        return ['all']
      }
    },
    filteredMarkers () {
      if (this.selectedFilter === 'all') {
        return this.markers
      } else {
        return this.markers.filter(marker => marker.category.toLowerCase() === this.selectedFilter.toLowerCase() )
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.living-matrix-page {
  /*background: #3366ff;*/
  color: white;
}
a {
  color: unset;
  text-decoration: none;
}
.nuxt-link-active {
  /*color: red;*/
  text-shadow: 0px 0px 5px black;
}
.marker-title {
  /*filter: url(#globalDisplacementFilter);*/
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
.category {
  font-size: 0.5em;
  /*border: 1px solid white;*/
  margin-left: 0.5em;
  vertical-align: center;
  background: white;
  color: black;
  filter: none;
  border-radius: 2rem;
  padding: 0.1em 1em;
  filter: blur(1px);
}
.author {
  filter: blur(1px);
}
.year {
  display: inline-block;
  min-width: 6ch;
}
section.matrix-top {
  /*font-size: 2em;*/
  padding: 50vh 2rem 2rem 2rem;
  max-width: 60vw;
}
.living-matrix {
  display: grid;
  height: 100vh;
  width: 50%;
  position: fixed;
  top:0;
  right: 0;
}
.living-matrix > * {
  grid-column: 1;
  grid-row: 1;
}
.living-matrix-background {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  /*padding: 1rem;*/
}
.box {
  background: linear-gradient(0deg,
  rgba(204,204,204,1) 20%,
  rgba(255,204,0,1) 30%,
  rgba(255,204,0,1) 70%,
  rgba(204,204,204,1) 80%);
  border-radius: 2rem;
  /*mix-blend-mode: soft-light;*/
  backdrop-filter: blur(25px);
  position: relative;
}
</style>
