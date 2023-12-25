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
  <div class="md:flex md:gap-24 mb-20 md:mb-5">
    <div class="text-left md:shrink-0 hidden md:inline-block">
<!--      <div class="uppercase tracking-wide text-sm text-midnightOrange font-semibold">School</div>-->

      <p class="text-midnightGray block mb-7 text-left mt-10 text-sm tracking-wide uppercase font-medium">{{ formatPeriodDateToMonthYear(period) }}</p>
    </div>
    <div class="transition-all relative md:p-8 rounded-lg overflow-hidden h" :class=" { 'max-h-52': !expand, 'max-h-[1800px]': expand } ">
      <p class="text-3xl antialiased font-sans text-midnightWhite font-medium max-w-3xl md:mb-5">
        {{ role }} @ <a :href="url" target="_blank" class="inline text-midnightOrange">{{ company }}</a>
      </p>
      <p class="mb-5 text-midnightGrayDark text-sm mt-2 md:hidden uppercase">{{ formatPeriodDateToMonthYear(period) }}</p>
      <p class="text-midnightGray">{{ shortDescription }}</p>
        <ul v-if="description" class="list-disc text-midnightGray max-w-3xl list-inside font-light">
          <li v-for="subDesc in description"> {{ subDesc }}</li>
        </ul>
        <div class="mt-5">
        <span v-for="tech in technologies" class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-sm font-light mt-3 inline-block">{{ tech }}</span>
        </div>
        <div v-if="!expand" class="-ml-8 h-24 w-full bg-gradient-to-t from-midnightBlue from-40% absolute bottom-0 z-10"></div>
        <button  v-if="!expand" @click="expand=!expand" class="text-midnightOrange bottom-0 absolute z-20">Read More</button>
    </div>
  </div>
</template>
