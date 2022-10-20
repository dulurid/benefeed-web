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
  <section class="w-full bg-white">
    <div class="py-16 mx-auto max-w-7xl md:px-8">
      <div class="w-full mx-auto text-left md:text-center pb-10">
        <h1 class="text-4xl font-bold" v-motion v-bind="useSlideUpMotion(0)">
          Our Products
        </h1>
        <p
          class="mt-6 text-xl text-gray-600 max-w-4xl mx-auto text-center"
          v-motion
          v-bind="useSlideUpMotion(50)"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div
          v-for="(product, index) in products"
          :key="product.name"
          v-motion
          v-bind="useSlideUpMotion(index * 100)"
          class="flex flex-col items-center justify-center flex-1 overflow-hidden text-center bg-gray-50 md:rounded-xl"
        >
          <div class="flex flex-col px-10 pb-8 pt-8 sm:px-16">
            <h3
              class="leading-none text-gray-600"
              v-motion
              v-bind="useSlideUpMotion(index * 110)"
            >
              Equity Trading
            </h3>
            <p
              v-motion
              v-bind="useSlideUpMotion(index * 115)"
              class="mt-5 text-2xl mb-4 font-semibold leading-none tracking-tighter"
            >
              {{ product.slogan }}
            </p>

            <p
              class="font-light text-gray-600"
              v-motion
              v-bind="useSlideUpMotion(index * 120)"
            >
              Just trade in your eligible computer for credit or recycle it for
              free. It’s good for you and the planet.
            </p>
            <a
              v-motion
              v-bind="useSlideUpMotion(index * 125)"
              href="#_"
              class="bg-gray-900 text-white mt-8 mx-auto inline-block rounded-full px-5 py-1.5"
              >Learn more
            </a>
          </div>
          <img
            class="h-[300px] w-auto"
            :src="product.thumbnail"
            v-motion
            v-bind="useSlideUpMotion(index * 130)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
