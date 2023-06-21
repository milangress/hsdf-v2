<template lang="pug">
  .head
    p.text <i>Unreal Entrprises</i> is the collaborative design & artist duo <i>Anna Janke</i> and <i>Milan Gress</i>. They are interested in the opaque connections between fiction, capitalist alienation, bodies and instant*impulse*gambling*dopamine magic. UE practice manifests through methods, tools, workshops and physical fictions. <i>Always keep your optimism/pessimism. <br> With love, Anna & Milan</i>

    .navigation
      a.icon(v-for="menuItem in menuItems" :key="menuItem.name" :href="menuItem.link")
        img.shimmer(:src="menuItem.icon")
</template>

<script>
export default {
  name: "HeaderIconMenu",
  data() {
    return {
      menuItems: [
        {
          name: "Matrix",
          icon: "/icons/Matrix_Tool_1.png",
          link: "/matrix",
        },
        {
          name: "Unreal Engine",
          icon: "/icons/Unreal_Engine_Icon.png",
          link: "/tools",
        },
        {
          name: "Living Matrix",
          icon: "/icons/Living_Matrix.png",
          link: "/living-matrix",
        },
        {
          name: "Future as a Service",
          icon: "/icons/FAAS.png",
          link: "/faas",
        },
        {
          name: "Highly Speculative Design Fiction",
          icon: "/icons/HSDF-Logo-2022.png",
          link: "/hsdf",
        },
        {
          name: "Workshops",
          icon: "/icons/PngItem_1816609.png",
          link: "/workshops",
        }
      ]
    };
  },
};
</script>

<style scoped>
.text {
  padding-top: 2rem;
  font-size: 2.1rem;
  max-width: 60vw;
  margin: 0 auto;
  text-align: center;
  line-height: 1.1;
}
.navigation {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  padding: 0 5rem;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s;
}
.icon:nth-child(4n - 3), .icon:nth-child(3n) {
  transform: translateY(-5rem);
}

.shimmer {
  -webkit-mask:linear-gradient(-60deg,#000 30%,#0005,#000 70%) right/300% 100%;
  background-repeat: no-repeat;
  animation: shimmer 2.5s infinite;
}

@keyframes shimmer {
  100% {-webkit-mask-position:left}
}
</style>
