<script>
import AboutMe from '../components/AboutMe.vue'
import Experience from "../components/ExperienceList.vue";
import Projects from "../components/ProjectList.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  data() {
    return {
      currentSection: '',
      headers: {
        'about': 0.0,
        'experience': 0.0,
        'projects': 0.0
      }
    }
  },
  mounted() {
    const interSectObserver = new IntersectionObserver((entries => {
      for (let i = 0; i < entries.length; i++) {
        this.headers[entries[i].target.getAttribute('id')] = entries[i].intersectionRatio;

        let strongest = 0;
        for (const [key, value] of Object.entries(this.headers)) {
          if (value > strongest) {
            strongest = value;
            this.currentSection = key
          }
        }
      }
    }));

    document.querySelectorAll('.menu-item').forEach((section) => {
          interSectObserver.observe(section);
        }, {
          threshold: [0, 0.25, 0.5, 0.75, 1]
        });
  },
  components: {
    AboutMe,
    Experience,
    Projects,
    Navigation
  }
}

</script>

<template>
  <Navigation :active="currentSection"/>
  <main class="mx-auto min-h-screen max-w-screen-2xl px-8 xl:px-24 md:pr-0 2xl:px-100 sm:px-24 container">
    <AboutMe/>
    <Experience/>
    <Projects/>
  </main>
</template>
