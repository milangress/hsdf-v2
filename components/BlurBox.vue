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
}
.blur-wrapper > * {
  grid-column: 1;
  grid-row: 1;
}
.blur-background {
  z-index: -1;
  filter: blur(15px);
  width: 100%;
  border-radius: 20%;
}
.blur-content {
  filter: url(#displacementFilter);
}

</style>
