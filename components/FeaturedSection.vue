<script setup>
const target = ref(null)
const targetIsVisible = useElementVisibility(target)
</script>

<template>
  <section class="h-auto bg-white">
    <div class="px-10 pt-24 mx-auto max-w-7xl">
      <div class="w-full mx-auto text-left md:text-center">
        <h1 class="text-4xl font-bold" v-motion v-bind="useSlideUpMotion(0)">
          Investment Performance <br />
          and Watchlist Benefeed VS IHSG
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
    </div>
    <div
      class="overflow-hidden relative component_block bg-gradient-to-b from-white to-gray-50"
    >
      <div
        class="max-w-7xl md:pb-10 -mt-16 flex flex-col w-full h-full items-center justify-center mx-auto"
      >
        <div class="flex items-center h-full w-full rounded-md">
          <div
            class="lg:grid lg:grid-cols-12 lg:gap-8 flex flex-col w-full items-center pt-10 pb-0 md:pb-10 relative"
          >
            <div class="col-span-12">
              <div class="bg-transparent p-2 relative">
                <div
                  class="absolute inset-0 opacity-10 blur-xl animate-pulse"
                  style="
                    background-image: linear-gradient(
                      120deg,
                      #5145cd -0.55%,
                      #37bdf9 22.86%,
                      #37bdf9 48.36%,
                      #17bc9b 73.33%,
                      #17bc9b 99.34%
                    );
                  "
                />
                <div
                  class="bg-white h-[450px] py-10 sm:w-full relative sm:mx-auto sm:rounded-lg sm:overflow-hidden"
                >
                  <div ref="target">
                    <LineCharts v-if="targetIsVisible" />
                  </div>
                </div>
              </div>
            </div>
            <img
              v-motion
              v-bind="useSlideUpMotion(200)"
              src="/illustrations/image_1.png"
              class="absolute bottom-0 translate-y-40 sm:block hidden left-1/2 ml-40 lg:mb-0 -mb-8 lg:-ml-20 transform w-48 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
