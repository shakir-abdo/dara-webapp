<template>
    <div v-if="showLoading" class="fixed w-full top-0 z-50 bottom-0 bg-white flex flex-col justify-center items-center">
        <loader-template />
    </div>
</template>
<script>
import LoaderTemplate from '@/components/LoaderTemplate'
import {computed} from 'vue'
export default {
    props: {
        showLoading: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    setup(props) {
        let showLoading = computed(() => props.showLoading)

            return {
                showLoading
            }
        }
    }
</script>
