import {
    RECEIVE_CATEGORYLIST
    } from '../mutation-types'
    
  import {
    reqcategoryList
  } from '../../api'
    
    const state = {
      shiwuData:[]
    }
  
    const actions = {
        async getShiwu({commit},cb){
        let result= await reqcategoryList()
        let shiwuData = result.data
        
        if (shiwuData.code === 0) {
            //  let SearchShuJu =JSON.parse(searchData.data)
          commit(RECEIVE_CATEGORYLIST, {shiwuData:shiwuData.data} )
            // 根据返回的数据调用 mutations 更改数据
          typeof cb === 'function' && cb()
          }
        }
        }
  
    const mutations = {
      [RECEIVE_CATEGORYLIST](state,{shiwuData}){
        state.shiwuData = shiwuData

      }
    }
  
    const getters = {}
    
    export default {
      state,
      mutations,
      actions,
      getters
    }