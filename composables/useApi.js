export const useApi = () => {
    const { $event } = useNuxtApp()
    const loader = useLoader()
    
    const fetchWithColdStartDetection = async (url, options = {}) => {
        let coldStartTimer = null
        let hasShownColdStartMessage = false
        
        // Show loader immediately
        loader.show()
        
        // Set up cold start detection timer (10 seconds)
        coldStartTimer = setTimeout(() => {
            if (!hasShownColdStartMessage) {
                hasShownColdStartMessage = true
                // Show cold start message
                $event('loader:show-cold-start')
            }
        }, 10000)
        
        try {
            const response = await $fetch(url, options)
            
            // Clear timer and hide loader on success
            if (coldStartTimer) {
                clearTimeout(coldStartTimer)
            }
            loader.hide()
            
            return response
        } catch (error) {
            // Clear timer and hide loader on error
            if (coldStartTimer) {
                clearTimeout(coldStartTimer)
            }
            loader.hide()
            
            throw error
        }
    }
    
    return {
        fetch: fetchWithColdStartDetection
    }
}