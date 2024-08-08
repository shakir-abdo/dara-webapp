<template>
  <NuxtLayout>
    <div  class="min-h-screen">
      <div v-if="error?.statusCode === 404">
        <section class="pt-32 pb-36 bg-white overflow-hidden">
          <div class="container px-4 mx-auto">
            <div class="flex flex-wrap -m-8">
              <div class="w-full md:w-1/2 p-8">
                <div class="flex flex-col justify-between h-full">
                  <div class="mb-8">
                    <h2 class="mb-6 text-9xl text-primary font-bold tracking-px-2n leading-none">404</h2>
                    <h3 class="mb-4 text-3xl font-bold font-heading leading-snug">Page not found!</h3>
                    <p class="text-lg text-gray-600 font-medium leading-normal md:max-w-md">The page you are looking for is not found! Try something else or return to the home page.</p>
                  </div>
                  <div>
                    <a  class="inline-flex items-center text-center font-semibold text-primary hover:text-secondary leading-normal cursor-pointer" @click="handleError">
                      <svg class="mr-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66667 12.6667L2 8.00004M2 8.00004L6.66667 3.33337M2 8.00004L14 8.00004" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span>Back to the main page</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 p-8 self-end">
                <img class="mx-auto transform hover:-translate-x-4 transition ease-in-out duration-1000" src="/error-illustration.png" alt="page not found">
              </div>
            </div>
          </div>
        </section>
      </div>
      <div v-else>
        <section class="pt-32 pb-36 bg-white overflow-hidden">
          <div class="container px-4 mx-auto">
            <div class="flex flex-wrap -m-8">
              <div class="w-full md:w-1/2 p-8">
                <div class="flex flex-col justify-between h-full">
                  <div class="mb-8">
                    <h2 class="mb-6 text-9xl text-primary font-bold tracking-px-2n leading-none">500</h2>
                    <h3 class="mb-4 text-3xl font-bold font-heading leading-snug">The server error</h3>
                    <p class="text-lg text-gray-600 font-medium leading-normal md:max-w-md">A problem with the server occurred! Try something else or return to the home page</p>
                  </div>
                  <div>
                    <nuxt-link  class="inline-flex items-center text-center font-semibold text-primary hover:text-scondary leading-normal cursor-pointer" to="/">
                      <svg class="mr-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66667 12.6667L2 8.00004M2 8.00004L6.66667 3.33337M2 8.00004L14 8.00004" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span>Back to the main page</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 p-8 self-end">
                <h2 class="text-9xl md:text-16xl xl:text-17xl text-red-500 text-center font-bold font-heading transform -rotate-3 tracking-px-2n">Oops!</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();
  const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>
<style scoped>
:root {
  --primary: #b9314f;
  --secondary: #632a58;
}
.r {
  fill: var(--secondary-color);
  opacity: 0.29;
}
.a {
  fill: var(--secondary-color);
  opacity: 0.29;
}
</style>
