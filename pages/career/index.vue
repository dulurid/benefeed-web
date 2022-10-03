<script setup>
const { client } = usePrismic()
const { data } = await useAsyncData('career', () =>
  client.getAllByType('careers')
)
</script>

<template>
  <div>
    <section id="careers-heros" class="max-w-7xl mx-auto px-4 mt-8">
      <div class="grid grid-cols-2 gap-8">
        <div class="flex flex-col items-start justify-center">
          <h1>Lets join to our team</h1>
          <p class="mt-4 max-w-lg">
            Our mission is to be the best local partner for our institutional
            and retail clients. We recognize that the investment industry is
            changing rapidly with technology.
          </p>
        </div>

        <div>
          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-4">
              <div class="h-[150px] w-full bg-gray-50">
                <img
                  class="h-[150px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt=""
                />
              </div>

              <div class="h-[250px] w-full bg-gray-50">
                <img
                  class="h-[250px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                />
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="h-[250px] w-full bg-gray-50">
                <img
                  class="h-[250px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                  alt=""
                />
              </div>

              <div class="h-[150px] w-full bg-gray-50">
                <img
                  class="h-[150px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt=""
                />
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="h-[200px] w-full bg-gray-50">
                <img
                  class="h-[200px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                  alt=""
                />
              </div>

              <div class="h-[200px] w-full bg-gray-50">
                <img
                  class="h-[200px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 mt-16">
      <h2>Available jobs</h2>

      <div class="grid grid-cols-3 gap-8 mt-8">
        <div
          class="rounded-md p-6 bg-gray-50 relative min-h-[200px]"
          v-for="career in data"
          :key="career.id"
        >
          <prismic-text
            wrapper="h3"
            class="font-bold text-xl tracking-tight"
            :field="career.data.position"
          />

          <div class="mt-4">
            <p class="text-sm text-gray-600">123123123</p>
            <p class="text-sm text-gray-600">adadadadad</p>
          </div>

          <div class="absolute top-2 right-2">
            <img
              class="max-h-[180px] w-auto"
              src="/illustrations/career-man-example.png"
              alt=""
            />
          </div>

          <div class="absolute bottom-6 left-6">
            <button
              class="bg-gray-100 rounded-lg px-8 py-2 hover:bg-gray-200 transition duration-300 transform hover:scale-[1.01]"
            >
              Open
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
