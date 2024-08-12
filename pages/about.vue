<template>
  <div class="container mx-auto px-4">
    <!-- Hero Section -->
    <div class="bg-white mx-auto px-2 py-10 text-center">
      <div class="flex justify-center">
        <img src="/dara.png" alt="" class="md:mt-2 lg:mt-20 lg:m-0 w-1/4 md:w-1/6"/>
      </div>
      <h1 class="text-4xl font-bold mt-8">Dara</h1>
      <p class="text-lg mt-4">Some text about our project. This is a short description of the project and its purpose. You can also highlight key features and goals here.</p>
      <button class="bg-[#b9314f] text-white px-4 py-2 mt-6 rounded">
        <a href="#mission">Learn More</a>
      </button>
    </div>

    <!-- Mission & Story Section -->
    <div id="mission" class="grid grid-cols-1 md:grid-cols-2 gap-4 py-20">
      <div class="bg-white p-8 shadow-lg card-gradient relative">
        <h2 class="text-2xl font-bold">Our Mission</h2>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div class="flex justify-center mt-4">
          <img src="public/error-illustration.png" class="w-3/4 h-auto mt-4"/>
        </div>
      </div>
      <div class="bg-white p-8 shadow-lg card-gradient relative">
        <h2 class="text-2xl font-bold">Our Story</h2>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div class="flex justify-center mt-4">
          <img src="public/error-illustration.png" class="w-3/4 h-auto mt-4"/>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="py-20 text-center">
      <h2 class="text-3xl font-bold">The Team</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        <div class="bg-white p-8 shadow-lg card-gradient relative">
          <img src="public/avatar.png" class="rounded-full w-32 h-32 mx-auto"/> <!-- Member image -->
          <h3 class="mt-6 text-xl font-bold">Member 1</h3>
          <p class="mt-4">Description</p>
          <div class="flex justify-center mt-4 space-x-4">
            <a href="https://github.com/member1" target="_blank">
              <img src="public/github.svg" class="w-8 h-8"> <!-- GitHub Icon -->
            </a> 
            <a href="https://x.com/member1" target="_blank">
              <img src="public/x.svg" class="w-8 h-8"> <!-- X Icon -->
            </a>
          </div>
        </div>
        <div class="bg-white p-8 shadow-lg card-gradient relative">
          <img src="public/avatar.png" class="rounded-full w-32 h-32 mx-auto"/> <!-- Member image -->
          <h3 class="mt-6 text-xl font-bold">Member 2</h3>
          <p class="mt-4">Description</p>
          <div class="flex justify-center mt-4 space-x-4">
            <a href="https://github.com/member1" target="_blank">
              <img src="public/github.svg" class="w-8 h-8"> <!-- GitHub Icon -->
            </a> 
            <a href="https://x.com/member1" target="_blank">
              <img src="public/x.svg" class="w-8 h-8"> <!-- X Icon -->
            </a>
          </div>
        </div>
        <div class="bg-white p-8 shadow-lg card-gradient relative">
          <img src="public/avatar.png" class="rounded-full w-32 h-32 mx-auto"/> <!-- Member image -->
          <h3 class="mt-6 text-xl font-bold">Member 3</h3>
          <p class="mt-4">Description</p>
          <div class="flex justify-center mt-4 space-x-4">
            <a href="https://github.com/member1" target="_blank">
              <img src="public/github.svg" class="w-8 h-8"> <!-- GitHub Icon -->
            </a> 
            <a href="https://x.com/member1" target="_blank">
              <img src="public/x.svg" class="w-8 h-8"> <!-- X Icon -->
            </a>
          </div>
        </div>
        <div class="bg-white p-8 shadow-lg card-gradient relative">
          <img src="public/avatar.png" class="rounded-full w-32 h-32 mx-auto"/> <!-- Member image -->
          <h3 class="mt-6 text-xl font-bold">Member 4</h3>
          <p class="mt-4">Description</p>
          <div class="flex justify-center mt-4 space-x-4">
            <a href="https://github.com/member1" target="_blank">
              <img src="public/github.svg" class="w-8 h-8"> <!-- GitHub Icon -->
            </a> 
            <a href="https://x.com/member1" target="_blank">
              <img src="public/x.svg" class="w-8 h-8"> <!-- X Icon -->
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const layoutConfig = {
      header: 1,
      footer: 1
    }

    return {
      layoutConfig
    }
  },
  created() {
    const { header, footer } = this.layoutConfig;
    this.$route.meta.header = header;
    this.$route.meta.footer = footer;
  }
}
</script>

<style scoped>
.card-gradient::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 10px;
  background: linear-gradient(to right, #632a58,#b9314f, #1a1b2f);
  z-index: -1;
  filter: blur(7px);
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
}

.card-gradient:hover::after {
  opacity: 0.9;
}
</style>
