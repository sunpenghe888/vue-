<template>
 <div id="app">
  <div class="box">
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
   <Foot v-show="$route.meta.showFooter"/>
  </div>
  </div>
</template>
<script>
import Home from './pages/Home/Home'
import FenLei from './pages/FenLei/FenLei.vue'
import GouWuChe from './pages/GouWuChe/GouWuChe.vue'
import ShiWu from './pages/ShiWu/ShiWu.vue'
import Person from './pages/Person/Person.vue'
import Foot from './components/Foot/Foot'
import Login from './pages/Login/Login.vue'
export default {
  name: 'App',
  components:{
    Login,
    Home,
    FenLei,
    GouWuChe,
    ShiWu,
    Person,
    Foot
  },
  mounted(){
    this.$store.dispatch('getHomedata')
    this.$store.dispatch('getCategory')
  },
  data() {
    return {
  
    }
  },
  

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#app
  width 100%
  height 100%
  background #f4f4f4
  .box
    .content
      width 100%
      height 100%
      background #f4f4f4
      padding-top 80px
      padding-bottom 60px
      box-sizing border-box
</style>
