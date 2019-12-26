import axios from 'axios'

const service = axios.create({
  baseURL: '/webdiapp', // 测试环境
  timeout: 1000 * 10, // 请求超时的毫秒数,如果请求花费超过timeout的时间,请求将被中断
  // withCredentials: true, /// 表示跨域请求时是否需要使用凭证,默认fasle
  headers: { 'Cache-Control': 'no-cache' } // 不允许缓存，需要重新获取请求
})

service.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

service.interceptors.response.use((response) => {
  if(response.status >= 200 && response.status < 300) {
    let data = response.data
    return data
  }
  return response
}, (error) => {
  return Promise.reject(error)
})

export default service
