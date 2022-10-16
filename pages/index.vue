<script setup>
useHead({
  title: 'Benfeed - Home',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'My amazing site.' }],
  bodyAttrs: {
    class: 'test',
  },
})
</script>

<template>
  <div>
    <section
      class="bg-gradient-to-b from-green-50/10 to-green-100/50 h-auto pt-16 pb-32"
    >
      <div
        class="container max-w-screen-xl mx-auto px-0 md:px-8 xl:px-4 relative"
      >
        <div
          class="text-center py-12 max-w-2xl md:max-w-3xl mx-auto md:py-16 md:px-0 px-8"
        >
          <h1 class="mb-8">
            Belajar <span class="--text-gradient">Investasi</span> dan<br
              class="lg:block hidden"
            />
            Pilihan Saham terbaik
          </h1>

          <p
            class="font-normal text-gray-500 text-base mx-auto max-w-2xl lg:text-lg mb-12 poppins md:text-center text-center"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="#_"
              class="flex items-center sm:w-auto w-full font-medium justify-center gap-2 px-7 py-3 text-gray-700 shadow-sm border rounded-md hover:bg-gray-50 transform hover:scale-[1.01] transition duration-300"
            >
              <span>Learn more</span>
            </a>
          </div>
        </div>

        <!-- Logos Block -->
        <div class="absolute inset-y-32 -left-16">
          <img
            class="h-[350px] w-auto"
            src="https://images.prismic.io/benefeeddulur/e95ba85b-2b6d-482f-a5d6-1b66eb088c9b_hero_image_1.png"
            alt=""
          />
        </div>
        <div class="absolute inset-y-32 -right-16">
          <img
            class="h-[350px] w-auto"
            src="https://images.prismic.io/benefeeddulur/2cee0ba6-cf0e-4982-bdce-9caef8fac329_hero_image_2.png"
            alt=""
          />
        </div>
      </div>
    </section>

    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2
            class="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight"
          >
            Trusted by many companies.
          </h2>
        </div>

        <div
          class="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16"
        >
          <div>
            <img
              class="object-contain w-full h-6 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png"
              alt=""
            />
          </div>

          <div>
            <img
              class="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png"
              alt=""
            />
          </div>

          <div>
            <img
              class="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png"
              alt=""
            />
          </div>

          <div>
            <img
              class="object-contain w-full mx-auto h-7"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png"
              alt=""
            />
          </div>

          <div class="hidden md:block">
            <img
              class="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png"
              alt=""
            />
          </div>

          <div class="hidden md:block">
            <img
              class="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png"
              alt=""
            />
          </div>

          <div class="hidden md:block">
            <img
              class="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png"
              alt=""
            />
          </div>

          <div class="hidden md:block">
            <img
              class="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png"
              alt=""
            />
          </div>

          <div class="hidden md:block">
            <img
              class="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png"
              alt=""
            />
          </div>

          <div class="hidden md:block">
            <img
              class="object-contain w-full mx-auto h-7"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png"
              alt=""
            />
          </div>

          <div class="hidden md:block">
            <img
              class="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png"
              alt=""
            />
          </div>

          <div class="hidden md:block">
            <img
              class="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png"
              alt=""
            />
          </div>
        </div>

        <div class="flex items-center justify-center mt-10 space-x-3 md:hidden">
          <div class="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
        </div>
      </div>
    </section>

    <FeaturedSection />
    <ProductSection />
  </div>
</template>
