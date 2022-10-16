<script setup>
const { client } = usePrismic()
const { data } = await useAsyncData('career', () =>
  client.getAllByType('careers')
)
</script>

<template>
  <div>
    <section
      class="py-10 bg-gradient-to-b from-orange-50/10 to-orange-100/50 sm:py-16 lg:py-24"
    >
      <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
          <div class="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
            <img
              class="absolute top-6 -right-4 xl:-right-12"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/features/3/dots-pattern.svg"
              alt=""
            />

            <div class="relative max-w-xs ml-auto">
              <div class="overflow-hidden aspect-w-3 aspect-h-4">
                <img
                  class="object-cover w-full h-full scale-150"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/3/man-woman-discussing.jpg"
                  alt=""
                />
              </div>

              <div class="absolute bottom-0 -left-16">
                <div class="bg-yellow-300">
                  <div class="py-4 pl-4 pr-10 sm:py-6 sm:pl-8 sm:pr-16">
                    <svg
                      class="w-9 sm:w-14 h-9 sm:h-14"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFF"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span
                      class="block mt-3 text-xl font-bold text-black sm:mt-6 sm:text-4xl lg:text-5xl"
                    >
                      2,984
                    </span>
                    <span
                      class="block mt-2 text-sm font-medium leading-snug text-amber-900 sm:text-base"
                    >
                      Customer chat<br />served on July
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="md:order-1">
            <h2
              class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
            >
              Grow business with Celebration.
            </h2>
            <p class="mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <a
              href="#"
              title=""
              class="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-gray-600 rounded-md hover:bg-gray-700 focus:bg-gray-700"
              role="button"
            >
              Find positions
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
          <h2
            class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl"
          >
            Our Available Positions
          </h2>
        </div>

        <ul class="grid divide-y mt-8">
          <li v-for="career in data" :key="career.id" class="py-4">
            <div class="flex items-center justify-between">
              <div>
                <h4
                  class="font-semibold text-primary-600 hover:underline cursor-pointer"
                >
                  {{ career.data?.position[0]?.text }}
                </h4>
                <p class="text-sm text-gray-600">Surabaya | Full time</p>
              </div>

              <div>
                <button class="text-blue-600">Apply now</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
