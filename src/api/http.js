import axios from 'axios'
let baseURL = '/'
if (location.host.includes('uat-manager')) {
  baseURL = 'http://uat-manager.bilibili.co'
} else if (location.host.includes('manager-pre')) {
  baseURL = 'http://manager-pre.bilibili.co'
} else if (location.host === 'manager.bilibili.co') {
  baseURL = 'http://manager.bilibili.co'
}

const service = axios.create({
  timeout: 5000,
  baseURL,
})
service.interceptors.request.use(
  async (config) => {
    if (config.token) {
      config.headers.Authorization = config.token
      config.headers['Content-Type'] = 'application/json;charset=UTF-8'
      config.headers.Location = `sh;sh001;${
        process.env.NODE_ENV === 'production' ? 'prod' : 'uat'
      }`
    }
    if (config.cookies) {
      config.headers.Cookie = config.cookies
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  async (response) => {
    const { code, message, data } = response.data

    if (code === 0 || message === 'success') {
      return response.data
    } else {
      // 处理业务错误。
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 处理 HTTP 网络错误
    let message = ''
    const status = error.response?.status

    switch (status) {
      case 401:
        message = 'token 失效，请重新登录'
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器故障'
        break
      default:
        message = '网络连接故障'
    }
    return Promise.reject(error)
  }
)
// 导出封装的请求方法

export const http = {
  get(url, config) {
    return service.get(url, config)
  },
  post(url, data, config) {
    return service.post(url, data, config)
  },
  put(url, data, config) {
    return service.put(url, data, config)
  },
  delete(url, config) {
    return service.delete(url, config)
  },
}
