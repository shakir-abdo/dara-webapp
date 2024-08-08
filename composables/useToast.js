export const useToast = () => {
    const {$event} = useNuxtApp()
    return {
      show: (options) => $event('toast', options)
    }
}
