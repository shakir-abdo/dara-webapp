<template>
  <div  :key="$route.path" class="hero">
    <div class="flex justify-between flex-wrap container mx-auto px-8 flex-col-reverse md:flex-row mb-48">
      <div class="w-full md:w-1/2 px-3">
        <div class="pt-12 md:pt-32">
          <h1 class="text-3xl md:text-5xl font-bold pb-7">Dara, Elevate Your Learning ! </h1>
          <p>Dara is an innovative educational platform designed to enhance student learning through the power of AI. Featuring two core tools—Summarizer and Question Maker. Dara simplifies and accelerates the study process while providing a seamless, intuitive, and efficient learning experience.</p>
          <nuxt-link to="/#tools" class="bg-[#b9314f] text-white px-3 py-2 inline-block mt-5 rounded-xl"> Try now!</nuxt-link>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-12 md:px-3 mt-12 md:mt-0">
        <div class="art-cont bg-white flex items-center justify-center md:mt-24 lg:mt-20 lg:m-20">
          <img src="/dara.png" alt="" />
        </div>
      </div>
    </div>
    <div class="pb-48">
      <h1 class="text-4xl font-bold text-center" id="tools">Our tools</h1>
      <div class="container mx-auto flex flex-wrap justify-start pb-5 pt-5 z-50 relative">
        <div class="wrapper p-4 w-full md:w-1/2 lg:w-1/3" v-for="(item, i) in tools" :key="i">
          <div class="overflow-hidden p-7 glass-card shadow-lg relative draw-border border draw-border-el h-full">
            <div class="flex flex-col justify-around h-full">
              <div>
                <div class="flex justify-between items-center z-20 relative">
                  <h3 class="font-bold text-gray-800">{{ item.name }}</h3>
                  <div class="w-10 h-10 flex justify-center items-center rounded-full" :style="`background-color:${item.tint};color:${item.color}`">
                    <i v-if="item.icon.startsWith('<svg')" class="icon icon-lg fill-current" v-html="item.icon"></i>
                    <i v-else class="icon icon-lg" :class="`icon-${item.icon}`"></i>
                  </div>
                </div>
                <div class="relative z-20">
                  <p>{{ item.description }}</p>
                </div>
              </div>
              <div class="z-20 relative w-full mt-4">
                <nuxt-link :to="item.path" class="hover:bg-black hover:text-white hover:border-black transition-all duration-150 bg-white border-2 border-gray-700 font-bold text-sm text-gray-800 px-2 py-2 rounded-lg">Try now</nuxt-link>
              </div>
            </div>
            <div class="absolute inset-0">
              <div class="tool-overlay absolute inset-0 z-10"></div>
              <img class="absolute opacity-25 bottom-0 w-4/12 pb-5 right-0 z-0 fill-current rotate-180" :src="`/dots.svg`" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import gsap from 'gsap'
export default {
  setup() {
    const layoutConfig = {
      header: 1,
      footer: 1
    }
    const container = ref(null)
    const tools = ref([
      {
        name: 'Summarizer',
        icon: 'collapse',
        color: '#b9314f',
        tint: '#f7e0e5',
        description: "This tool helps to condense long texts into concise summaries. Ideal for quickly understanding the main points.",
        path: '/tools/summarize'
      },
      {
        name: 'Questions extractor',
        icon: `question-mark`,
        color: '#b9314f',
        tint: '#f7e0e5',
        description: "Generate questions from any text to test your understanding or to prepare for exams.",
        path: '/tools/questions-extractor'
      },
/*       {
        name: 'Questions answerer',
        icon: `done-all`,
        color: '#b9314f',
        tint: '#f7e0e5',
        description: "Ask any question related to the text, and this tool will provide you with accurate answers.",
        path: '/tools/questions-answerer'
      } */
    ])
    const testAnim = () => {
      //const logoT = new gsap.timeline()
    }
    return {layoutConfig, container, testAnim, tools}
  },
    created() {
      const { header, footer } = this.layoutConfig;
      this.$route.meta.header = header;
      this.$route.meta.footer = footer;

  },
  mounted() {
    this.testAnim()
  }
}
</script>
<style scoped>
.hero {
  /* background: linear-gradient(45deg ,#b2bbe0, #e7cebd); */
  background:#e7cebd;
  background: radial-gradient(circle, #e7cebd00 0%, #e7cebd3f 35%, rgba(0, 212, 255, 0) 100%);
  margin-bottom: -100px;
  z-index: 1;
}
.art-cont {
  transform: scale(0.8);
  border-radius: 7rem;
  cursor: pointer;
  position: relative;
  transition: all 0.7s ease-in-out;
}
.art-cont img {
  transition: all 0.7s ease-in-out;
}
.art-cont:hover {
  transform: rotate(45deg);
}
.art-cont:hover > img {
  transform: rotate(-45deg);
}
.glass-card {
background: rgba(255, 255, 255, 0.31);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6px);
-webkit-backdrop-filter: blur(6px);
}
.draw-border {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  position: relative;
}
.draw-border::before, .draw-border::after {
  border: 0 solid #FFCC70;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  position: absolute;
  z-index: 20;
  border-radius: 16px !important;
  overflow: hidden;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
}
.draw-border::before {
  border-bottom-width: 4px;
  border-left-width: 4px;
}
.draw-border::after {
  border-top-width: 4px;
  border-right-width: 4px;
}

.draw-border:hover::before, .draw-border:hover::after {
  border-color: #C850C0;
  overflow: hidden;
  border-radius: 16px !important;
  transition: border-color 1s, width 0.25s, height 0.25s;
  width: 100%;
  height: 100%;
}
.draw-border:hover::before {
  transition-delay: 0s, 0s, 0.25s;
}
.draw-border:hover::after {
  transition-delay: 0s, 0.25s, 0s;
}
.tool-overlay {
    background: linear-gradient(45deg, transparent 10%, #fff);
}
</style>
