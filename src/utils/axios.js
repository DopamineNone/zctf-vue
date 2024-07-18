import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000
})

function setAuthorizationHeader(token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

instance.interceptors.request.use((config) => {
  //   console.log(typeof config.headers.Authorization === 'undefined')
  if (typeof config.headers.Authorization === 'undefined') {
    // get jwt token from store
  }
  return config
})

export { instance as axios, setAuthorizationHeader }
