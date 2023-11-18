// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // Load a google font across all pages
    head: {
      title: 'Nuxt 3 app',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' }
      ]
    }
  },
  devtools: { enabled: true },

  css : [
  '@/scss/main.scss'
],

components : [
  {
    path: '~/components',
    pathPrefix: false
  }
],
modules: [
  
'@nuxtjs/prismic',
'@pinia/nuxt',
'@nuxtjs/storybook'
],

prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT },
runtimeConfig: {
    public: {
      apiUrl: ''
    }
},

vite : {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/scss/foundations/_variables.scss";
        @import "@/scss/foundations/_mixins.scss";
        `
      }
    }
  }
}
})

