import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "Привет Vue.js"
  },
  mutations: {},
  actions: {},
  getters: {
    getTitle(state) {
      return state.title;
    }
  },
})