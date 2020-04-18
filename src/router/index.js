import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import Deal from '../views/Deal.vue'
// 个人信息
import Personal from '../views/personal/Personal.vue'
import Share from '../views/personal/Share.vue'
import Group from '../views/personal/Group.vue'
import DealingSlip from '../views/personal/DealingSlip.vue'
import Burse from '../views/personal/Burse.vue'
import Advertising from '../views/personal/Advertising.vue'
import UpAdvertising from '../views/personal/UpAdvertising.vue'
import MoneyRecord from '../views/personal/MoneyRecord.vue'

// 游戏部分
import GameHome from '../views/game/GameHome.vue'

// 视频区(广告区)带播放部分
import AdvertisingHome from '../views/advertising/AdvertisingHome.vue'
import VideoPlayback from '../views/advertising/VideoPlayback.vue'

// 交易区
import TradingFloor from '../views/deal/TradingFloor.vue'
import Particulars from '../views/deal/Particulars.vue'

// 朋友圈
import Friendster from '../views/friendster/Friendster.vue'
import Issue from '../views/friendster/Issue.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/deal',
    name: 'Deal',
    component: Deal
  },
  {
    path: '/personal/personal',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/personal/share',
    name: 'Share',
    component: Share
  },
  {
    path: '/personal/group',
    name: 'Group',
    component: Group
  },
  {
    path: '/personal/dealing_slip',
    name: 'DealingSlip',
    component: DealingSlip
  },
  {
    path: '/personal/burse',
    name: 'Burse',
    component: Burse
  },
  {
    path: '/personal/advertising',
    name: 'Advertising',
    component: Advertising
  },
  {
    path: '/personal/up_advertising',
    name: 'UpAdvertising',
    component: UpAdvertising
  },
  {
    path: '/personal/money_record',
    name: 'MoneyRecord',
    component: MoneyRecord
  },
  {
    path: '/gameHome',
    name: 'GameHome',
    component: GameHome
  },
  {
    path: '/advertising',
    name: 'AdvertisingHome',
    component: AdvertisingHome
  },
  {
    path: '/videoPlayback',
    name: 'VideoPlayback',
    component: VideoPlayback
  },
  {
    path: '/deal/trading_floor',
    name: 'TradingFloor',
    component: TradingFloor
  },
  {
    path: '/deal/particulars',
    name: 'Particulars',
    component: Particulars
  },
  {
    path: '/friendster/friendster',
    name: 'Friendster',
    component: Friendster
  },
  {
    path: '/friendster/issue',
    name: 'Issue',
    component: Issue
  },
  // {  
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
