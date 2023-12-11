<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>


<template>
  <div class="">
    <!-- removed the px-10 -->
    <div class="mx-auto max-w-100 px-8 xl:px-24 md:pr-0 2xl:px-96 sm:px-24 ">
      <RouterView/>
    </div>
  </div>
</template>

