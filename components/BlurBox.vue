<template lang="pug">
  .blur-wrapper
    .blur-background(:style="`background-color:${bgColor}`")
    .blur-content
      slot
</template>

<script>
export default {
  name: "BlurBox",
  props: {
    bgColor: {
      type: String,
      default: "#FF0000",
    }
  }
}
</script>

<style scoped>
.blur-wrapper {
  display: grid;
  margin: -3rem;
  padding: 3rem;
  overflow: visible;
}
.blur-wrapper > * {
  grid-column: 1;
  grid-row: 1;
}
.blur-background {
  z-index: -1;
  filter: blur(15px) !important;
  width: 100%;
  border-radius: 20%;
}
.blur-content {
  padding: 0.5rem;
  /*filter: url(#displacementFilter);*/
}

</style>
