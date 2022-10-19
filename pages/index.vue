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
      class="bg-gradient-to-b from-green-50/10 via-primary-100/25 to-green-50/10 h-auto pt-8 pb-16"
    >
      <div
        class="container max-w-screen-xl mx-auto px-0 md:px-8 xl:px-4 relative"
      >
        <div
          class="text-center py-12 max-w-2xl md:max-w-3xl mx-auto md:py-16 md:px-0 px-8"
        >
          <h1 class="mb-8">
            Belajar Investasi <br />
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
              href="#"
              title=""
              class="inline-flex items-center justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md hover:bg-primary-700 focus:bg-primary-700"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>

              Learn more
            </a>
          </div>
        </div>

        <!-- Logos Block -->
        <div class="absolute inset-y-16 left-16">
          <div class="relative group hidden lg:flex">
            <div
              class="absolute transitiona-all duration-1000 opacity-25 -inset-px bg-gradient-to-r from-orange-400 via-primary-300 to-primary-600 rounded-xl blur-3xl filter group-hover:opacity-50 group-hover:-inset-1 group-hover:duration-200"
            ></div>
            <img
              class="h-[400px] w-auto z-10"
              src="/illustrations/business-3d-side-view-of-sitting-businesswoman-in-red-suit.png"
              alt=""
            />
          </div>
        </div>
        <div class="absolute inset-y-16 -right-16">
          <div class="relative group hidden lg:flex">
            <div
              class="absolute transitiona-all duration-1000 opacity-25 -inset-px bg-gradient-to-r from-orange-400 via-primary-300 to-primary-600 rounded-xl blur-3xl filter group-hover:opacity-50 group-hover:-inset-1 group-hover:duration-200"
            ></div>
            <img
              class="h-[400px] w-auto z-10"
              src="/illustrations/3d-business-young-women-sitting-with-laptop-on-the-table.png"
              alt=""
            />
          </div>
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
