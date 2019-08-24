import axois from 'axios'
let BASE='/api'

// HomeData
export const reqhomedata = () => axois.get('/homedata')
export const reqcategory = () => axois.get('/category')
export const reqcategoryList = () => axois.get('/categoryList')
// 关键字搜索接口
export const reqsearch = (key) =>axois(`${BASE}/xhr/search/searchAutoComplete.json?keywordPrefix=${key}`)

// 发现页面上拉加载
export const reqfaxian = (yeshu,geshu) =>axois(`${BASE}/topic/v1/find/recAuto.json?page=${yeshu}&size=${geshu}`)