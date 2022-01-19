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
}
</style>
