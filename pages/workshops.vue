<template lang="pug">
.text
  h1 Workshops
  img(src="/workshops/class-structure.png")
  img(src="/workshops/tool-ws.png")

</template>

<script>
export default {
  name: "workshops",
  layout (context) {
    return 'textPage'
  }
};
</script>

<style scoped>
p+p {
  margin-top: 1em
}
h1,h2,h3,h4 {
  margin-top: 2em
}
</style>
