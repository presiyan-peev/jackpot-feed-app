import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dailyPot: null,
    superPot: null,
    hourlyPot: null,

    // stores the quantity of performed fetches from the API
    fetchCount: 0,
  },
  getters: {
    getDailyPot: (state) => state.dailyPot,
    getSuperPot: (state) => state.superPot,
    getHourlyPot: (state) => state.hourlyPot,

    // getters for easier manipulation
    getDailyPotCountDown: (state) => state.dailyPot.countdown,
    getSuperPotCountDown: (state) => state.superPot.countdown,
    getHourlyPotCountDown: (state) => state.hourlyPot.countdown,

    getFetchCount: (state) => state.fetchCount
  },
  mutations: {
    SET_DAILY_DROP(state, val) {
      if(state.fetchCount == 0){
        state.dailyPot = val
      }
      state.dailyPot.amount = (val.amount * Math.pow(1.001, state.fetchCount)).toFixed(2)    // after each fetch the amount will be increased by 0.1%
    },
    SET_SUPER_DROP(state, val) {
      if(state.fetchCount == 0){
        state.superPot = val
      }
      state.superPot.amount = (val.amount * Math.pow(1.001, state.fetchCount)).toFixed(2)     // after each fetch the amount will be increased by 0.1%
      console.log("state: "+state.superPot.amount)
    },
    SET_HOURLY_DROP(state, val) {
      if(state.fetchCount == 0){
        state.hourlyPot = val
      }
      state.hourlyPot.amount = (val.amount * Math.pow(1.001, state.fetchCount)).toFixed(2)     // after each fetch the amount will be increased by 0.1%
    },

    INCREMENT_FETCH_COUNT(state) {
      ++state.fetchCount
    },

    UPDATE_COUNTDOWN(state, pot) {
      if (state[pot]) {
      if (state[pot].countdown) {
        if (state[pot].countdown.secondsRemaining > 0) {
          state[pot].countdown.secondsRemaining = (state[pot].countdown.secondsRemaining < 11) ? ('0' + --state[pot].countdown.secondsRemaining) : --state[pot].countdown.secondsRemaining
        } else {
          if (state[pot].countdown.minutesRemaining > 0) {
            state[pot].countdown.minutesRemaining = (state[pot].countdown.minutesRemaining < 11) ? ('0' + --state[pot].countdown.minutesRemaining) : --state[pot].countdown.minutesRemaining
            state[pot].countdown.secondsRemaining = 59
          } else {
            if (state[pot].countdown.hoursRemaining > 0) {
              state[pot].countdown.hoursRemaining = (state[pot].countdown.hoursRemaining < 11) ? ('0' + --state[pot].countdown.hoursRemaining) : --state[pot].countdown.minutesRemaining  
              state[pot].countdown.minutesRemaining = 59
              state[pot].countdown.secondsRemaining = 59
            } else {
              console.log('do nothing')
            }
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
 * Creates a new property of each data object: countdown, derived from the property must_drop_in for much easier manipulation
 * 
 * TODO - move the creation of countdown in a separate function as per DRY principle
 */
    fetchPotsFromApi({ commit }) {
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
                commit('SET_DAILY_DROP', drop)
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
        })
        .then(() => {
          commit('INCREMENT_FETCH_COUNT')
        })
        .catch(err => {
          console.error(err)
        })
      
    },

    fetchPots({ dispatch }) {
      dispatch('fetchPotsFromApi').then(
      setInterval(() => {
        dispatch('fetchPotsFromApi')
      }, 30000))

      setInterval(() => {
        dispatch('countdown', 'dailyPot')
        dispatch('countdown', 'superPot')
        dispatch('countdown', 'hourlyPot')
      }, 1000)
    },

    /*
     * Used for the deployed version as it won't have connection with the local JSON Server 
     * It might be ugly, but took me just 15 minutes :D
     */
    dummyFetchPotsData({commit}) {
      let _daily = {
        type: "big",
        amount: "1167.98",
        currency: "$",
        must_drop_in: "05:53:14",
        imageType: "daily_drop"
      }
      _daily.countdown = {
        secondsRemaining: _daily.must_drop_in.split(':')[2],
        minutesRemaining: _daily.must_drop_in.split(':')[1],
        hoursRemaining: _daily.must_drop_in.split(':')[0],
      }
      let _super = {
        type: "medium",
        amount: "337413.68",
        currency: "$",
        imageType: "super_drop"
      }
      let _hourly = {
        type: "medium",
        amount: "129.78",
        currency: "$",
        must_drop_in: "01:53:14",
        imageType: "hourly_drop"
      } 
      _hourly.countdown = {
        secondsRemaining: _hourly.must_drop_in.split(':')[2],
        minutesRemaining: _hourly.must_drop_in.split(':')[1],
        hoursRemaining: _hourly.must_drop_in.split(':')[0],
      }
      commit('SET_DAILY_DROP', _daily)
      commit('SET_SUPER_DROP', _super)
      commit('SET_HOURLY_DROP', _hourly)
      commit('INCREMENT_FETCH_COUNT')
    },

    dummyFetchPots({ dispatch }) {
      dispatch('dummyFetchPotsData').then(
      setInterval(() => {
        dispatch('dummyFetchPotsData')
      }, 30000))

      setInterval(() => {
        dispatch('countdown', 'dailyPot')
        dispatch('countdown', 'superPot')
        dispatch('countdown', 'hourlyPot')
      }, 1000)
    },
  },
})