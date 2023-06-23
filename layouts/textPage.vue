<template>
  <div>
    <svg ref="svg" width="0" height=0
         xmlns="http://www.w3.org/2000/svg">
      <filter id="globalDisplacementFilter">
        <feTurbulence type="turbulence" baseFrequency="0.5"
                      numOctaves="0.02" result="turbulence"/>
        <feDisplacementMap in2="turbulence" in="SourceGraphic"
                           scale="3" xChannelSelector="R" yChannelSelector="G"/>
      </filter>
    </svg>
    <nav>
      <NuxtLink to="/">🢨 back</NuxtLink>
    </nav>
    <div class="container">
      <Nuxt></Nuxt>
    </div>
  </div>
</template>

<script>
export default {
  name: "textPage"
};
</script>

<style scoped>
.container {
  margin: 15rem 2rem 0 5rem;
  padding-bottom: 15rem;
  max-width: 60vw;
  font-size: calc(1vw + 1rem);
}
nav a {
  margin-left: 2rem;
  color: black;
}
</style>
