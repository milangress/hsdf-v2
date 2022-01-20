<template lang="pug">
  div.markdown(v-html="mdToHtml" )

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
      const sanitized =  DOMPurify.sanitize(markdown, { USE_PROFILES: { html: true } })
      return sanitized.replace(/(?:\r\n|\r|\n)/g, '<br>');
    }
  }
}
</script>

<style scoped>
.markdown {
  overflow-wrap: break-word;
  /*word-break: break-all;*/
  /*filter: url(#globalDisplacementFilter);*/
  background-color: white;
  color: black;
  border-radius: 2rem;
  padding: 1rem;
  margin: 1rem 0;
  max-width: 60vw;
  mix-blend-mode: luminosity;
}
.markdown > p {
  display: inline-block;
  background-color: red;
}
</style>
