<template>
  <div class="container mx-auto px-2">
    <h1>Questions extractor</h1>
  </div>
</template>

<script>
export default {
  setup() {
    useSeoMeta({
      title: 'Questions extractor'
    })
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
<style scoped></style>
