<template>
  <div id="ShiWu">
    
    <div class="ShiWu-heard">
       <div class="ShiWu-heard-top">
          <span class="span1" @click="$router.replace('/home')">
            <i class="icon-iconfontzhizuobiaozhun023101 iconfont"></i>
          </span>
          <div class="heard-faxian">
            <router-link  to="/shiwu/faxian/0">
              <span class="faxian" :class="{active:$route.path!=='/shiwu/zhenxuan'}">发现</span>
            </router-link>
            <router-link  to='/shiwu/zhenxuan'>
              <span class="zhenxuanjia" :class="{active:$route.path==='/shiwu/zhenxuan'}">甄选家</span>
            </router-link>
          </div>
          <div class="span2">
            <i class="icon-sousuo iconfont" @click="$router.push('/search')"></i>
            <i class="icon-gouwuchekong iconfont" @click="$router.replace('/gouwuche')"></i>
          </div>
      </div>
      <div class="ShiWu-heard-bottom wrapper" v-show="$route.path!=='/shiwu/zhenxuan'">
        <ul class="nav">
            <li class="navItem"  @click="ishigh(index)" :class="{active:$route.path==='/shiwu/faxian/'+index}" 
            v-for="(item,index) in shiwuData" :key="index">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <!-- <router-view :shiwuchildData="shiwuData[high]"></router-view> -->

       <router-view></router-view>
   
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
  export default {
    data(){
      return{

      }
    },
    mounted(){
      this.$store.dispatch('getShiwu')
      let scroll = new BScroll('.wrapper',{
        scrollX: true,
        click:true
        })
        // this.high = this.$route.path.slice(13,14)
    //  this.$bus.$emit('high',{high:this.high})
    },
    methods:{
      ishigh(num){
        this.$router.push('/shiwu/faxian/'+num*1)
      } 
    },
     computed:{
      ...mapState({
          shiwuData: state => state.shiwu.shiwuData
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#ShiWu
  .ShiWu-heard
    width 100%
    z-index 3
    position fixed
    left 0
    top 0
    .ShiWu-heard-top
      width 100%
      height 60px
      background white
      display flex
      align-items  center
      padding 0 15px
      justify-content space-between
      box-sizing border-box
     
      border-bottom 1px solid #F2F2F2
      .heard-faxian
        text-align center
        width 150px
        height 60px
        line-height 60px
        margin-left 35px 
        display flex
        justify-content space-around
        font-size 18px
        .active
          font-size 20px
          color #B4282D
          font-weight bold
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
    .ShiWu-heard-bottom
      height 40px
      width 374px
      margin-top -20px
      background white
      .nav
        width 550px
        height 40px
        line-height 40px
        display flex
        position relative
        .navItem
          height 39px
          font-size 14px
          margin  0 7px
          text-align center
          margin-left 15px 
          flex-shrink 0
          &.active
            color red
            border-bottom  2px solid red 
  </style>
