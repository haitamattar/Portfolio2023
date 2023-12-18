<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>


<template>
  <div class="">
    <!-- removed the px-10 -->
    <div class="mx-auto min-h-screen max-w-screen-2xl px-8 xl:px-24 md:pr-0 2xl:px-100 sm:px-24 ">
      <RouterView/>
    </div>
  </div>
</template>

