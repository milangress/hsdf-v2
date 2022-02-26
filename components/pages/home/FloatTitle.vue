<template lang="pug">
  .titles
    p.FloatTitle Redesign Ongoing!
    p.FloatTitle.second -> Spring Semester 2022
</template>

<script>
export default {
  name: "FloatTitle"
}
</script>

<style scoped>
.FloatTitle {
  z-index: 1000;
  white-space: nowrap;
  font-family: Sneaky-Times,serif;
  position: absolute;
  left: 20%;
  top: 20%;
  font-size: 5rem;
  text-shadow: -3.5px -3.5px 5px rgba(255,255,255,1), 1.5px 1.5px 5px rgba(255,255,255,1);
  color: blue;
  /**0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);*/
  /*filter: contrast(1);*/
  mix-blend-mode: color-dodge;
  filter: url(#displacementFilter);
}
.second {
  top: 30%
}
</style>
