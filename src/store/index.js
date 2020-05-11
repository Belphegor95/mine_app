import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"; //插件 用来解决F5 刷新后 VUEX 数据的丢失

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    typeid: 1,
    user: {},
    result: 0
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
    },
    show_result(state, payload) {
      state.result = payload;
    },
  },
  actions: {
  },
  modules: {

  },
  plugins: [createPersistedState()] // 插件
})
