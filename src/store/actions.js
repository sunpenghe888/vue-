/* 
包含n个间接更新状态数据的方法的对象
*/
import {
    RECEIVE_HOMEDATA
    } from './mutation-types'
    
  import {
    reqhomedata
  } from './../api'
export default {
    async getHomedata({commit},cb){
        let result= await reqhomedata()
        let homeData = result.data
        if (result.data.code === 0) {
          commit(RECEIVE_HOMEDATA, {homeData:homeData.data})    // 根据返回的数据调用 mutations 更改数据
          typeof cb === 'function' && cb()
        }
      }
}