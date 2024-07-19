import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const accessToken = ref('')
    const refreshToken = ref('')
    const isLoggedIn = computed(() => accessToken.value !== '')

    function resetTokens() {
      accessToken.value = ''
      refreshToken.value = ''
    }

    function setTokens(token, refresh) {
      accessToken.value = token
      refreshToken.value = refresh
    }

    return {
      accessToken,
      refreshToken,
      isLoggedIn,
      resetTokens,
      setTokens
    }
  },
  {
    persist: 'cookie',
    config: {
      expires: 2
    }
  }
)
