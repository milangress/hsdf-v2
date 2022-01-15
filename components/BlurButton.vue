<template lang="pug">
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
