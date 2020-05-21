import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bigDrop: null,
    mediumDrops: [],
  },
  getters: {
    getBigDrop: (state) => state.bigDrop,
    getMediumDrops: (state) => state.mediumDrops,
  },
  mutations: {
    SET_BIG_DROP(state, val) {
      state.bigDrop = val
    },
    ADD_MED_DROP(state, val) {
      state.mediumDrops.push(val)
    }
  },
  actions: {
    setBigDrop({ commit }, bigDrop) {
      commit('SET_BIG_DROP', bigDrop)
    },
    addMediumDrop({ commit }, mediumDrop) {
      commit('ADD_MED_DROP', mediumDrop)
    }
  },
  modules: {
  }
})
