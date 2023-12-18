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
  <a href="" class="max-w-md block md:max-w-4xl mb-20">
    <div class="flex gap-14">
      <div class="md:shrink-0">
        <img class="h-48 w-full object-cover rounded-md md:w-56" src="../assets/webshopPro.png" alt="">
      </div>
      <div class="">
        <a href="#" class="block mt-1 text-lg leading-tight font-medium hover:underline text-midnightGray">{{ title }}</a>
        <p class="mt-3 text-slate-500">{{ description }}</p>
        <div class="mt-2">
          <span v-for="tech in technologies" class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-sm font-light mt-3 inline-block">{{ tech }}</span>
        </div>
      </div>
    </div>
  </a>
</template>
