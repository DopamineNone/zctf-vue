import { createPinia } from 'pinia'
import Cookies from 'js-cookie'

const KEY_PREFIX = 'ZCTF_'

// Persist Store Plugin
function persistPlugin(context) {
  console.log('persistPlugin', context)
  if (typeof context.options.persist === 'undefined') return

  // Two options for persist: local and cookie
  switch (context.options.persist) {
    case 'local': {
      // store the data in local storage before page close
      window.onbeforeunload = () => {
        localStorage.setItem(KEY_PREFIX + context.store.$id, JSON.stringify(context.store.$state))
      }

      // retrieve the data from local storage on page load
      context.store.$patch(JSON.parse(localStorage.getItem(KEY_PREFIX + context.store.$id)))
      break
    }

    case 'cookie': {
      // store the data in a cookie before page close
      window.onbeforeunload = () => {
        Cookies.set(
          KEY_PREFIX + context.store.$id,
          JSON.stringify(context.store.$state),
          typeof context.options.config === 'undefined' ? { expires: 1 } : context.options.config
        )
      }

      // retrieve the data from the cookie on page load
      const cookie = Cookies.get(KEY_PREFIX + context.store.$id)
      if (cookie) {
        context.store.$patch(JSON.parse(cookie))
      }
      break
    }
  }
}

const pinia = createPinia()
pinia.use(persistPlugin)

export default pinia
