<template>
    <div v-if="showLoading" class="fixed w-full top-0 z-50 bottom-0 bg-[#ffffffbf] flex flex-col justify-center items-center">
        <loader-template />
        <p v-if="showLoadingLable" class="pt-2">please wait ...</p>
        <div v-if="showColdStartMessage" class="mt-4 max-w-md text-center">
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                    </svg>
                    <div>
                        <p class="text-blue-800 font-medium">Backend is warming up...</p>
                        <p class="text-blue-600 text-sm mt-1">This may take a few more seconds as our servers are starting up. Thank you for your patience!</p>
                    </div>
                </div>
            </div>
        </div>
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
        let showColdStartMessage = ref(false)

        $listen('loader:show', (showLable = true) => {
            showLoading.value = true
            showLoadingLable.value = showLable
            showColdStartMessage.value = false
        })

        $listen('loader:hide', () => {
            showLoading.value = false
            showColdStartMessage.value = false
        })

        $listen('loader:show-cold-start', () => {
            showColdStartMessage.value = true
        })

            return {
                showLoading,
                showLoadingLable,
                showColdStartMessage
            }
    },
    components: {
            LoaderTemplate
        }
    }
</script>
