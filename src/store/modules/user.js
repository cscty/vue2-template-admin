const initState = {
  perms: {},
  username: '',
  uid: '',
}

const getters = {
  perms: (state) => state.perms,
  username: (state) => state.username,
  uid: (state) => state.uid,
}

const actions = {
  saveUserInfo({ commit }, userInfo) {
    commit('userInfo', userInfo)
  },
}

const mutations = {
  userInfo(state, { perms, username, uid }) {
    state.perms = perms
    state.username = username
    state.uid = uid
  },
}

export default {
  state: initState,
  getters,
  actions,
  mutations,
}
