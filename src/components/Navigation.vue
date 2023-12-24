<script>
export default {
  props: {
    active: 'about'
  },
  methods: {}
}
</script>

<template>
  <nav class="fixed z-50 right-0 mr-20 m-auto" id="navigation" data-scroller>
    <ul class="text-white list-disc mb-5 list-outside leading-10">
      <router-link to="#about">
      <li class="hover:text-midnightOrange" :class="active === 'about' ? 'text-midnightOrange' : ''">
          About
      </li>
      </router-link>
      <router-link to="#experience">
      <li class="hover:text-midnightOrange" :class="active === 'experience' ? 'text-midnightOrange' : ''">
          Experience
      </li>
      </router-link>
      <router-link to="#projects">
      <li class="hover:text-midnightOrange" :class="active === 'projects' ? 'text-midnightOrange' : ''">
          Projects
      </li>
      </router-link>
    </ul>
  </nav>
</template>
