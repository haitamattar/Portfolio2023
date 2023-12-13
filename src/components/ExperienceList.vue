<script>
import Experience from "./Experience.vue";
import experienceData from "../data/Experience.json";

export default {
  data() {
    return {
      experiences: experienceData
    };
  },
  components: {
    Experience
  }
};
</script>

<template>
  <div class="mb-80">
    <h1 class="text-4xl antialiased font-sans text-midnightWhite font-medium max-w-3xl mb-12">
      Experience
    </h1>
    <Experience v-for="(exp, index) in experiences"
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