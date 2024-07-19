import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'config',
  () => {
    const theme = ref('light')
    const language = ref('en')

    function toggleTheme() {
      if (theme.value === 'light') {
        theme.value = 'dark'
      } else {
        theme.value = 'light'
      }
    }

    return {
      theme,
      language,
      toggleTheme
    }
  },
  {
    persist: 'local'
  }
)
