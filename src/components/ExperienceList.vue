<script setup>
import Experience from "./Experience.vue";
</script>

<template>
  <div class="mb-80">

    <h1 class="text-4xl antialiased font-sans text-midnightWhite font-medium max-w-3xl mb-12">
      Experience
    </h1>
    <div class="grid-cols-2 gap-52 flex">
      <div class="inline-block">
        <button class="text-midnightGray block mt-7 mb-7 ">H5mag</button>
        <button class="text-midnightGray block mt-7 mb-7 ">Squeezely</button>
        <button class="text-midnightGray block mt-7 mb-7 ">Innovative Design Delft</button>
        <button class="text-midnightGray block mt-7 mb-7 ">University Of Applied Sciences</button>
      </div>
      <div>
        <Experience/>
      </div>
    </div>


  </div>
</template>
