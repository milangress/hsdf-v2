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
    <Nuxt></Nuxt>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
