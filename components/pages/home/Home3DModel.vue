<template>
  <model-gltf src="/3dmodel.glb" background-alpha="0"
              :controls-options="{
            enablePan: false,
            enableZoom: false,
            enableRotate: true,
          }"></model-gltf>
</template>
<script>
import { ModelGltf } from 'vue-3d-model';
export default {
  components: { ModelGltf }
}
</script>
