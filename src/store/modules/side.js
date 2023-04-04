const initState = {
  sideData: [],
}

const getters = {
  sideData: (state) => state.sideData,
}

const actions = {
  changeSideData({ commit }, sideData) {
    commit('sideData', sideData)
  },
}

const mutations = {
  sideData(state, sideData) {
    state.sideData = sideData
  },
}

export default {
  state: initState,
  getters,
  actions,
  mutations,
}
