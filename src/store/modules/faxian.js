import {
  RECEIVE_FAXIAN
    } from '../mutation-types'
    
  import {
    reqfaxian
  } from '../../api'
    
    const state = {
      faxianData:{}
    }
  
    const actions = {
        async getFaxianData({commit},{yeshu,geshu},cb){
        let result= await reqfaxian(yeshu,geshu)
        let faxianData = result.data
        if (faxianData.code === '200') {
          commit(RECEIVE_FAXIAN, {faxianData:faxianData.data.result})    // 根据返回的数据调用 mutations 更改数据
          typeof cb === 'function' && cb()
          }
        }
        }
  
    const mutations = {
      [RECEIVE_FAXIAN](state,{faxianData}){
        state.faxianData = faxianData
      }
    }
  
    const getters = {}
    
    export default {
      state,
      mutations,
      actions,
      getters
    }