<template lang="pug">
.aframe-wrapper
  a-scene(vr-mode-ui="enabled: false" embedded
    device-orientation-permission-ui="enabled: false"
      loading-screen="dotsColor: black; backgroundColor: rgb(231,231,231)"
      background="transparent: true")
    a-assets
      a-asset-item(id="cityModel" src="/3dmodel.glb")
      img(id="logoImage" src="/HSDF-Logo-2022.png")
    a-entity(animation="property: rotation; to: 0 -360 0; loop: true; dur: 50000; easing: linear")
      a-entity(gltf-model="url(/3dmodel.glb)" position="1 0 0" animation-mixer modify-materials animation="property: rotation; to: 0 360 0; loop: true; dur: 50000")
      a-entity(gltf-model="url(/3dmodel-2.glb)" position="-4.5 -1 0" animation-mixer modify-materials animation="property: rotation; to: 0 -360 0; loop: true; dur: 40000")
    a-entity#camera(camera="fov: 30" look-controls rotation-reader orbit-controls="enableZoom: false; target: 0 0 0; minDistance: 0.5; maxDistance: 80; initialPosition: 0 1 10; minPolarAngle: 0; maxPolarAngle: 180; autoRotate: true; autoRotateSpeed: 0.05;")

    a-entity#logo(scale="5 5 0")
      a-plane(position="0 0 0" material="shader: flat; src: #logoImage; transparent: true; side: front; depthTest: true")
      a-plane(position="0 0 0" rotation="0 180 0" material="shader: flat; src: #logoImage; transparent: true; side: front; depthTest: true")

    //a-plane(position="0 0 0" scale="4 4 4" rotation="0 90 0" material="src: /HSDF-Logo-2022.png; transparent: true; side: front; depthTest: true")
    //a-plane(position="0 0 0" rotation="0 270 0" scale="4 4 4" material="src: /HSDF-Logo-2022.png; transparent: true; side: front; depthTest: true")

    //a-box(position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9")
    a-entity(light="type: ambient; color: #fff")
    a-entity(light="type: directional; color: #FFF; intensity: 0.5" position="0 1.6 0")

    //a-sky(material="src:url(/Startbildschirm-Logo_web-scale-2_00x-x2.png)")
</template>

<script>
if (process.browser) {
  require('aframe')
  require('aframe-extras')
  require('aframe-orbit-controls')
  require('./aframeComponents.js')
  require('aframe-look-at-component')
}

export default {
  name: "AFrame3dModel",
  mounted() {
  }
}
</script>

<style scoped>
.aframe-wrapper {
  min-height: 100vh;
  /*filter: var(--grain-min);*/
}
.a-loader-title {
  display: none;
  opacity: 0;
}

</style>
