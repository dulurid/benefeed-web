import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxtjs/prismic', '@nuxtjs/tailwindcss', '@vueuse/motion/nuxt'],
  prismic: {
    endpoint: 'https://benefeeddulur.prismic.io/api/v2',
    linkResolver: "~/prismicLinkResolver.js",
  },
  motions: {
    directives: {
      'pop-bottom': {
        initial: {
          scale: 0,
          opacity: 0,
          y: 100
        },
        visible: {
          scale: 1,
          opacity: 1,
          y: 0
        },
      }
    }
  },
  build: {
    transpile: ['swiper', 'swiper/vue']
  }
})
