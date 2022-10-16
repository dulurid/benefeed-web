import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Benefeed',
      meta: [
        { name: 'description', content: 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!' }
      ],
      link: [
        { rel: 'icon', href: "/favicon.svg" }
      ]
    }
  },
  modules: ['@vueuse/nuxt', '@nuxtjs/prismic', '@nuxtjs/tailwindcss', '@vueuse/motion/nuxt'],
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
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
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    }
  },
  build: {
    transpile: ['swiper', 'swiper/vue']
  }
})
