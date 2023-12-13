<script>
export default {
  props: {
      title: { type: String, default: 'Full-Stack Engineer'},
      company: { type: String, default: 'H5mag'},
      expand: {type: Boolean, default: false}
  },
}
</script>

<template>
  <div class="md:flex md:gap-32 mb-20 md:mb-5">
    <div class="text-left md:shrink-0 hidden md:inline-block">
      <p class="text-midnightGray block mt-7 mb-7 text-left mt-10 text-l font-medium">SEP 2020 - APR 2023</p>
    </div>
    <div class="transition-all relative md:p-8 rounded-lg overflow-hidden h" :class=" { 'max-h-64': !expand, 'max-h-[1800px]': expand } ">
      <h1 class="text-4xl antialiased font-sans text-midnightWhite font-medium max-w-3xl md:mb-5">
        {{ title }} @ <a href="https://h5mag.com" target="_blank" class="inline text-midnightOrange">{{ company }}</a>
      </h1>
      <p class="mb-5 text-midnightGrayDark text-sm mt-2 md:hidden">SEP 2020 - APR 2023</p>
      <p class="text-midnightGray">Developed a feedback module that empowers users to create custom forms with dynamic questions.</p>
        <ul class="list-disc text-midnightGray max-w-3xl list-inside font-light">
          <li>Built the feature from scratch using PHP, JS, SQLite, and MariaDB, with each form having its own
            SQLite database housing reader-submitted data.</li>
          <li>Created a H5mag Zapier app, allowing users to implement custom actions upon question submissions;
            widely adopted by multiple users.</li>
          <li>Maintained and documented API endpoints for system stability and seamless integration.</li>
          <li>Wrote comprehensive technical documentation for internal use and user onboarding, simplifying the
            adoption process.</li>
          <li>Iteratively improved the module based on real user feedback, ensuring responsiveness to user needs.</li>
          <li>Collaborated with designers and senior engineers to enhance user experience and adhere to established
            code standards.</li>
          <li>Operated in a CI/CD environment for efficient and reliable deployment processes.</li>
          <li>Provided direct customer support, addressing queries and issues promptly.</li>
          <li>Technologies used: PHP, JavaScript, MariaDB, SQLite, Zapier CLI, Node.js, GIT, GitLab, Linux</li>
        </ul>
        <div class="mt-5">
        <span class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-sm font-light mt-3 inline-block">PHP</span>
        <span class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-sm font-light mt-3 inline-block">JS</span>
        <span class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-sm font-light mt-3 inline-block">MariaDB</span>
        <span class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-sm font-light mt-3 inline-block">SQLite</span>
        <span class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-sm font-light mt-3 inline-block">Zapier CLI</span>
        <span class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-sm font-light mt-3 inline-block">Node.JS</span>
        <span class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-sm font-light mt-3 inline-block">GIT</span>
        <span class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-sm font-light mt-3 inline-block">GitLab</span>
        <span class="text-midnightOrange px-3 py-1 rounded-3xl bg-midnightOrangeBlack mr-3 text-sm font-light mt-3 inline-block">Linux</span>
        </div>
        <div v-if="!expand" class="-ml-8 h-24 w-full bg-gradient-to-t from-midnightBlue from-40% absolute bottom-0 z-10"></div>
        <button  v-if="!expand" @click="expand=!expand" class="text-midnightOrange bottom-0 absolute z-20">Read More</button>
    </div>
  </div>
</template>
