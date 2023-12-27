
<template>
  <div class="top-0 absolute menu-item" id="about"></div>
<!--  <div class="grid mt-72 lg:grid-cols-2 md:grid-cols-1 mb-52" >-->
  <div class="flex mt-28 sm:mt-72 mb-28 sm:mb-52 gap-14 2xl:gap-28 flex-wrap lg:flex-nowrap" >
    <div class="lg:w-2/5 w-full flex-none">
      <h1 class="sm:text-6xl text-4xl antialiased font-sans text-midnightWhite font-medium max-w-3xl">
        Hey I'm Haitam
      </h1>
      <h2 class="sm:text-1xl antialiased text-sm text-midnightGray max-w-xl xl:max-w-3xl mt-3 font-semibold">
        a full-stack developer who enjoys building applications with a mix of creativity and code.
        In my free time, I like working on games and playing around with 3D modeling in Blender.
        Apart from coding, I also love to travel and hit the gym.
      </h2>
    </div>
    <div class="lg:-mt-28 lg:flex w-full">
      <div
          class="bg-amber-50 aspect-square w-1/2 sm:w-1/3  lg:w-52 lg:h-52 2xl:h-72 2xl:w-72 bg-[url('assets/HaitamPc.JPG')] bg-cover rounded-2xl -rotate-12 relative inline-block z-50 overflow-hidden">
      </div>

      <div class="bg-amber-50 aspect-square w-1/2  -ml-8 sm:w-1/3 lg:-ml-12 lg:w-52 lg:h-52 xl:w-64 xl:h-64 2xl:h-72 2xl:w-72 bg-cover bg-center rounded-2xl rotate-3 relative inline-block z-20 overflow-hidden mt-10">
        <video autoplay loop muted playsinline class="object-cover w-full h-full rounded-2xl rotate-3 transform scale-[1.9]">
          <source src="../assets/IndonesiaDiving.mp4" type="video/mp4">
        </video>
      </div>

      <div
          class="bg-amber-50 hidden sm:inline-block w-1/3 sm:w-1/3 aspect-square -ml-20 lg:-ml-18 lg:w-52 lg:h-52 xl:w-64 xl:h-64  2xl:h-72 2xl:w-72 bg-[url('assets/Vietnam.JPG')] bg-cover bg-center rounded-2xl rotate-12 relative inline-block z-20">
      </div>
    </div>
  </div>
</template>

