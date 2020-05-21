import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dailyPot: null,
    superPot: null,
    hourlyPot: null,
  },
  getters: {
    getDailyPot: (state) => state.dailyPot,
    getSuperPot: (state) => state.superPot,
    getHourlyPot: (state) => state.hourlyPot,
  },
  mutations: {
    SET_BIG_DROP(state, val) {
      state.dailyPot = val
    },
    SET_SUPER_DROP(state, val) {
      state.superPot = val
    },
    SET_HOURLY_DROP(state, val) {
      state.hourlyPot = val
    },
  },
  actions: {
    setDailyPot({ commit }, dailyPot) {
      commit('SET_BIG_DROP', dailyPot)
    },
    setSuperPot({ commit }, superPot) {
      commit('SET_SUPER_DROP', superPot)
    },
    setHourlyPot({ commit }, hourlyPot) {
      commit('SET_HOURLY_DROP', hourlyPot)
    },
  },
  modules: {
  }
})
