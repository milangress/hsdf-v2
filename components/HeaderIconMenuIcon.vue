<template lang="pug">
  NuxtLink.icon(:to="menuItem.link")
    img.shimmer(:src="menuItem.icon")

</template>

<script>
export default {
  name: "HeaderIconMenuIcon",
  props: {
    menuItem: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
a {
  display: block;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s;
  padding-inline: 3rem;
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
