<template>
  <div>
     <div class="PhoneLogin">
        <div class="Phonelogin-heard">
          <span class="span1" @click="$router.replace('/home')">
            <i class="icon-iconfontzhizuobiaozhun023101 iconfont"></i>
          </span>
          <div class="YanXuan">网易严选</div>
          <div class="span2">
            <i class="icon-sousuo iconfont"></i>
            <i class="icon-gouwuchekong iconfont"></i>
          </div>
        </div>
       <div class="PhoneLogin-img">
         <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
       </div>
        <div class="inputs">
          <input type="text" placeholder="请输入手机号" v-model="phone1" 
           name="phone" v-validate="{required: true,regex: /^1\d{10}$/}">
           <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
          <input type="text" placeholder="请输入手机验证码" 
          v-model="code" name="code" v-validate="{required: true}">
           <span style="color: red;" v-show="errors.has('code')">{{ errors.first('code') }}</span>
          <button :disabled="codeNum !==0" @click="getcode">{{codeNum>0?`${codeNum}秒`:"获取验证码"}}</button>
          
        </div>
        <div class="span">
          <span class="span1">遇到问题 ?</span>
          <span class="span2">使用密码验证登录</span>
        </div>
        <div class="dengluRongQi">
          <div class="denglu">登录</div>
          <div class="denglufangshi" @click="$router.replace('/login')">其他登录方式</div>
          <div class="zhuce">注册账号  ></div>
        </div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {Toast,Messagebox} from 'mint-ui'

  export default {
    data(){
      return{
        phone1:'',
        code:'',
        codeNum:0
      }
    },
    methods:{
     
      getcode(){
        Toast("验证码已发送")
        let time
        this.codeNum = 10
         time =setInterval(()=>{
        if(this.codeNum===0){
        clearInterval(time)
        }else{
            this.codeNum--
        }
        },1000)
        if(this.$route.path!=='/phonelogin'){
          clearInterval(time)
           this.codeNum = 0
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.PhoneLogin
  background white
  width 100%
  height 100%
  .Phonelogin-heard
    width 100%
    height 60px
    background white
    display flex
    align-items  center
    padding 0 15px
    justify-content space-between
    box-sizing border-box
    position fixed
    left 0
    top 0
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
  .PhoneLogin-img
    width 100%
    height 130px
    background white
    text-align center
    margin-top -20px 
    img 
      width 100px
      height 40px
      margin-top 15px 
  .inputs
    width 100%
    height 100px
    position relative
    background white
    margin-bottom 15px
    span 
      padding 0 20px
    input 
      width 100%
      height 40px
      margin-top 12px    
      color #757575
      font-size 14px
      padding-left 20px
      outline none
      box-sizing border-box
    button
      
      height 30px
      width 90px
      border-radius 5px
      border 1px solid #757575
      color #757575
      position absolute
      right 0
      bottom 0
      background white
      outline none
      margin-right 20px
  .span
    width 100%
    height 40px
    background white
    line-height 40px
    padding 0 20px
    box-sizing border-box
    font-size 14px
    .span1
      display inline-block
      float left 
    .span2
      display inline-block
      float right
  .dengluRongQi
    width 100%
    height 250px
    box-sizing border-box
    padding 0 20px
    .denglu
      width 100%
      height 50px
      background #B4282D
      line-height 50px
      text-align center
      color white
      font-size 14px
      margin-bottom 20px 
    .denglufangshi
      margin-bottom 40px
      width 100%
      height 50px
      background white
      line-height 50px
      text-align center
      color #B4282D
      font-size 14px
      border 1px solid  #B4282D
    .zhuce
      text-align  center
      font-size 14px
</style>
