import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import user from './modules/user'
import side from './modules/side'
const store = new Vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    user,
    side,
  },
})
export default store
