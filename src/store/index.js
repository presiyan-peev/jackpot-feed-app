import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dailyPot: null,
    superPot: null,
    hourlyPot: null,

    // an object of objects. 
    // Each object represents the time remaining, through their properties secondsRemaining, minutesRemaining and hoursRemaining
    countdowns: {}
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

    ADD_COUNTDOWN(state, val) {
      state.countdowns[val.imageType] = {
        secondsRemaining: val.split(':')[2],
        minutesRemaining: val.split(':')[1],
        hoursRemaining: val.split(':')[0],
      }
    },

    UPDATE_COUNTDOWNS(state) {
      for (const countdown in state.countdowns) {
        if (countdown.secondsRemaining > 0) {
          --countdown.secondsRemaining
        } else {
          if (countdown.minutesRemaining > 0) {
            --countdown.minutesRemaining
            countdown.secondsRemaining = 59
          } else {
            if (countdown.hoursRemaining > 0) {
              --countdown.hoursRemaining
              countdown.minutesRemaining = 59
              countdown.secondsRemaining = 59
            } else {
              console.log('do nothing')
            }
          }

        }
      }
    }
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

    countdown({ commit }) {
      console.log('countdown action')
      commit('UPDATE_COUNTDOWNS')
    },

    fetchPots({ commit, dispatch }) {
      axios
        .get('http://localhost:3000/pots')
        .then(response => {
          for (const drop of response.data) {
            switch (drop.imageType) {
              case 'daily_drop':
                commit('SET_BIG_DROP', drop)

                break
              case 'super_drop':
                commit('SET_SUPER_DROP', drop)
                break
              case 'hourly_drop':
                commit('SET_HOURLY_DROP', drop)

                break
              default:
                console.err("something bad was returned")
            }
          }
          setInterval(dispatch('countdown'), 1000)
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  modules: {
  }
})
