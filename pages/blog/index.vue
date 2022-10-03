<template>
  <section class="max-w-screen-xl mx-auto">
    <div class="grid grid-cols-12 gap-6">
      <div
        v-for="index in 6"
        :key="index"
        class="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4"
      >
        <a href="#_" class="relative block w-full h-64 overflow-hidden rounded">
          <img
            class="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
            src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg"
          />
        </a>
        <p class="text-xs font-bold text-gray-400 uppercase">Resources</p>
        <a
          href="#_"
          class="block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900"
          >4 Simple Tips for Leveraging the Power of Social Media</a
        >
      </div>
    </div>
  </section>
</template>
