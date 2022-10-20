<script setup>
// const { client } = usePrismic()
// const { data } = await useAsyncData('blogs', () => client.getAllByType('blogs'))

const blogs = [
  {
    id: 1,
    title: 'Embracing Emojis: Why Chat is Your Event Heartbeat',
    thumbnail: 'https://doimages.nyc3.digitaloceanspaces.com/Blog-pattern7.jpg',
  },
  {
    id: 2,
    title: 'Embracing Emojis: Why Chat is Your Event Heartbeat',
    thumbnail: 'https://doimages.nyc3.digitaloceanspaces.com/Blog-pattern8.jpg',
  },
  {
    id: 3,
    title: 'Embracing Emojis: Why Chat is Your Event Heartbeat',
    thumbnail: 'https://doimages.nyc3.digitaloceanspaces.com/Blog-pattern9.jpg',
  },
  {
    id: 4,
    title: 'Embracing Emojis: Why Chat is Your Event Heartbeat',
    thumbnail: 'https://doimages.nyc3.digitaloceanspaces.com/Blog-pattern4.jpg',
  },
  {
    id: 5,
    title: 'Embracing Emojis: Why Chat is Your Event Heartbeat',
    thumbnail: 'https://doimages.nyc3.digitaloceanspaces.com/Blog-pattern5.jpg',
  },
  {
    id: 6,
    title: 'Embracing Emojis: Why Chat is Your Event Heartbeat',
    thumbnail: 'https://doimages.nyc3.digitaloceanspaces.com/Blog-pattern6.jpg',
  },
]
</script>

<template>
  <section class="py-10 bg-white">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-2xl mx-auto text-center">
        <h2
          v-motion
          v-bind="useSlideUpMotion(0)"
          class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
        >
          Latest from blog
        </h2>
        <p
          v-motion
          v-bind="useSlideUpMotion(50)"
          class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis.
        </p>
      </div>

      <div class="max-w-7xl mx-auto px-6 py-10 md:px-12 xl:px-6">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            href="/blog/detail"
            v-for="(blog, index) in blogs"
            :key="blog.id"
            class="group p-6 cursor-pointer rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
            v-motion
            v-bind="useSlideUpMotion(index * 50)"
          >
            <div
              class="relative overflow-hidden rounded-xl"
              v-motion
              v-bind="useSlideUpMotion(index * 75)"
            >
              <img
                :src="blog.thumbnail"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div class="mt-6 relative">
              <h3
                class="text-2xl font-semibold tracking-tight text-gray-800 dark:text-white"
              >
                {{ blog.title }}
              </h3>
              <p
                class="mt-6 mb-8 text-gray-600 dark:text-gray-300 line-clamp-2"
              >
                Slow application build times not only decelerate innovation but
                also affect developer productivity in more ways than one.
              </p>
              <a class="inline-block" href="#">
                <span class="text-blue-600 dark:text-blue-300">Read more</span>
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
