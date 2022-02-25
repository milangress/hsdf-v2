<template lang="pug">
  .wrapper
    template(v-if="extern")
      a.blurBox-button-wrapper(:href="to" v-if="extern")
        BlurBox(:bg-color="bgColor")
          slot
    template(v-else)
      NuxtLink.blurBox-button-wrapper(:to="to")
        BlurBox(:bg-color="bgColor")
          slot
</template>

<script>
export default {
  name: "BlurButton",
  props: {
    bgColor: {
      type: String,
      default: "#FF0000",
    },
    to: {
      type: String,
      default: "/",
    },
    extern: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.blurBox-button-wrapper {
  filter: url(#displacementFilter);
  color: white;
  text-decoration: none;
}
.blurBox-button-wrapper:hover {
  mix-blend-mode: difference;
}
</style>
