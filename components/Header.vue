<script setup>
const products = [
  {
    name: 'Equity Trading',
    slogan: 'Become a trading partner',
    caption:
      'Just trade in your eligible computer for credit or recycle it for free. It’s good for you and the planet.',
    thumbnail: '/illustrations/business-3d-young-women-standing.png',
  },
  {
    name: 'Fixed Income',
    slogan: 'Better understand fixed income',
    caption:
      'Just trade in your eligible computer for credit or recycle it for free. It’s good for you and the planet.',
    thumbnail: '/illustrations/image_3.png',
  },
  {
    name: 'Research',
    slogan: 'Maximizing added value',
    caption:
      'Just trade in your eligible computer for credit or recycle it for free. It’s good for you and the planet.',
    thumbnail:
      '/illustrations/business-3d-businesswoman-in-red-suit-with-paper-coffee-cup.png',
  },
  {
    name: 'Investment Banking',
    slogan: 'Achieve short & long term goals',
    caption:
      'Just trade in your eligible computer for credit or recycle it for free. It’s good for you and the planet.',
    thumbnail:
      '/illustrations/business-3d-businesswoman-in-red-suit-showing-thumbs-up.png',
  },
]
</script>

<template>
  <header
    class="container max-w-screen-xl mx-auto px-0 md:px-8 xl:px-4 bg-white"
  >
    <nav id="nav" class="flex justify-between items-center h-24">
      <div>
        <Logo class="h-8 w-auto" />
      </div>

      <div>
        <ul
          id="menu"
          class="bg-white md:flex border-t border-gray-100 md:border-t-0 flex-row gap-x-8 ml-0"
        >
          <li
            class="h-16 md:px-0 px-6 border-b border-gray-100 md:border-b-0 md:h-full"
          >
            <NuxtLink
              to="/"
              class="font-medium h-full flex items-center text-gray-600 text-base hover:text-gray-800 transition duration-300"
            >
              Home
            </NuxtLink>
          </li>
          <li
            class="relative border-b md:border-b-0 border-gray-100 group z-30 flex md:flex-row flex-col items-start md:items-center h-full"
          >
            <NuxtLink
              to="/product"
              class="h-16 md:h-full md:px-0 md:w-auto w-full px-6 flex items-center gap-1 font-medium text-gray-600 text-base hover:text-gray-800 transition duration-300"
            >
              <span class="">Product</span>
              <svg
                class="w-5 h-5 group-hover:-rotate-180 ease-out duration-300 transition-all"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </NuxtLink>
            <div
              class="w-full space-y-3 md:block hidden group-hover:block invisible group-hover:visible opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all ease-out shadow-sm duration-300 border-b md:fixed top-0 md:mt-24 left-0 bg-white"
            >
              <ul
                class="max-w-7xl mx-auto flex gap-4 mb-4 pt-4 md:flex-row flex-col md:px-4 justify-between"
              >
                <li
                  v-for="product in products"
                  :key="product.name"
                  class="w-full md:w-1/4"
                >
                  <a
                    href="/product/detail"
                    class="relative hover:bg-primary-50 bg-gray-50/50 rounded-lg block p-6 lg:p-7 lg:py-10 transition duration-300"
                  >
                    <div>
                      <h3 class="text-lg font-bold mb-2">{{ product.name }}</h3>
                      <p class="text-xs max-w-[200px] text-gray-500">
                        The product for makers.
                      </p>
                    </div>

                    <div class="absolute bottom-0 right-0">
                      <img
                        class="h-[150px] w-auto"
                        :src="product.thumbnail"
                        alt=""
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li
            class="h-16 md:px-0 px-6 border-b border-gray-100 md:border-b-0 md:h-full"
          >
            <NuxtLink
              to="/career"
              class="font-medium h-full flex items-center text-gray-600 text-base hover:text-gray-800 transition duration-300"
            >
              Career
            </NuxtLink>
          </li>
          <li
            class="h-16 md:px-0 px-6 border-b border-gray-100 md:border-b-0 md:h-full"
          >
            <NuxtLink
              to="/blog"
              class="font-medium h-full flex items-center text-gray-600 text-base hover:text-gray-800 transition duration-300"
            >
              Blog
            </NuxtLink>
          </li>
          <li
            class="h-16 md:px-0 px-6 border-b border-gray-100 md:border-b-0 md:h-full"
          >
            <NuxtLink
              to="/about"
              class="font-medium h-full flex items-center text-gray-600 text-base hover:text-gray-800 transition duration-300"
            >
              About
            </NuxtLink>
          </li>

          <a
            href="#_"
            class="block md:hidden px-5 py-3 font-medium bg-primary-600 text-white text-base text-center"
            >Online Registration</a
          >
        </ul>
      </div>

      <div>
        <a
          href="#"
          title=""
          class="inline-flex items-center justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md hover:bg-primary-700 focus:bg-primary-700"
          role="button"
        >
          Online Registration

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 ml-2"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
