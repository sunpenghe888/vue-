import {
  RECEIVE_HOMEDATA
  } from '../mutation-types'
  
import {
  reqhomedata
} from '../../api'
  
  const state = {
    homeData:{}
  }

  const mutations = {
    [RECEIVE_HOMEDATA](state,{homeData}){
      state.homeData = homeData
    }
  }
  
  const actions = {
   async getHomedata({commit},cb){
        let result= await reqhomedata()
        let homeData = result.data
        if (homeData.code === 0) {
          commit(RECEIVE_HOMEDATA, {homeData:homeData.data})    // 根据返回的数据调用 mutations 更改数据
          typeof cb === 'function' && cb()
        }
      },
  
    
  }
  const getters = {}
  
  export default {
    state,
    mutations,
    actions,
    getters
  }