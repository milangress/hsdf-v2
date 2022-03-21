<template lang="pug">
  .living-matrix-page
    //BackgroundBlur
    client-only
      BackgroundHydra
    nav
      NuxtLink(to="/")
        BlurBox(bg-color="#ffffff") 🢨 back
    section.matrix-top(:style="styleLeft")
      h1 Work
      p The living matrix is our ongoing research archive

      p(v-if="$fetchState.pending") Loading....
      p(v-else-if="$fetchState.error") Error while fetching data
      template(v-else)

        select(v-model="selectedFilter")
          option(disabled value="") Filter
          template(v-for="category in everyCategory" )
            option() {{category}}
        template(v-for="category in everyCategory")
          span.category-selector {{category}}

        template(v-for="marker in filteredMarkers")
          HeadlineBox(:id="marker.slug" :ref="marker.slug" :noFilter="true")
            NuxtLink(:to="{path: `/living-matrix/${marker.slug}`}")
              span {{ marker.year }}
              span {{ marker.title }}
          //h2.marker-title(:id="marker.slug")
          //  NuxtLink(:to="{path: `/living-matrix/${marker.slug}`}")
          //    span.year {{ marker.year }}
          //    span {{ marker.title }}
          //  span
          //    span.category.vonUns(v-if="marker.vonUns" ) ❤
          //    span.category.author(v-if="marker.author" ) {{marker.author}}
          //    span.category(@click="selectedFilter = marker.category") {{marker.category}}
          div(v-if="marker.slug === slug")
            //p {{marker.text}}
            MarkdownSanitizer(:input="marker.text")
    .living-matrix(@mouseover="livingMatrixIsOpen = true" @mouseleave="livingMatrixIsOpen = false")
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
import BlurBox from "~/components/BlurBox"
import HeadlineBox from "~/components/HeadlineBox"
import MarkdownSanitizer from "~/components/MarkdownSanitizer"

export default {
  name: "LivingMatrixPage",
  components: {
    MarkdownSanitizer,
    HeadlineBox,
    BlurBox,
    LivingMatrix,
    BackgroundHydra: () => import('~/components/hydra/BackgroundHydra')
  },
  asyncData({ params }) {
    const slug = params.slug // When calling /abc the slug will be "abc"
    return { slug }
  },
  data () {
    return {
      markers: [],
      selectedFilter: 'all',
      livingMatrixIsOpen: false
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
    },
    styleLeft () {
      return {
        transform: this.livingMatrixIsOpen ? "scaleX(0.2)" : "scaleX(1)"
      }
    }
  },
  watch:{
    slug (){
      // this.$nextTick(() => {
      //   // eslint-disable-next-line no-console
      //   console.log('Called by Watch')
      //   window.setTimeout(this.scrollToActive(), 5000)
      // })
    }
  },
  mounted() {
    this.$nextTick(() => {
      // eslint-disable-next-line no-console
      console.log('Called by Mounted')
      this.scrollToActive()
    })
  },
  methods: {
    scrollToActive() {
      this.$nextTick(() => {
        this.goto(this.slug)
      })
    },
    goto(refName) {
      try {
        window.setTimeout(() => {
        const element = document.getElementById(refName)
        // const element = this.$refs[refName];
        // eslint-disable-next-line no-console
        console.log(element)
        const top = element.offsetTop;
        // eslint-disable-next-line no-console
        // console.log(top)

        window.scrollTo(0, top);
        //   window.scrollTo({ top, behavior: "smooth" });
        }, 100)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>
.living-matrix-page {
  background: #3366ff;
  color: white;
  min-height: 100vh;
}
nav {
  z-index: 5;
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
.category-selector {
  font-size: 1.5em;
  line-height: 0.8;
  padding-block: .5em;
  padding-inline: 1em;
  margin: .5em;
  border-radius: 2em;
  background: red;
}
.category-selector:hover {
  background-color: white;
  color: red;
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
  padding: 50vh 1rem 1rem 1rem;
  max-width: 50vw;
  transform-origin: left;
  transition: all ease-in-out 0.2s;
}
.living-matrix {
  display: grid;
  height: 100vh;
  width: 25%;
  position: fixed;
  top:0;
  right: 0;
  transition: all ease-in-out 0.2s;
  mix-blend-mode: difference;
}
.living-matrix:hover {
  width: 90%;
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
