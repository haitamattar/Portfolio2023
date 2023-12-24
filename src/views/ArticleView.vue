<script>
import {marked} from "marked";

export default {
  data() {
    return {
      markdownData: "## GOEIE MAN \n # HAHAHAHAHA"
    };
  },
  computed: {
    markdownToHTML() {
      return marked(this.markdownData)
    }
  }
}
</script>

<template>
  <div class="about text-white">
    <h1>This is the blog article</h1>
    <article class="lg:prose-xl prose-slate" v-html="markdownToHTML">
    </article>
  </div>
</template>

