export const useLoader = () => {
    const {$event} = useNuxtApp()
    return {
        show: () => $event('loader:show'),
        hide: () => $event('loader:hide')
    }
}
