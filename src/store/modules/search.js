import {
    RECEIVE_SEARCHKEY
    } from '../mutation-types'
    
  import {
    reqsearch
  } from '../../api'
    
    const state = {
      searchData:[],
    }
  
    const actions = {
        async getSearchkey({commit},{key},cb){
        let result= await reqsearch(key)
        let searchData = result.data
        if (searchData.code === '200') {
            //  let SearchShuJu =JSON.parse(searchData.data)
          commit(RECEIVE_SEARCHKEY, {searchData:searchData.data} )
            // 根据返回的数据调用 mutations 更改数据
          typeof cb === 'function' && cb()
          }
        }
        }
  
    const mutations = {
      [RECEIVE_SEARCHKEY](state,{searchData}){
        state.searchData = searchData
      }
    }
  
    const getters = {}
    
    export default {
      state,
      mutations,
      actions,
      getters
    }