<script>
export default {
  props: {
    role: {type: String, default: "Full-Stack Engineer"},
    company: {type: String, default: "H5mag"},
    shortDescription: {type: String, default: "Responsible for maintaining a large codebase."},
    description: {type: [Array, String]},
    period: {type: Array, default: [new Date(), new Date()]},
    url: {type: String, default: "https://haitam.io"},
    technologies: {type: Array, default: ["PHP", "JS", "MariaDB", "SQLite", "GIT"]},
    expand: {type: Boolean, default: false}
  },
  methods: {
    formatPeriodDateToMonthYear(period) {
      const formatDate = (date) => {
        if (date instanceof Date) {
          return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
        }
        const timestampDate = new Date(date * 1000);
        return timestampDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });
      };
      return `${formatDate(period[0])} - ${formatDate(period[1])}`;
    },
  }
}
</script>

<template>
  <div class="md:flex gap-14 xl:gap-24 mb-16 xl:mb-5">
    <div class="text-left xl:shrink-0 hidden xl:inline-block">
      <p class="text-midnightGray block mb-7 text-left mt-10 text-sm tracking-wide uppercase font-medium">{{ formatPeriodDateToMonthYear(period) }}</p>
    </div>
    <div class="transition-all relative xl:p-8 rounded-lg max-w-3xl overflow-hidden h" :class=" { 'max-h-52': !expand, 'max-h-[1800px]': expand } ">
      <p class="text-2xl xl:text-3xl antialiased text-slate-200 font-medium max-w-2xl md:mb-5">
        {{ role }} @ <a :href="url" target="_blank" class="inline text-midnightOrange hover:text-midnightDarkOrange transition-colors duration-600">{{ company }}</a>
      </p>
      <p class="mb-5 text-slate-600 font-bold text-sm mt-2 xl:hidden uppercase">{{ formatPeriodDateToMonthYear(period) }}</p>
      <p class="text-midnightGray text-sm w-full font-semibold pr-6">{{ shortDescription }}</p>
        <ul v-if="description" class="list-disc text-slate-400 w-full font-medium leading-normal text-sm list-outside px-6 mt-2">
          <li v-for="subDesc in description" class="mb-1"> {{ subDesc }}</li>
        </ul>
        <div class="mt-5">
        <span v-for="tech in technologies" class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-xs font-medium mt-3 select-none inline-block">{{ tech }}</span>
        </div>
        <div v-if="!expand" class="h-24 w-full bg-gradient-to-t from-midnightBlue from-40% absolute bottom-0 z-10"></div>
        <button  v-if="!expand" @click="expand=!expand" class="text-midnightOrange -bottom-1 absolute z-20 font-semibold group text-base hover:text-midnightDarkOrange">Read More <i class="text-lg translate-y-[1px] transition-all ease-in-out inline-block group-hover:translate-y-[4px] bi bi-arrow-down-short"></i></button>
    </div>
  </div>
</template>
