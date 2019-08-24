import {
    RECEIVE_CATEGORY
    } from '../mutation-types'
    
  import {
    reqcategory
  } from '../../api'
    
    const state = {
      categoryData:{}
    }
  
    const actions = {
        async getCategory({commit},cb){
        let result= await reqcategory()
        let categoryData = result.data
        if (categoryData.code === 0) {
          commit(RECEIVE_CATEGORY, {categoryData:categoryData.data})    // 根据返回的数据调用 mutations 更改数据
          typeof cb === 'function' && cb()
          }
        }
  
  
  
        }
  
    const mutations = {
      [RECEIVE_CATEGORY](state,{categoryData}){
        state.categoryData = categoryData
      }
    }
  
    const getters = {}
    
    export default {
      state,
      mutations,
      actions,
      getters
    }