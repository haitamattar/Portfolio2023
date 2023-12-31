<script>
export default {
  props: {
    "title": {type: String, default: "Full-Stack Engineer"},
    "description": {type: String, default: "This contains a description"},
    "repoURL": {type: String, default: ""},
    "docPath": {type: String, default: ""},
    "preview": {type: [Array, String]},
    "previewImage": {type: String, default: 'webshopPro.png'},
    "technologies": {type: Array, default: ["PHP", "JS", "MariaDB", "SQLite", "GIT"]},
    "projectType": {type: String, default: "school"},
    "images": ["",""]
  }
}
</script>

<template>
  <a :href="docPath === '' ? repoURL : '/projects/' + title.replace(/\s+/g, '-')" class="w-full block mb-16 hover:scale-[1.02] transition-all ease-in-out group" :class="repoURL === 'NDA' && docPath === '' ? 'pointer-events-none' : ''">
    <div class="flex flex-wrap gap-14 md:flex-nowrap">
      <div class="flex-none w-full md:w-56 sm:mb-0">
        <img class="w-full md:h-44 object-cover rounded-md" :src="`/images/${ previewImage }`" alt="">
      </div>
      <div class="max-w-3xl w-full *:transition-all *:duration-400">
        <p class="block mt-1 text-lg sm:text-lg leading-tight font-medium text-midnightGray group-hover:text-midnightOrange">{{ title }}</p>
        <p class="mt-3 text-slate-500 text-sm">{{ description }}</p>
        <div class="mt-2">
          <span v-for="tech in technologies" class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-xs font-medium mt-3 inline-block select-none">{{ tech }}</span>
        </div>
      </div>
    </div>
  </a>
</template>
