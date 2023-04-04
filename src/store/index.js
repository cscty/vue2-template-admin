import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import user from './modules/user'
import side from './modules/side'
const store = new Vuex.Store({
  state: {
    displayMenu: true,
  },
  getters: {
    displayMenu: (state) => state.displayMenu,
  },
  actions: {
    changeDisplayMenu({ commit }, displayMenu) {
      commit('displayMenu', displayMenu)
    },
  },
  mutations: {
    displayMenu(state, displayMenu) {
      state.displayMenu = displayMenu
    },
  },
  modules: {
    user,
    side,
  },
})
export default store
