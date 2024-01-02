<script>
import {marked} from "marked";
import projectsData from "../data/Projects.json";
import router from "@/router";
import Footer from "@/components/Footer.vue";


export default {
  components: {Footer},
  data() {
    return {
      markdownData: "",
      docPath: ""

    };
  },
  computed: {
    markdownToHTML() {
      return marked(this.markdownData)
    }
  },
  beforeMount() {
    const formatURL = this.$route.params.name.replace(/-/g, ' ');
    projectsData.forEach((project) => {
      if (project.title === formatURL) {
        this.docPath = project.docPath;
        return true;
      }
    });

    if(this.docPath === undefined) {
      router.push({ name: 'home'})
    }

    fetch(`/markdown/${this.docPath}`)
        .then((response) => response.text())
        .then((text) => {
          this.markdownData = text;
        });
  },
}
</script>

<template>
  <div class="sticky backdrop-blur-md top-0 py-4 xl:py-8 px-5 xl:max-w-max xl:px-16">
    <router-link to="/#projects" class="text-midnightOrange text-base font-medium flex align-middle group *:transition-all *:duration-600 hover:text-midnightDarkOrange"><i class="bi bi-arrow-left-short text-2xl group-hover:-translate-x-[3px]"></i><p class="my-auto">All Projects</p></router-link>
  </div>
  <div class="min-h-screen max-w-screen-lg 2xl:max-w-screen-lg container mx-auto antialiased">

    <article
        class="px-8 prose lg:prose-md min-w-full prose-img:inline-block dark:prose-invert prose-a:text-midnightDarkOrange prose-a:font-bold dark:bg-midnightBlue xl:px-16 sm:px-24 bg-white py-16 mb-10"
        v-html="markdownToHTML">
    </article>
    <Footer class="px-8 min-w-full xl:px-16 sm:px-24" />
  </div>
</template>

