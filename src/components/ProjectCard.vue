<script>
export default {
  props: {
    "title": {type: String, default: "Full-Stack Engineer"},
    "description": {type: String, default: "This contains a description"},
    "repoURL": {type: String, default: "https://github.com"},
    "preview": {type: [Array, String]},
    "technologies": {type: Array, default: ["PHP", "JS", "MariaDB", "SQLite", "GIT"]},
    "projectType": {type: String, default: "school"},
    "images": ["",""]
  }
}
</script>

<template>
  <a href="" class="w-full block mb-20">
    <div class="flex flex-wrap gap-14 md:flex-nowrap">
      <div class="flex-none w-full md:w-56 sm:mb-0">
        <img class="w-full object-cover rounded-md" src="../assets/webshopPro.png" alt="">
      </div>
      <div class="max-w-3xl w-full">
        <a href="#" class="block mt-1 text-lg sm:text-lg leading-tight font-medium hover:underline text-midnightGray">{{ title }}</a>
        <p class="mt-3 text-slate-500 text-sm">{{ description }}</p>
        <div class="mt-2">
          <span v-for="tech in technologies" class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-xs font-medium mt-3 inline-block">{{ tech }}</span>
        </div>
      </div>
    </div>
  </a>
</template>
