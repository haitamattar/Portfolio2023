<script>
export default {
  props: {
    active: 'about',
  },
  data() {
    return {
      linkedinURL: import.meta.env.VITE_linkedin_URL,
      githubURL: import.meta.env.VITE_github_URL,
      instagramURL: import.meta.env.VITE_instagram_URL
    }
  },
  methods: {},
  watch: {
    active(activeName) {
      this.$refs.activeDot.classList.remove('animate-gelatine')
      let activeElem = document.querySelector(`.${activeName}`);
      let activePos = activeElem.getBoundingClientRect().top + 15;
      this.$refs.activeDot.classList.add('animate-gelatine');
      this.$refs.activeDot.style.top = activePos + 'px';
    }
  },
}
</script>

<template>
  <nav class="hidden xl:block fixed z-50 right-0 mr-20 m-auto" id="navigation" data-scroller aria-label="Navigation Menu, pages: About, Experience and Projects">
    <div ref="activeDot" class="h-3 w-3 bg-midnightOrange transition-all rounded-full fixed right-44"></div>
    <ul class="text-white mb-5 list-outside leading-10 *:transition-all *:duration-1000">
      <router-link to="#about">
      <li class="hover:text-midnightOrange about font-medium text-midnightGray transition-all duration-600" :class="active === 'about' ? 'text-midnightOrange' : ''">
          About
      </li>
      </router-link>
      <router-link to="#experience">
      <li class="hover:text-midnightOrange experience font-medium text-midnightGray transition-all duration-600" :class="active === 'experience' ? 'text-midnightOrange' : ''">
          Experience
      </li>
      </router-link>
      <router-link to="#projects">
      <li class="hover:text-midnightOrange projects font-medium text-midnightGray transition-all duration-600"  :class="active === 'projects' ? 'text-midnightOrange' : ''">
          Projects
      </li>
      </router-link>
    </ul>

    <div class="flex gap-3 mb-4 text-xl text-midnightGray *:transition-all *:duration-600">
      <a :href="linkedinURL" rel="noreferrer noopener" class="hover:text-midnightOrange bi bi-linkedin"></a>
      <a :href="githubURL" rel="noreferrer noopener" class="hover:text-midnightOrange bi bi-github"></a>
      <a :href="instagramURL" rel="noreferrer noopener" class="hover:text-midnightOrange bi bi-instagram"></a>
    </div>

    <a href="https://github.com/haitamattar/Portfolio2023"><p class="inline-block text-midnightGrayDark text-xs select-none hover:text-vueGreen transition-colors">Made with <br> Vue & Tailwind
    </p></a>

  </nav>
</template>
