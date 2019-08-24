// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import store from './store'
import './mock/mock-server.js'
import VueLazyLoad from 'vue-lazyload'
import VeeValidate from 'vee-validate'
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.use(VeeValidate)
Vue.use(VueLazyLoad,{
    error:'../static/images/6e717bcdly1fhzojod351g20c2098jss.gif',
    loading:'../static/images/zhangyu.gif'
})
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
