<template lang="pug">
  .index-container
    BackgroundBlur
    HeaderHome
    nav
      NuxtLink(to="about")
        BlurBox(bg-color="#fef264") About
    .content
      LivingMatrix
      ProjectLinks



</template>

<script>
import HeaderHome from "~/components/pages/home/HeaderHome"
import LivingMatrix from "~/components/pages/home/LivingMatrix"
import ProjectLinks from "~/components/pages/home/ProjectLinks"
export default {
  components: {ProjectLinks, LivingMatrix, HeaderHome}
}
</script>

<style>
body {
  /*filter: saturate(1.5);*/
  max-width: 100vw;
  overflow-x: hidden;
}

.content {
  height: 100vh;
}
nav {
  height: min-content;
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 3rem;
  transform: scaleX(0.8);
  filter: url(#displacementFilter);
}
nav a {
  color: #3372ed;
  text-decoration: none;
}
nav:hover {
  /*filter: saturate(40000);*/
  mix-blend-mode: color-dodge;
}
</style>
