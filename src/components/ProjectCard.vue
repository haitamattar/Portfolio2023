<script>
export default {
  props: {
    "title": {type: String, default: "Full-Stack Engineer"},
    "description": {type: String, default: "This contains a description"},
    "repoURL": {type: String, default: "https://github.com"},
    "preview": {type: [Array, String]},
    "previewImage": {type: String, default: 'webshopPro.png'},
    "technologies": {type: Array, default: ["PHP", "JS", "MariaDB", "SQLite", "GIT"]},
    "projectType": {type: String, default: "school"},
    "images": ["",""]
  }
}
</script>

<template>
<!--  <a href="" class="w-full block mb-20 bg-midnightOrange rounded-md">-->
  <a href="" class="w-full block mb-20 hover:scale-[1.02] transition-all ease-in-out group">
    <div class="flex flex-wrap gap-14 md:flex-nowrap">
      <div class="flex-none w-full md:w-56 sm:mb-0">
        <img class="w-full md:h-44 object-cover rounded-md" :src="`src/assets/images/${ previewImage }`" alt="">
      </div>
      <div class="max-w-3xl w-full">
        <a href="#" class="transition-all duration-400	block mt-1 text-lg sm:text-lg leading-tight font-medium text-midnightGray group-hover:text-midnightOrange">{{ title }}</a>
        <p class="mt-3 text-slate-500 text-sm antialiased">{{ description }}</p>
        <div class="mt-2">
          <span v-for="tech in technologies" class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-xs font-medium mt-3 inline-block">{{ tech }}</span>
        </div>
      </div>
    </div>
  </a>
</template>
