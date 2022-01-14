<template lang="pug">
  .index-container
    BackgroundBlur
    HeaderHome
    .content
      LivingMatrix


</template>

<script>
import HeaderHome from "~/components/pages/home/HeaderHome"
import LivingMatrix from "~/components/pages/home/LivingMatrix"
export default {
  components: {LivingMatrix, HeaderHome}
}
</script>

<style>

.content {
  height: 100vh;
}
</style>
