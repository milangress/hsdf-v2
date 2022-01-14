<template lang="pug">
  .index-container
    BackgroundBlur
    HeaderHome
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

.content {
  height: 100vh;
}
</style>
