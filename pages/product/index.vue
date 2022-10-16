<script setup>
const { client } = usePrismic()
const { data: products } = await useAsyncData('products', () =>
  client.getAllByType('products')
)

console.log(products)
</script>

<template>
  <section
    id="page-products"
    class="w-full bg-white py-10 mx-auto max-w-7xl md:px-8"
  >
    <h1 class="mb-8">Our Products</h1>
    <div class="grid grid-cols-2 gap-8">
      <div
        v-for="product in products"
        :key="product.id"
        class="flex flex-col items-center justify-center flex-1 overflow-hidden text-center bg-gray-50 md:rounded-xl"
      >
        <div class="flex flex-col px-10 pb-8 pt-8 sm:px-16">
          <h3 class="text-xl leading-none">Caption</h3>

          <prismic-text
            wrapper="h4"
            class="mt-5 text-3xl mb-4 font-semibold leading-none tracking-tighter md:text-4xl"
            :field="product.data.title"
          />

          <prismic-text
            wrapper="p"
            class="font-light text-gray-600"
            :field="product.data.caption"
          />

          <a
            :href="`/product/${product.uid}`"
            class="bg-primary-500 text-white mt-8 mx-auto inline-block rounded-full px-5 py-1.5"
          >
            Learn more
          </a>
        </div>
        <img
          class="h-[350px] w-auto"
          src="https://images.prismic.io/benefeeddulur/d21f8c2f-cca3-4025-9734-bebbba6e7b41_Become+a+trading+partner.png"
        />
      </div>
    </div>
  </section>
</template>
