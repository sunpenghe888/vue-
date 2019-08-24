<template>
 
   <div id="foot">
      <a href="javascript:" @click="switcher('/home')" class="footItem" :class="{high:$route.path==='/home'}">
        <span class="iconSpan"><i class="icon-iconfontzhizuobiaozhun023101 iconfont"></i></span>
        <span>首页</span>
      </a>
      <a href="javascript:" @click="switcher('/fenlei')" class="footItem" :class="{high:$route.path==='/fenlei'}">
        <span class="iconSpan"><i class="icon-leimupinleifenleileibie iconfont"></i></span>
        <span>分类</span>
      </a>
      <a href="javascript:" @click="switcher('/shiwu')"  class="footItem" :class="{high:$route.path.slice(0,6) ==='/shiwu'}">
        <span class="iconSpan"><i class="icon-shiwu2  iconfont"></i></span>
        <span>实物</span>
      </a>
      <a href="javascript:" @click="switcher('/gouwuche')" class="footItem" :class="{high:$route.path==='/gouwuche'}">
        <span class="iconSpan"><i class="icon-qicheqianlian- iconfont"></i></span>
        <span>购物车</span>
      </a>
      <a href="javascript:" @click="switcher('/login')" class="footItem" :class="{high:$route.path==='/person'}">
        <span class="iconSpan"><i class="icon-gerenzhongxin iconfont"></i></span>
        <span>个人</span>
      </a>
    </div>
</template>
<script type="text/ecmascript-6">
  export default {
   methods:{
     switcher(path){
      this.$router.replace(path)
     }
   }
  }


</script>

<style lang="stylus" rel="stylesheet/stylus">
#foot
  width 100%
  height 60px
  position fixed
  right 0
  bottom 0
  display flex
  z-index 5
  background white
  .footItem
    width 20%
    height 60px
    display flex
    flex-direction column
    align-items center
    justify-content space-around
    &.high
        color red
    .iconSpan
        .iconfont
          font-size 24px
</style>
