import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

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

    getDailyPotCountDown: (state) => state.dailyPot.countdown,
    getSuperPotCountDown: (state) => state.superPot.countdown,
    getHourlyPotCountDown: (state) => state.hourlyPot.countdown,
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

    UPDATE_COUNTDOWN(state, pot) {
      if (state[pot].countdown) {
        if (state[pot].countdown.secondsRemaining > 0) {
          --state[pot].countdown.secondsRemaining
        } else {
          if (state[pot].countdown.minutesRemaining > 0) {
            --state[pot].countdown.minutesRemaining
            state[pot].countdown.secondsRemaining = 59
          } else {
            if (state[pot].countdown.hoursRemaining > 0) {
              --state[pot].countdown.hoursRemaining
              state[pot].countdown.minutesRemaining = 59
              state[pot].countdown.secondsRemaining = 59
            } else {
              console.log('do nothing')
            }
          }
        }
      }
    }
  },
  actions: {
    countdown({ commit }, pot) {
      commit('UPDATE_COUNTDOWN', pot)
    },



/**
 * Fetches the data from the server.
 * Creates a new property of each object: countdown, derived from the property must_drop_in for much easier manipulation
 * 
 * TODO - move the creation of countdown in a separate function
 */
    fetchPots({ commit, dispatch }) {
      console.log('fetching...')
      axios
        .get('http://localhost:3000/pots')
        .then(response => {
          for (const drop of response.data) {
            switch (drop.imageType) {
              case 'daily_drop':
                if(drop.must_drop_in){
                  drop.countdown = {
                    secondsRemaining: drop.must_drop_in.split(':')[2],
                    minutesRemaining: drop.must_drop_in.split(':')[1],
                    hoursRemaining: drop.must_drop_in.split(':')[0],
                  }
                }
                commit('SET_BIG_DROP', drop)
                break
              case 'super_drop':
                if(drop.must_drop_in){
                  drop.countdown = {
                    secondsRemaining: drop.must_drop_in.split(':')[2],
                    minutesRemaining: drop.must_drop_in.split(':')[1],
                    hoursRemaining: drop.must_drop_in.split(':')[0],
                  }
                }
                commit('SET_SUPER_DROP', drop)
                break
              case 'hourly_drop':
                if(drop.must_drop_in){
                  drop.countdown = {
                    secondsRemaining: drop.must_drop_in.split(':')[2],
                    minutesRemaining: drop.must_drop_in.split(':')[1],
                    hoursRemaining: drop.must_drop_in.split(':')[0],
                  }
                }
                commit('SET_HOURLY_DROP', drop)
                break
              default:
                console.err("something bad was returned")
            }
          }
          setInterval(() => {
            dispatch('countdown', 'dailyPot')
            dispatch('countdown', 'superPot')
            dispatch('countdown', 'hourlyPot')
          }, 1000)
        })
        .catch(err => {
          console.error(err)
        })
    }, 
  },
})