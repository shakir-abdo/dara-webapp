<template>
  <div class="container mx-auto px-4">
    <!-- Hero Section -->
    <div class="bg-white pattern mx-auto px-2 py-10 text-center">
      <div class="flex flex-col justify-center items-center">
        <img src="/dara.png" alt="" class="md:mt-2 lg:mt-20 lg:m-0 w-1/4 md:w-1/6"/>
      </div>
      <h1 class="text-4xl font-bold mt-8">Dara</h1>
      <div class="w-full max-w-2xl mx-auto">
        <p class="text-lg mt-4 px-0 diodrum-font">Dara is an innovative educational platform designed to enhance student learning through the power of AI. Featuring two core tools—Summarizer and Question Maker. Dara simplifies and accelerates the study process while providing a seamless, intuitive, and efficient learning experience.</p>
      </div>
      <button class="bg-[#b9314f] text-white px-4 py-2 mt-6 rounded">
        <a href="#mission">Learn More</a>
      </button>
    </div>

    <!-- Mission & Story Section -->
<div id="mission" class="grid grid-cols-1 md:grid-cols-2 gap-4 py-20">
  <!-- Mission Section -->
  <div class="bg-white p-8 shadow-lg card-gradient relative flex flex-col justify-between rounded-lg">
<div>
      <h2 class="text-2xl font-bold">Our Mission</h2>
      <p class="mt-4">At Dara, our mission is to revolutionize education by leveraging the power of artificial intelligence to create smarter, more personalized learning experiences. We are committed to empowering students to achieve their full potential by providing innovative tools that simplify complex topics, enhance understanding, and foster a lifelong love of learning. Through cutting-edge technology and a user-centric approach, we strive to make education accessible, engaging, and effective for learners everywhere.</p>
    </div>
    <div class="flex justify-center mt-4">
      <img src="public/story.jpg" class="w-full h-auto mt-2"/>
    </div>
  </div>

  <!-- Story Section -->
  <div class="bg-white p-8 shadow-lg card-gradient relative flex flex-col justify-between rounded-lg">
    <div>
      <h2 class="text-2xl font-bold">Our Story</h2>
      <p class="mt-4">Dara was born from a simple yet powerful idea: to make learning easier and more accessible for everyone. Our journey began with a group of passionate students who recognized the challenges students face in today’s fast-paced world. We envisioned a platform that could bridge the gap between traditional learning methods and the advanced needs of modern students. With a deep commitment to education and technology, we created Dara—an AI-powered platform designed to transform how students study and interact with knowledge. Our story is one of innovation, perseverance, and a relentless pursuit of excellence in education.</p>
    </div>
    <div class="flex justify-center mt-4">
      <img src="public/mission.jpg" class="w-full h-auto mt-2"/>
    </div>
  </div>
</div>


<!-- Team Section -->
<div id="members" class="py-20 text-center">
  <h2 class="text-3xl font-bold">Who are we</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
    <div class="bg-white p-8 shadow-lg card-gradient relative flex flex-col justify-between rounded-lg" v-for="(member, index) in members" :key="index">
      <div>
        <img :src="member.image" class="rounded-full w-32 h-32 mx-auto"/> <!-- Member image -->
        <h3 class="mt-6 text-xl font-bold">{{ member.name }}</h3>
        <p class="mt-4">{{ member.description }}</p>
      </div>

      <div class="flex justify-center mt-4 space-x-4">
        <a v-for="(links, i) in member.links" :key="i" :href="links.url" target="_blank">
          <img :src="links.icon" class="w-8 h-8"> <!-- Social Icon -->
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
    useSeoMeta({
      title: 'About'
    })
    const layoutConfig = {
      header: 1,
      footer: 1
    }
    const container = ref(null)
    const members = ref([
      {
        name: 'Omar .A',
        image: 'mna2.jpg',
        description: "The bro who is dealing with college, an internship and ALX at the same time. What can I say? I guess I'm Superman.",
        links: [
          { url: 'https://github.com/oovaa', icon: 'github.svg' },
          { url: 'https://x.com/Omarvx211', icon: 'x.svg' }
        ]
      },
      {
        name: 'Ahmed .E',
        image: 'ahmed.jpg',
        description: "A junior software engineer specialized in Backend development. Experienced in JS, TS and Python languages, Node.js, Express.js and Flask frameworks.",
        links: [
          { url: 'https://github.com/ahmedehab0', icon: 'github.svg' },
          { url: 'https://x.com/ahmedeh0000000', icon: 'x.svg' }
        ]
      },
      {
        name: 'Shakir. A',
        image: 'me.jpg',
        description: `A driven, highly motivated, full-stack web developer. in love with Anything JS ♥️.`,
        links: [
          { url: 'https://github.com/shakir-abdo', icon: 'github.svg' },
          { url: 'https://x.com/shakir_abdoo', icon: 'x.svg' }
        ]
      },
      {
        name: 'Esraa .H',
        image: 'sroo.jpeg',
        description: "Your upcoming Front-End developer, designer and software engineer. Stay tuned for more !!",
        links: [
          { url: 'https://github.com/EsraaGD', icon: 'github.svg' },
          { url: 'https://x.com/Sroo22o', icon: 'x.svg' }
        ]
      }
    ]);

    return {layoutConfig, container, members}
  },
    created() {
      const { header, footer } = this.layoutConfig;
      this.$route.meta.header = header;
      this.$route.meta.footer = footer;

  },
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

