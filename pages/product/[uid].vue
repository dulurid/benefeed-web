<script setup>
const route = useRoute()
const { client } = usePrismic()
const { data: product } = await useAsyncData('product', () =>
  client.getByUID('products', route.params.uid)
)
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 pb-16">
    <div class="grid grid-cols-2 gap-4 py-16 place-items-center">
      <div class="flex flex-col">
        <prismic-text
          wrapper="h1"
          class="text-4xl font-bold"
          :field="product.data.title"
        />

        <p class="mt-6 text-xl text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div>
        <div class="flex items-center justify-center">
          <img
            class="h-[350px] w-auto"
            src="/illustrations/business-3d-close-up-of-businesswoman-in-red-suit-with-paper-coffee-cup.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-3xl font-medium tracking-tighter">Sub Products</h3>

      <div class="grid grid-cols-3 gap-8 mt-8">
        <div class="bg-gray-50 p-6 rounded-xl" v-for="index in 3" :key="index">
          <img
            class="h-32 w-auto"
            src="/illustrations/coin-in-hand-1.png"
            alt=""
          />
          <p class="font-semibold text-lg tracking-tight">Sub Product 1</p>
          <p class="leading-tight text-sm text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button
            class="mt-4 border py-2 px-4 rounded-full bg-black text-white text-sm hover:bg-primary-500"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
