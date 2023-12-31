<script>

export default {
  props: {
    hideHeaderOnXl: {type: Boolean, default: false}
  }
}
</script>

<template>
  <div class="">
    <h1 :class="hideHeaderOnXl && 'xl:hidden'" class="text-midnightGray py-10 text-xs">Made with <a class="text-vueGreen font-semibold">Vue</a>,<a class="text-sky-500 font-semibold">Tailwind</a> & ❤️</h1>
  </div>
</template>
