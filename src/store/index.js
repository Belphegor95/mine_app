import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    typeid: 1,
    user: {}
  },
  getters: {
    get_typeid(state) {
      return state.typeid;
    },
    // get_user(state) {
    //   return state.user;
    // },
  },
  mutations: {
    show_typeid(state, payload) {
      state.typeid = payload;
    },
    show_user(state, payload) {
      state.user = payload;
    }
  },
  actions: {
  },
  modules: {

  }
})
