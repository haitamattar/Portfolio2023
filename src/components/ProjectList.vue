<script>
import ProjectCard from "./ProjectCard.vue";
import projectData from "../data/Projects.json";

export default {
  data() {
    return {
      projects: projectData
    };
  },
  components: {
    ProjectCard
  }
}
</script>

<template>
  <div class="mb-80 menu-item" id="projects" >
    <h3 class="text-4xl antialiased font-sans text-midnightWhite font-medium max-w-3xl mb-12 mt-20">
      Projects
    </h3>
    <ProjectCard v-for="(project, index) in projects"
                 :key="index"
                 :title="project.title"
                 :description="project.description"
    />
  </div>
</template>