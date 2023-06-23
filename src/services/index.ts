import Request from './require'
import { BASE_URL, TIME_OUT } from './config'
// import qqMusic from 'qq-music-api'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      return config
    },
  },
})

export default request
