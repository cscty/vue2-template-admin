import { http } from './http'
import axios from 'axios'
// export const getNavData = async (params) => {
//   return http.get('/getNavData', params)
// }

// mock请求
export const getNavData = async (params) => {
  return axios.get('/getNavData', params)
}

export const getUserinfo = async (params) => {
  return http.get('/x/admin/manager/auth', params)
}
