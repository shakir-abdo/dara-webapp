<template>
    <div  v-if="showToast" class="fixed z-100 toast bg-white w-full shadow md:max-w-sm m-1 border p-2 rounded-lg" :class="`${type} ${positon}`">
        <h1 class="font-bold toast-title">{{ toastTitle }}</h1>
        <p class="toast-body">{{ toastBody }}</p>
    </div>
</template>
<script>
export default {
    setup() {
        const { $listen } = useNuxtApp()
        let type = ref('success')
        let positon = ref('tr')
        let toastTitle = ref("")
        let toastBody = ref("")
        let showToast = ref(false)
        $listen('toast', (opts) => {
            const options = Object.assign({ type: 'info', position: 'tl', time: 2 }, opts)
            const { type: toastType, position: toastPosition, time, title, message } = options

            type.value = 'info'
            positon.value = 'tl'
            toastTitle.value = title || 'alert'

            if (!message) return;

            if (['info', 'success', 'error'].includes(toastType)) {
                type.value = toastType
            }
            if (['tl', 'tc', 'tr', 'bl', 'bc'].includes(toastPosition)) {
              positon.value = toastPosition
            }
            toastTitle.value = title
            toastBody.value = message
            showToast.value = true

            setTimeout(() => { showToast.value = false }, time * 1000)
        })
        return {
            showToast,
            toastTitle,
            toastBody,
            type,
            positon
        }
    }
}
</script>
<style>
@keyframes fadeInT2b {
    from {
        @apply -top-40 opacity-0
    }
    to {
        @apply top-0 opacity-100
    }
}
@keyframes fadeInB2t {
    from {
        @apply -bottom-40 opacity-0
    }
    to {
        @apply bottom-0 opacity-100
    }
}
@keyframes fadeInL2r {
    from {
        @apply -left-40 opacity-0
    }
    to {
        @apply left-0 opacity-100
    }
}
@keyframes fadeInR2l {
    from {
        @apply -right-40 opacity-0
    }
    to {
        @apply right-0 opacity-100
    }
}
.info {
    @apply border-gray-400;
}
.info .toast-title {
    @apply text-gray-600;
}
.info .toast-body {
    @apply text-gray-500;
}
.success {
    @apply border-green-400 bg-green-100;
}
.success .toast-title {
    @apply text-green-600;
}
.success .toast-body {
    @apply text-green-500;
}
.error {
    @apply border-red-400 bg-red-100;
}
.error .toast-title {
    @apply text-red-600;
}
.error .toast-body {
    @apply text-red-500;
}
.tl {
    animation: fadeInL2r 0.3s ease-in;
    @apply top-0 left-0;
}
.tr {
    animation: fadeInR2l 0.3s ease-in;
    @apply top-0 right-0;
}
.bl {
    animation: fadeInL2r 0.3s ease-in;
    @apply bottom-0 left-0;
}
.br {
    animation: fadeInR2l 0.3s ease-in;
    @apply bottom-0 right-0;
}
.tc {
    transform: translateX(calc(-50%));
    animation: fadeInT2b 0.3s ease-in;
    @apply top-0 left-1/2;
}
.bc {
    transform: translateX(calc(-50%));
    animation: fadeInB2t 0.3s ease-in;
    @apply bottom-0 left-1/2;
}
</style>
