import Vue from 'vue'
import Vuex from 'vuex'
import apiHandler from './modules/api-handler'
import responsiveness from './modules/responsiveness'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    apiHandler,
    responsiveness
  },
  
})