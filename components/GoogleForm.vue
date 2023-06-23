<template lang="pug">
  .google-form-wrapper
    button(@click="$emit('closeGoogleForm', true)") close form
    iframe.google-form(:src="`https://docs.google.com/forms/d/e/1FAIpQLSdADPOukJXFqsM0IZu7HsS-tmXKhZyD-6N0af3pIrZga5YyNw/viewform?usp=pp_url&entry.255041987=${pos}`" frameborder="0")
</template>

<script>
export default {
  name: "GoogleForm",
  props: {
    pos: {
      type: String,
      default: '50-50'
    }
  }
}
</script>

<style scoped>
button {
  display: block;
  width: 100%;
  padding: 0.5em 0 0.3em 0;
  margin-block-end: 1rem;
  font-size: 2rem;
  background-color: transparent;
  border: 2px solid black;
  transition: all 0.1s ease-in-out;
  line-height: 1;
  border-radius: 1em;
}
button:hover {
  background-color: black;
  color: white;
}
.google-form-wrapper {
  z-index: 100000;
  contain: strict;
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 50vw;
  height: 100vh;
  /*background-color: blue;*/
  padding: 1rem;
  backdrop-filter: blur(25px);
  mix-blend-mode: normal;
  cursor: auto;
}
.google-form {
  width: 100%;
  height: 80%;
  margin: auto;
}

</style>
