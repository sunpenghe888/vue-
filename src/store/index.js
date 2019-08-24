/* 
vuex最核心的管理对象store
*/
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import state from './state'
import home from './modules/home'
import fenlei from './modules/fenlei'
import search from './modules/search'
import shiwu from './modules/shiwu'
import faxian from './modules/faxian'
Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  state,
  modules: { // vuex多模块编程
   home:home,
   fenlei:fenlei,
   search:search,
   shiwu:shiwu,
   faxian:faxian
   
  }
})
