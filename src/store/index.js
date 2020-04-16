import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    typeid: 1,
  },
  getters: {
    get_typeid(state) {
      return state.typeid;
    },
  },
  mutations: {
    show_typeid(state, payload) {
      state.typeid = payload;
    }
  },
  actions: {
  },
  modules: {

  }
})
