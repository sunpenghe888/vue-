import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import FenLei from '../pages/FenLei/FenLei.vue'
import GouWuChe from '../pages/GouWuChe/GouWuChe.vue'
import ShiWu from '../pages/ShiWu/ShiWu.vue'
import Person from '../pages/Person/Person.vue'
import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'
import PhoneLogin from '../pages/Login/PhoneLogin.vue'
import FaXian from '../pages/ShiWu/FaXian/FaXian.vue'
import ZhenXuan from '../pages/ShiWu/ZhenXuan/ZhenXuan.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/phonelogin',
      component: PhoneLogin,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/fenlei',
      component: FenLei,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shiwu',
      component: ShiWu,
        children:[{
          path: '/shiwu',
          redirect: '/shiwu/faxian/0',
          meta: {
            showFooter: true
          }
          },
          {
          path: '/shiwu/faxian/:id',
          component: FaXian,
          meta: {
            showFooter: true
          }
          },
          {
          path: '/shiwu/zhenxuan',
          component: ZhenXuan,
          meta: {
            showFooter: false
          }
          }
        ],
      meta: {
        showFooter: true
      }
    },
    {
      path: '/gouwuche',
      component: GouWuChe,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/person',
      component: Person,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: false
      }
    },
    {
      redirect:'/home',
      path: ''
    },
  ]
})
