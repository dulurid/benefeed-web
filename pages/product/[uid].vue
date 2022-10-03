<script setup>
const route = useRoute()
const { client } = usePrismic()
const { data: product } = await useAsyncData('product', () =>
  client.getByUID('products', route.params.uid)
)
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div class="h-screen">
      {{ product }}
    </div>
  </div>
</template>
