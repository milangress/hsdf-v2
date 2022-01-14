<template lang="pug">
  .index-container
    BackgroundBlur
    HeaderHome
    .content
      MatrixSVG2d

</template>

<script>
import HeaderHome from "~/components/pages/home/HeaderHome"
export default {
  components: {HeaderHome}
}
</script>

<style>

.content {
  height: 100vh;
}
</style>
