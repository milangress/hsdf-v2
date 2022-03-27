<template lang="pug">
  .blur-wrapper(:style="`--bg-color:${bgColor}`")
    slot
    //.blur-background(:style="`background-color:${bgColor}`")
    //.blur-content
    //  slot
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
  /*margin: -3rem;*/
  /*padding: 3rem;*/
  overflow: visible;
  --bg-color: white;
  position: relative;
}

.blur-wrapper:before {
  content:"";
  position: absolute;
  inset: -0.5em;
  border-radius: 1em;
  background: var(--bg-color);
  z-index: -1;
  pointer-events: none;
  filter: blur(15px) saturate(1.5) !important;
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
