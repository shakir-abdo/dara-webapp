<template>
    <div v-if="image" class="modal fixed inset-0 bg-gray-200 flex justify-center items-center">
      <div class="w-1/2 lg:w-1/4" dir="rtl">
        <h3 class="text-center text-lg font-bold text-gray-700 mb-4">please wait ...</h3>
        <div class=" w-full p-2 relative bg-white shadow-2xl overflow-hidden">
          <div class="scanner absolute h-8 top-0 right-0 left-0"></div>
          <img  class="w-full" :src="convertImage(image)" alt>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    props: {
        showLoading: {
            type: Boolean,
            default() {
                return false
            }
        },
        image: {
            default() {
                return undefined
            }
        }
    },
    setup(props) {
        const convertImage = (img) => URL.createObjectURL(img)
        let showLoading = computed(() => props.showLoading)
        let image = computed(() => props.image)

            return {
                showLoading,
                image,
                convertImage
            }
        }
}
</script>
<style scoped>
.scanner {
  animation: scanner-motion 2s ease-in-out 0s infinite both;
  background: linear-gradient(#6effa97a -55%, #ffffff 100%);
}
@keyframes scanner-motion {
  0% {
    top: 0;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 0;
  }
}
</style>
