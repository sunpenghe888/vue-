import Mock from 'mockjs'
import homedata from './homeData.json'
import category from './category.json'
import categoryList from './categoryList.json'
Mock.mock('/homedata',{code:0,data:homedata})
Mock.mock('/category',{code:0,data:category})
Mock.mock('/categoryList',{code:0,data:categoryList})
