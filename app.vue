<template>
  <NuxtLayout class="main flex flex-col items-stretch relative min-h-screen over" v-cloak>
    <nav  v-show="$route.meta.header === 1" dir="ltr" class="w-full flex sticky top-0 justify-between items-center bg-gradient py-3 px-2 mx-auto border-b z-50">
      <nuxt-link to="/">
        <NuxtImg draggable="false" class="w-32 px-3 py-2" alt="Dara logo" src="/logo-black.png" />
      </nuxt-link>
      <div class="flex">
        <nuxt-link to="/about" class="font-bold px-5">About</nuxt-link>
        <div class="font-bold px-5 relative tools-menu-cont">
          <button class="flex items-center justify-center">Tools <span class="flex items-center justify-center"><i class="icon icon-arrow-down"></i></span></button>
          <ul class="font-medium bg-white absolute px-2 py-3 rounded shadow right-0  z-50 text-gray-600 w-40 text-sm">
            <nuxt-link to="/tools/summarize" class="block py-1 hover:bg-gray-200 px-2 transition-colors duration-200 rounded">Summarize</nuxt-link>
            <nuxt-link to="/tools/questions-extractor" class="block py-1 hover:bg-gray-200 px-2 transition-colors duration-200 rounded">Questions extractor</nuxt-link>
            <nuxt-link to="/tools/chat" class="block py-1 hover:bg-gray-200 px-2 transition-colors duration-200 rounded">Chat with Dara</nuxt-link>
          </ul>
        </div>
      </div>
    </nav>
    <div class="relative flex-1 flex flex-col items-stretch">
      <NuxtPage  class="flex-1"/>
    </div>
    <pre-loader  :showLoading="loading"/>
    <loader/>
    <toast/>
    <img class="w-full z-50 relative" src="/waves.svg" alt="">
    <footer  v-show="$route.meta.footer === 1" class="bg-[#1a1b2f] z-50">
      <div class="container mx-auto text-white pb-5 pt-4 px-5 md:px-2">
        <!-- content here -->
        <div class="flex flex-wrap w-full">
          <div class="w-full md:w-1/3 py-4">
            <NuxtImg draggable="false" class="w-32" alt="Dara logo" src="/logo-white.png" />
          </div>
          <div class="w-full md:w-1/3 py-4">
            <h1 class="font-bold">Our tools</h1>
            <ul class="text-sm pt-2">
              <nuxt-link to="/tools/summarize" class="block hover:text-gray-200 transition-colors duration-200 hover:underline">Summarizer</nuxt-link>
              <nuxt-link to="/tools/questions-extractor" class="block hover:text-gray-200 transition-colors duration-200 hover:underline mt-1">Questions extractor</nuxt-link>
            </ul>
          </div>
          <div class="w-full md:w-1/3 py-4">
            <h1 class="font-bold">About</h1>
            <ul class="text-sm pt-2">
              <nuxt-link to="/about" class="block hover:text-gray-200 transition-colors duration-200 hover:underline">Know more about Dara</nuxt-link>
              <nuxt-link to="/about#members" class="block hover:text-gray-200 transition-colors duration-200 hover:underline mt-1">Team members</nuxt-link>
            </ul>
          </div>
        </div>
        <p class="text-left text-sm font-bold text-gray-300 pt-16">Copyright ©  {{((new Date).getFullYear())}} Dara</p>
      </div>
    </footer>

  </NuxtLayout>
</template>
<script>
import Loader from "@/components/Loader"
import PreLoader from "@/components/PreLoader"
import Toast from "@/components/Toast"

export default {
  async setup() {
    const runtimeConfig = useRuntimeConfig()
    useSeoMeta({
      title: 'Dara ai',
      description: 'Dara is an innovative educational platform designed to enhance student learning',
      ogTitle: 'Dara ai',
      ogDescription: 'Dara is an innovative educational platform designed to enhance student learning',
      ogImage: '/logo.png',
      ogUrl: `${runtimeConfig.public.DOMAIN}`,
      twitterTitle: 'Dara ai',
      twitterDescription: '',
      twitterImage: '/logo.png',
      twitterCard: 'summary'
    })

    useHead({
      htmlAttrs: {
        lang: 'ar'
      },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.ico'
      }
    ]
  })
  const nuxtApp = useNuxtApp();
  const loading = ref(true);
  nuxtApp.hook("page:start", () => {
    loading.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });

    return {
      loading
    }
  },
  components: {
    Loader,
    PreLoader,
    Toast
  }
}
</script>
<style>
.tools-menu-cont ul {
    visibility: hidden;
  }
.tools-menu-cont button:hover + ul {
  visibility: visible;
}
.tools-menu-cont ul:hover  {
  visibility: visible;
}

.bg-gradient {
  background: radial-gradient(circle at center, #faf5f1 0%, #faf5f1 -10%, white 90%);}
</style>
