import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000
})

request.interceptors.request.use((config) => {
  //   console.log(typeof config.headers.Authorization === 'undefined')
  if (typeof config.headers.Authorization === 'undefined') {
    // get jwt token from store
  }
  return config
})

export default request
