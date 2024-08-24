<template>
  <div class="container mx-auto px-2">
    <h1 class="font-bold text-xl mt-8 text-gray-700">First, upload the file</h1>
    <dropzone />
    <div class="py-5" v-if="file">
      <button @click="submit" class="bg-secondary text-white px-3 py-2 rounded-lg hover:opacity-75 transition-opacity duration-150 z-0 relative">Extract</button>
    </div>
    <div class="mt-12" v-if="questions.length > 0">
      <h1 class="font-bold text-xl text-gray-700">Questions</h1>
      <div class="mt-5">
        <div v-for="(question, index) in questions" :key="index" class="mb-5 bg-white p-3 rounded-lg border">
          <div class="font-bold text-lg text-gray-700">Q: {{ question.question }}</div>
          <div class="text-gray-600">A: {{ question.answer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dropzone from '~/components/dropzone.vue'

export default {
  setup() {
    useSeoMeta({
      title: 'Questions extractor'
    })
    const toast = useToast()
    const runtimeConfig = useRuntimeConfig()
    const { $listen, $event} = useNuxtApp()
    let file = ref(null)
    let questions = ref([])
    const layoutConfig = {
      header: 1,
      footer: 1
    }
    $listen('imageReady', (files) => {
      file.value = files[0]
    })
    const submit = async () => {
      const data = new FormData()
      data.append('file', file.value)
      $event('loader:show')
      const res = await $fetch(`${runtimeConfig.public.backend}/api/qs`, {
        method: 'POST',
        body: data
      }).catch((err) => {
        toast.show({type: 'error', time: 2, title: 'Error', message: 'An error occurred, please try again'})
      })
      if (res) {
        questions.value = res.questions
        file.value = null
        $event('dropzone:flush')
      }
      $event('loader:hide')
    }
    return {
      file,
      questions,
      submit,
      layoutConfig
    }
  },
  components: {
    dropzone
  },
  created() {
    const { header, footer } = this.layoutConfig;
    this.$route.meta.header = header;
    this.$route.meta.footer = footer;
  }
}
</script>
