<template>
   <!--登录界面-->
  <div class="login">
        <div class="login-heard" slot="heard">
          <span class="span1" @click="$router.replace('/home')">
            <i class="icon-iconfontzhizuobiaozhun023101 iconfont"></i>
          </span>
          <div class="YanXuan">网易严选</div>
          <div class="span2">
            <i class="icon-sousuo iconfont" @click="$router.push('/search')"></i>
            <i class="icon-gouwuchekong iconfont"  @click="$router.replace('/gouwuche')"></i>
          </div>
        </div>
    <div class="login-content">
      <div class="img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <button class="btn1 active" @click="$router.replace('/phonelogin')"  ><span><i class="icon-shouji iconfont"></i></span>
        手机号快捷登录
      </button>
      <button class="btn2"><span><i class="icon-youxiang iconfont"></i></span>
        邮箱账号登录
      </button>
      </div>
      <div class="login-foot">
        <ul class="login-foot-List">
          <li class="login-foot-List-Item">
            <span><i class="icon-weixin iconfont"></i></span>
            <span>微信</span>
          </li>
          <li class="login-foot-List-Item border">
            <span><i class="icon-qq iconfont"></i></span>
            <span>QQ</span>
          </li>
          <li class="login-foot-List-Item">
            <span><i class="icon-weibo iconfont"></i></span>
            <span>微博</span>
          </li>
        </ul>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import LoginHeard from './LoginHeard'
  export default {
    components:{
      LoginHeard
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login
    width 100%
    height 100%
    background #f4f4f4
    position fixed
    top 0
    left 0
    .login-heard
      width 100%
      height 60px
      background white
      display flex
      align-items  center
      padding 0 15px
      justify-content space-between
      box-sizing border-box
      .YanXuan
        width 50%
        height 60px
        text-align center
        line-height 60px
        font-size 20px
        margin-left 40px
      .span1
        .icon-iconfontzhizuobiaozhun023101
          font-size 25px
      .span2
        width 20%
        height 60px
        line-height 60px
        .icon-sousuo
          font-size 25px
          margin-right 10px
        .icon-gouwuchekong
          font-size 25px

    .login-content
      width 100%
      height 80%
      text-align center
      .img
        width 100%
        height 240px
        text-align center
        img
          height 50px
          margin 75px 0
      button
        width 350px
        height 50px
        border 1px solid red
        outline none
        border-radius 5px
        font-size 14px
        font-weight bold
        color red
        background white
        margin-bottom 10px
        &.active
          background red
          color white
    .login-foot
      width 100%
      height 40px
      .login-foot-List
        width 300px
        height 40px
        margin 0 auto
        display flex
        .login-foot-List-Item
          width 100px
          height 20px
          text-align center
          color darkgrey
          line-height 20px
          font-size 18px
        .border
          border-left 1px solid darkgrey
          border-right 1px solid darkgrey





 
</style>
