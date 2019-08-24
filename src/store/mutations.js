/* 
包含n个直接更新状态数据的方法的对象
*/
import {
  RECEIVE_HOMEDATA
  } from './mutation-types'
  
export default {

  [RECEIVE_HOMEDATA](state,{homeData}){
    state.homeData = homeData
  }
  /* xxx (state) { // state是总状态

  } */
}