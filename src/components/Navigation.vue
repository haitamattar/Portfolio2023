<script>
export default {
  props: {
    active: 'about'
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
  }
}
</script>

<template>
  <nav class="hidden xl:block fixed z-50 right-0 mr-20 m-auto" id="navigation" data-scroller>
    <div ref="activeDot" class="h-3 w-3 bg-midnightOrange transition-all rounded-full fixed right-44"></div>
    <ul class="text-white mb-5 list-outside leading-10">
      <router-link to="#about">
      <li class="hover:text-midnightOrange about font-light" :class="active === 'about' ? 'text-midnightOrange' : ''">
          About
      </li>
      </router-link>
      <router-link to="#experience">
      <li class="hover:text-midnightOrange experience font-light" :class="active === 'experience' ? 'text-midnightOrange' : ''">
          Experience
      </li>
      </router-link>
      <router-link to="#projects">
      <li class="hover:text-midnightOrange projects font-light" :class="active === 'projects' ? 'text-midnightOrange' : ''">
          Projects
      </li>
      </router-link>
    </ul>
  </nav>
</template>
