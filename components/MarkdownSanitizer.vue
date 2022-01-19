<template lang="pug">
  .markdown(v-html="mdToHtml" )

</template>

<script>
import { marked } from 'marked';
export default {
  name: "MarkdownSanitizer",
  props: {
    input: {
      type: String,
      default: "# No content"
    }
  },
  computed: {
    mdToHtml() {
      return marked.parse(this.input)
    }
  }
}
</script>

<style scoped>

</style>
