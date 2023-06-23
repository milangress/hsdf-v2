<template lang="pug">
  .head
    .title
      HeaderIconMenuIcon.side(:menuItem="{name: 'About', icon: '/icons/about.png', link: '/about'}" :scale="0.5")
      p.text.title-font <i>Unreal Entrprises</i> [<i>www.unreal.enterprises</i>] is the collaborative design & artist duo <i>Anna Janke</i> and <i>Milan Gress</i>. They are interested in the opaque connections between fiction, capitalist alienation, bodies and instant*<wbr>impulse*<wbr>gambling*<wbr>dopamine magic. UE practice manifests through methods, tools, workshops and physical fictions. <i>Always keep your optimism/pessimism. <br> With love, Anna & Milan</i>
      HeaderIconMenuIcon.side(:menuItem="{name: 'Plot/Slot', icon: '/icons/Matrix_Tool_1.png', link: 'https://plot-slot.unreal.enterprises/'}")

    .navigation
      HeaderIconMenuIcon(v-for="menuItem in menuItems" :key="menuItem.name" :menuItem="menuItem")
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
          link: "https://matrix.unreal.enterprises",
        },
        {
          name: "Unreal Engine",
          icon: "/icons/Unreal_Engine_Icon.png",
          link: "/unreal-engine",
        },
        {
          name: "Living Matrix",
          icon: "/icons/Living_Matrix.png",
          link: "/living-matrix",
        },
        {
          name: "Future as a Service",
          icon: "/icons/FAAS.png",
          link: "https://faas.unreal.enterprises",
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
.title {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 60vw 1fr;
}

.text {
  padding-top: 2rem;
  margin: 0 auto;
  max-width: 60vw;
}
.navigation {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-content: center;
  /*grid-gap: 5rem;*/
  padding: 2rem 5rem 0 5rem;
}
@media (max-width: 800px) {
  .navigation {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 2rem;
    grid-gap: 1rem;
  }
  .title {
    grid-template-columns: 1fr 1fr;
  }
  .text {
    max-width: 90vw;
    grid-column: span 2;
  }
  .side {
    grid-row: 2;
  }

}
@media (max-width: 600px) {
  .navigation {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;
  }
}
</style>

<style>
.navigation > *:nth-child(3n - 2), .navigation > *:nth-child(3n) {
  transform: translateY(-5rem);
}
@media (max-width: 800px) {
  .navigation > *:nth-child(3n - 2), .navigation > *:nth-child(3n) {
    transform: none
  }
}
</style>
