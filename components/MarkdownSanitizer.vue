<template lang="pug">
  p.markdown(v-html="mdToHtml" )

</template>

<script>
import { marked } from 'marked';
import DOMPurify from 'dompurify';
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
      const markdown = marked.parse(this.input)
      return DOMPurify.sanitize(markdown);
    }
  }
}
</script>

<style scoped>

</style>
