<template lang="pug">
  .index-container
    //BackgroundBlur
    //StartOverlay
    //HeaderHome
    //nav
    //  NuxtLink(to="about")
    //    BlurBox(bg-color="white") About
    HeaderIconMenu
    .content
      HeadlineBox
        NuxtLink(:to="{path: `/living-matrix`}") Living Matrix
      p.lm-text.title-font <i>The Living Matrix</i> organizes diverse possibilities in the form of words and images, placing them in a proximity to each other. You are welcome to click anywhere on the living matrix to add something of your own.
      LivingMatrixHomeWithBG
      //HeadlineBox Tools
      //ProjectLinks



</template>

<script>
import HeaderHome from "~/components/pages/home/HeaderHome"
import ProjectLinks from "~/components/pages/home/ProjectLinks"
import LivingMatrixHomeWithBG from "~/components/pages/home/LivingMatrixHomeWithBG"
import BlurBox from "~/components/BlurBox"
import BackgroundBlur from "~/components/BackgroundBlur"
import StartOverlay from "~/components/StartOverlay"
import HeadlineBox from "~/components/HeadlineBox"
export default {
  components: {
    HeadlineBox,
    StartOverlay,
    BackgroundBlur, BlurBox, LivingMatrixHomeWithBG, ProjectLinks, HeaderHome}
}
</script>

<style>
body {
  /*filter: saturate(1.5);*/
  max-width: 100vw;
  overflow-x: hidden;
}

.content {
  /*height: 100vh;*/
}
nav {
  height: min-content;
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 3rem;
  transform: scaleX(0.8);
  filter: var(--grain);
}
nav a {
  color: #3372ed;
  text-decoration: none;
}
nav:hover {
  /*filter: saturate(40000);*/
  mix-blend-mode: color-dodge;
}
.lm-text {
  max-width: 70vw;
  margin: 1.5rem auto;
  font-size: 2rem;
}
</style>
