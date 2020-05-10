import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { api } from "./assets/js/config";

import echarts from 'echarts'
Vue.prototype.$echarts = echarts


import "./plugins/vant.js"

import cryptoJs from "crypto-js";

import axios from "axios";
import qs from "qs";
Vue.config.keyCodes.caps = 20;
Vue.prototype.axios = axios;
axios.interceptors.request.use(function (config) {
  // if (config.url != '/') { // 这里最好加个判断  判断 当前的请求地址 是否需要token 如果是则加token反之布甲
  //   var token = cryptoJs.MD5(`234567:${config.url}`).toString();
  //   config.headers.authtoken = `15538927152:234567:${token}`
  //   // var token = cryptoJs.MD5(`${window.localStorage.password}:${config.url}`).toString();
  //   // config.headers.authtoken = `${window.localStorage.account}:${window.localStorage.password}:${token}`
  // }
  if (config.method == "post" && (config.url + '').indexOf('index/every/upload') != 1) {
    config.data = qs.stringify(config.data);
  }
  return config;
});
axios.interceptors.response.use(
  response => {
    if (response.data) {
      return response.data;
    } else {
      return response;
    }
  },
  error => {
    return Promise.reject(error);
  }
);
axios.defaults.baseURL = api.baseUrl;

function headers(url) {
  console.log(url)
  let account = window.localStorage.account
  let password = window.localStorage.password
  return {
    authtoken: `${account}:${password}:${cryptoJs.MD5(`${password}:${url}`).toString()}`
    // authtoken: `15538927152:234567:${cryptoJs.MD5(`234567:${url}`).toString()}`
  }
}

function token_get(url, parame = {}) {
  return axios.get(url, { headers: headers(url) }, parame)
}
function token_post(url, parame = {}) {
  return axios.post(url, parame, { headers: headers(url) })
}
Vue.prototype.token_get = token_get
Vue.prototype.token_post = token_post
Vue.config.productionTip = false;

Vue.prototype.$api = api;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
