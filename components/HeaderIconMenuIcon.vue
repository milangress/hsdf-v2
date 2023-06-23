<template lang="pug">
  component.icon(:is="linkComponent" :to="menuItem.link" :href="menuItem.link")
    .icon(@mouseover="hover = true" @mouseleave="hover = false")
      .hoverText()
        p(:style="textStyle") {{menuItem.name}}
      img.shimmer(:src="menuItem.icon" :style="{transform: 'scale('+ scale + ')', '--timing': timing + 's'}")

</template>

<script>
export default {
  name: "HeaderIconMenuIcon",
  props: {
    menuItem: {
      type: Object,
      required: true
    },
    scale: {
      type: Number,
      default: 0.9
    }
  },
  data() {
    return {
      hover: false
    };
  },
  mounted() {
    if ("ontouchstart" in document.documentElement) {
      this.hover = true;
    }
  },
  computed: {
    textStyle() {
      if (this.hover) {
        return {
          transform: `rotate(${Math.random()*10-5}deg) scale(1.1)`
        }
      }
      return {
        transform: `rotate(${Math.random()*10-5}deg) scale(0)`
      }
    },
    linkComponent() {
      return this.menuItem.link.startsWith('/') ? 'NuxtLink' : 'a';
    },
    timing() {
      return Math.random() + 2;
    }
  },
};
</script>

<style scoped>
.icon {
  display: block;
  position: relative;
  contain: style layout;
  height: min-content;
  cursor: pointer;
}
.hoverText {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 5;
}
.hoverText p {
  background: #fff;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  font-size: 2rem;
  font-style: italic;
  border-radius: 1em;
  color: #000000;
  transition: transform 0.1s;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.1s;
  padding-inline: 3rem;
}
img:hover {
  transform: scale(1.1);
}
.shimmer {
  -webkit-mask: linear-gradient(-60deg,#000 30%,#0005,#000 70%) right/300% 100%;
  background-repeat: no-repeat;
  animation: shimmer var(--timing) infinite;
}

@keyframes shimmer {
  100% {-webkit-mask-position:left}
}

</style>
