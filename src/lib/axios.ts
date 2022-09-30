import Axios from 'axios'
import { API_URL } from '@/config'

export const axios = Axios.create({
  baseURL: API_URL,
})

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  res => {
    if (res.data?.bg) {
      res.data.bg = res.data.bg.replace(/^~/, API_URL)
      return res
    } else if (res.data instanceof Array) {
      res.data.forEach(data => {
        data.bg = data.bg.replace(/^~/, API_URL)
      })
      return res
    }
    return res
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)
