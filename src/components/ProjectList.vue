<script>
import ProjectCard from "./ProjectCard.vue";
import ProjectData from "../data/Projects.json";

export default {
  data() {
    return {
      projects: ProjectData
    };
  },
  components: {
    ProjectCard
  }
}
</script>

<template>
  <div class="menu-item" id="projects" >
    <h3 class="sticky md:relative backdrop-blur md:backdrop-blur-none z-50 top-0 text-3xl md:text-4xl antialiased font-sans text-slate-200 font-medium max-w-3xl mb-6 mt-16 pb-4 pt-3">
      Projects
    </h3>
    <ProjectCard v-for="(project, index) in projects"
                 :key="index"
                 :title="project.title"
                 :description="project.description"
                 :technologies="project.technologies"
                 :previewImage="project.previewImage"
                 :repo-u-r-l="project.repoURL"
                 :doc-path="project.docPath"
    />
  </div>
</template>