<template>
    <div v-if="showLoading" class="fixed w-full top-0 z-50 bottom-0 bg-[#ffffffbf] flex flex-col justify-center items-center">
        <loader-template />
        <p v-if="showLoadingLable" class="pt-2" dir="rtl">please wait ...</p>
    </div>
</template>
<script>
import LoaderTemplate from '@/components/LoaderTemplate'
import {ref} from 'vue'
export default {
    setup() {
        const { $listen } = useNuxtApp()
        let showLoading =  ref(false)
        let showLoadingLable = ref(true)

        $listen('loader:show', (showLable = true) => {
            showLoading.value = true
            showLoadingLable.value = showLable
        })

        $listen('loader:hide', () => {
            showLoading.value = false
        })

            return {
                showLoading,
                showLoadingLable
            }
    },
    components: {
            LoaderTemplate
        }
    }
</script>
