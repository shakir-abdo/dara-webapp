// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
      backend: process.env.BACKEND,
      domain: process.env.DOMAIN
    }
  },
  nitro: {
    compressPublicAssets: true
  },
  devtools: {
    enabled: true
  },
  vite: {
    resolve: {
      alias: {
        // vue: path.resolve(`./node_modules/vue`)
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          //additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    }
  },
  css: ['@/assets/global.css', '@/assets/icons.css'],
  plugins: ['@/plugins/event-bus.js', '@/plugins/markdownit.js'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@vite-pwa/nuxt'],
  pwa: {
    registerType: 'autoUpdate',
    strategies: 'generateSW',
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      navigateFallback: null
    },
    manifest: {
      lang: 'ar',
      theme_color: '#edf2f7',
      name: '',
      description: ''
    }
  },
  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'charset',
          content: 'utf-8'
        },
        {name: 'description', content: ''}
      ]
    }
  }
})
