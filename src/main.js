import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import "./plugins/vant.js"
// import { Button } from 'vant';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
