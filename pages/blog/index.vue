<script setup>
const { client } = usePrismic()
const { data } = await useAsyncData('blogs', () => client.getAllByType('blogs'))
</script>

<template>
  <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-2xl mx-auto text-center">
        <h2
          class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
        >
          Latest from blog
        </h2>
        <p
          class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis.
        </p>
      </div>

      <div
        class="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12"
      >
        <a :href="`/blog/${blog.uid}`" v-for="blog in data" :key="blog.id">
          <div class="block aspect-w-4 aspect-h-3">
            <img
              class="object-cover w-full h-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg"
              alt=""
            />
          </div>
          <prismic-text
            wrapper="p"
            :field="blog.data.blogtitle"
            class="mt-6 text-xl font-semibold"
          />
          <prismic-text
            wrapper="p"
            :field="blog.data.content"
            class="mt-4 text-gray-600 line-clamp-2"
          />
          <div
            class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"
          ></div>
          <span
            class="block text-sm font-bold tracking-widest text-gray-500 uppercase"
          >
            Martin Jones . June 12, 2021
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
