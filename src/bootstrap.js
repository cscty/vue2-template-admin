// import('./bootstrap')
import './public-path'

import App from '@/App.vue'
import Vue from 'vue'
import '@/mock/index.js'
import { getUserinfo, getNavData } from './api'
import { formatPerms } from './utils/auth-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.config.devtools = true
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)

let instance = null
let history = null
function render(props = {}) {
  const { container } = props
  instance = new Vue({
    store,
    router,
    render: (h) =>
      h(App, {
        props: {
          // 控制导航栏显隐
          displayMenu: props.displayMenu,
        },
      }),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

export async function bootstrap() {}

export async function mount(props) {
  render(props)
}

export async function unmount() {
  instance.$destroy()
  instance = null
  router = null
  history = null
}
if (!window.__POWERED_BY_QIANKUN__) {
  //主应用运行时，子应用不单独发送请求
  render()

  // 获取用户数据
  getUserinfo().then(
    (resp) => setupApplication(resp),
    ({ data = {} }) => {
      if (parseInt(data.code, 10) === 10001) {
        // logger.error(data.msg || '没有帐号权限，请联系管理员开通')
        return
      }
      // logger.error('/x/admin 登录验证失败，请重新登录')
      window.location.href =
        '//dashboard-mng.bilibili.co/loginPage?caller=www-mng-v2'
    }
  )
  function setupApplication(data) {
    const result = data.data
    if (!result) {
      return
    }
    const perms = formatPerms(result.perms)
    perms.ADMIN = result.admin || false

    store.dispatch('saveUserInfo', {
      perms,
      username: result.username,
      uid: result.uid.toString(),
    })
  }
  // 获取导航栏数据
  getNavData().then(
    ({ data }) => {
      store.dispatch('changeSideData', data.data.sideData)
    },
    (error) => Promise.reject(error)
  )
}

// 模块联邦暴露的data
export default {
  data: {
    a: 1,
    b: 2,
  },
}
