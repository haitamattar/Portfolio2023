<script>
import ExperienceCard from "./ExperienceCard.vue";
import experienceData from "../data/Experience.json";

export default {
  data() {
    return {
      experiences: experienceData
    };
  },
  components: {
    ExperienceCard
  }
};
</script>

<template>
  <div class="mb-36 menu-item" id="experience" >
    <h3 class="sticky md:relative backdrop-blur md:backdrop-blur-none z-50 top-0 text-3xl md:text-4xl antialiased font-sans text-midnightWhite font-medium max-w-3xl mb-6 mt-16 pb-4 pt-3">
      Experience
    </h3>
    <ExperienceCard v-for="(exp, index) in experiences"
                :key="index"
                :company="exp.company"
                :role="exp.role"
                :short-description="exp.shortDescription"
                :technologies="exp.technologies"
                :description="exp.description"
                :period="exp.period"
                :url="exp.url"
                :expand="index === 0"
    />
  </div>
</template>