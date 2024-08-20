<template>
  <div class="overflow-hidden">
    <processing v-if="processing" class="z-50" :image="file" />
    <div class="container mx-auto px-4">
      <div class="bg-gray-100 p-4 rounded-lg mt-8 border">
        <h1 class="font-bold text-2xl">Summarizer</h1>
        <p class="text-gray-700 mt-2">This tool receives a PDF file, extracts texts from it, then summarizes it and extracts the important notes.</p>
      </div>
      <h1 class="font-bold text-xl mt-8 text-gray-700">First, upload the file</h1>
      <dropzone />
      <div class="py-5" v-if="file">
        <button @click="submit" class="bg-secondary text-white px-3 py-2 rounded-lg hover:opacity-75 transition-opacity duration-150 z-0 relative">Summarize</button>
      </div>
      <div class="mt-12" v-if="markdown" dir="rtl">
        <h1 class="font-bold text-xl text-gray-700">Summary</h1>
        <div class="bg-gray-100 p-2 rounded-lg mt-4 border">
          <div class="markdown-body prose max-w-full prose-slate px-7 py-4 w-full" v-html="mdit.render(markdown)"></div>
        </div>
        <button @click="saveSummaryAsImage" class="bg-secondary text-white mt-4 px-3 py-2 rounded-lg hover:opacity-75 transition-opacity duration-150 text-sm">Save summary as Image</button>
        <div dir="rtl" class="bg-[#ecf0f1] p-5 rounded-lg mt-4 border summary-card max-w-lg" ref="summaryResult">
          <div class="bg-white rounded-lg overflow-hidden shadow-lg">
            <div class="markdown-body bg-white prose max-w-full prose-slate px-7 py-4 w-full" v-html="mdit.render(markdown)"></div>
          </div>
          <p class="text-sm font-bold text-gray-700 text-center py-1 rounded-lg mt-3">Dara AI</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from 'vue'
import dropzone from '~/components/dropzone.vue'
import Processing from '~/components/Processing.vue'
import html2canvas from 'html2canvas'
export default {
  setup() {
    useSeoMeta({
      title: 'Summarizer'
    })
    const {$mdit: mdit, $listen, $event} = useNuxtApp()
    const toast = useToast()
    const runtimeConfig = useRuntimeConfig()
    const layoutConfig = {
      header: 1,
      footer: 1
    }
    let file = ref(null)
    let markdown = ref(``)
    let summaryResult = ref(null)
    let processing = ref(false)
    $listen('imageReady', (files) => {
      //console.log(files)
      file.value = files[0]
    })
    const submit = async () => {
      const data = new FormData()
      data.append('uri', file.value)
      processing.value = true
      const res = await $fetch(`${runtimeConfig.public.backend}/tools/summarize`, {
        method: 'POST',
        body: data
      }).catch((err) => {
        toast.show({type: 'error', time: 2, title: 'Error', message: 'An error occurred, please try again'})
      })
      if (res) {
        markdown.value = `${res.markdown}`
        file.value = null
        $event('dropzone:flush')
      }
      processing.value = false
    }
    const saveSummaryAsImage = async () => {
      const printCanvas = await html2canvas(summaryResult._value, {
        type: 'dataURL'
      })
      const link = document.createElement('a')
      link.setAttribute('download', 'summary.png')
      link.setAttribute('href', printCanvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
      link.click()
    }
    return {
      file,
      markdown,
      mdit,
      summaryResult,
      processing,
      saveSummaryAsImage,
      layoutConfig,
      submit
    }
  },
  components: {
    dropzone,
    Processing
  },
  created() {
      const { header, footer } = this.layoutConfig;
      this.$route.meta.header = header;
      this.$route.meta.footer = footer;
  }
}
</script>
<style scoped>
.summary-card {
  position: relative;
  right: -999999px;
}
</style>
