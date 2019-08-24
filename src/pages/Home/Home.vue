<template>
   <div class="home">
        <!--t头部-->
        <div class="heard">
          <div class="heard-top">
            <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="" class="logo">
            <div class="heard-search" @click="$router.push('/search')">
              <i class="icon-sousuo iconfont"></i>
              <span>搜索商品，共XXXXX款好物</span>
            </div>
            <button class="btn" @click.prevent="gologin">登录</button>
          </div>
          <div class="heard-bottom wrapper" >
            <ul class="nav"  v-show="!isNav">
              <li class="navItem" :class="{active:high===index}"
               v-for="(item,index) in homeData.homenavList" :key="index"
               @click="ishigh(index)" >
                <span>{{item.name}}</span>
              </li>
            </ul>
            <span class="xiaJianTou " @click="isJiantou" >
                <i class="icon-xiajiantou iconfont"></i>
            </span>
            <!--点击箭头显示隐藏-->
            <div class="nav2" v-show="isNav">
              <div class="PinDao">
                <span>全部频道</span>
                <div class="shangJianTou" @click="isXiaJianTou"><i class="icon-arrow-top iconfont"></i></div>
              </div>
              <ul class="nav2List">
                <li class="nav2Item" :class="{active:high===index}"
               v-for="(item,index) in homeData.homenavList" :key="index"
               @click="ishigh2(index)" >
               {{item.name}}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--轮播-->
          <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img class="img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
            </div>
            <div class="swiper-slide">
              <img class="img" src="https://yanxuan.nosdn.127.net/e5c1181a28981ca0b6087d2fb3e7d9d8.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img class="img" src="https://yanxuan.nosdn.127.net/e5c1181a28981ca0b6087d2fb3e7d9d8.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
          <div class="make" @click="isXiaJianTou"  v-show="isNav">
          </div>
          <div class="WuYouTuiHuo">
            <ul class="WuYouTuiHuo-List">
              <li class="WuYouTuiHuo-List-Item" v-for="(item,index) in homeData.policyDescList" :key="index">
                <span><i class="icon-dianying iconfont"></i></span>
                <span>{{item.desc}}</span>
              </li>
            </ul>
          </div>
          <ul class="XinPinShouFaList" v-if="homeData.kingKongModule">
            <li class="XinPinShouFaList-Item" v-for="(kingKongitem,index) in homeData.kingKongModule.kingKongList" :key="index">
              <div class="div-img">
                <img v-lazy="kingKongitem.picUrl" alt="">
              </div>
              <span>{{kingKongitem.text}}</span>
            </li>
          </ul>
          <div class="XinRenZhuanXiang">
            <div class="XinRenZhuanXiang-top">
              <span>-新人专享礼—</span>
            </div>
            <div class="XinRenZhuanXiang-bottom">
                <div class="LiBaoTU">
                  <p>新人专享礼包</p>
                  <img class="XinRenZhuanXiang-img1" src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
                </div>
                <div class="FuLiSheANDXinRenPinTuan">
                  <div class="FuLiShe">
                    <div class="FuLiShe-left">
                      <p>福利社</p>
                      <p>今日特价</p>
                    </div>
                    <div class="FuLiShe-right">
                      <img class="XinRenZhuanXiang-img2" src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
                    </div>
                  </div>
                  <div class="FuLiShe">
                    <div class="FuLiShe-left">
                      <p>新人拼团</p>
                      <p class="p1">1元起包邮</p>
                    </div>
                    <div class="FuLiShe-right">
                      <img  class="XinRenZhuanXiang-img2" src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div class="PinPaiZhiZaoShang clearfix">
            <div class="PinPaiZhiZaoShang-heard">
              <span class="span1">品牌制造商</span>
              <span class="span2"> 更多></span>
            </div>
            <ul class="PinPaiZhiZaoShang-List">
              <li class="PinPaiZhiZaoShang-Item" v-for="(Item,index) in homeData.newItemList" :key="index">
                <span class="span1">{{Item.simpleDesc}}</span>
                <div>
                  <span class="span2">{{Item.counterPrice}}元起</span>
                  <span class="ShangXin active">上新</span>
                </div>
                <img v-lazy="Item.primaryPicUrl">
              </li>
            </ul>
          </div>
          <div class="LeiMuReXiao">
            <div class="name">类目热销榜</div>
            <div class="BanKuai">
              <div class="LeiMuReXiao-left">
                <div class="LeiMuReXiao-left-rexiaobang">
                  <div class="wenzi">
                    <span>热销榜</span>
                    <p class="p1"></p>
                  </div>
                  <div>
                    <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
                  </div>
                </div>
                <div class="LeiMuReXiao-left-jujiashenhuo">
                  <ul class="LeiMuReXiao-left-jujiashenhuoList">
                    <li class="LeiMuReXiao-left-jujiashenhuoList-Item">
                      <span >居家生活榜</span>
                      <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
                    </li>
                    <li class="LeiMuReXiao-left-jujiashenhuoList-Item">
                      <span>居家生活榜</span>
                      <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
                    </li>
                    <li class="LeiMuReXiao-left-jujiashenhuoList-Item">
                      <span>居家生活榜</span>
                      <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
                    </li>
                    <li class="LeiMuReXiao-left-jujiashenhuoList-Item">
                      <span>居家生活榜</span>
                      <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
                    </li>
                  </ul>
                </div>
              </div>
              <div class="LeiMuReXiao-right">
                <div class="LeiMuReXiao-right-haopingbang">
                  <div class="wenzi">
                    <span>好评榜</span>
                    <p class="p1"></p>
                  </div>
                  <div>
                    <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
                  </div>
                </div>
                <div class="LeiMuReXiao-right-fushixiebao">
                  <ul class="LeiMuReXiao-right-fushixiebaoList">
                    <li class="LeiMuReXiao-right-fushixiebaoList-Item">
                      <span >服饰鞋包</span>
                      <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
                    </li>
                    <li class="LeiMuReXiao-right-fushixiebaoList-Item">
                      <span >服饰鞋包</span>
                      <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
                    </li>
                    <li class="LeiMuReXiao-right-fushixiebaoList-Item">
                      <span >服饰鞋包</span>
                      <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
                    </li>
                    <li class="LeiMuReXiao-right-fushixiebaoList-Item">
                      <span >服饰鞋包</span>
                      <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import '../../../swiper/swiper.min.css'
import {mapState} from 'vuex'


  export default {
    data(){
      return{
        isNav:false,
        high:0,
      }
    },
    mounted(){
      this.$nextTick(()=>{
        var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
            },
          })
        
        let scroll = new BScroll('.wrapper',{
        scrollX: true,
        click:true
        })
      })  
    },
    methods:{
      gologin(){
        this.$router.replace('/login')
      },
      isJiantou(){
        this.isNav = !this.isNav
      },
      isXiaJianTou(){
        this.isNav =!this.isNav
      },
      ishigh(index){
        this.high = index
      },
      ishigh2(index){
      this.high = index
    }
      
    },
    computed: {
      ...mapState({
        homeData: state => state.home.homeData
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.home
  width 100%
  height 100%
  background darkgrey
  .heard
    width 100%
    height 80px
    position fixed
    top 0
    left 0
    z-index 99
    background white
    .heard-top
      width 100%
      height 40px
      display flex
      padding 10px
      box-sizing border-box
      align-items center
      .logo
        width 70px
        height 20px
      .heard-search
        width 55%
        height 25px
        background #EDEDED
        font-size 12px
        text-align center
        line-height 25px
        color #7e8c8d
        margin 0 auto
        border-radius 5px
      .btn
        border-radius 5px
        color #DB979A
        border 1px solid #DB979A
        margin-right 10px
    .heard-bottom
      height 40px
      width 99%
      .nav
        width 600px
        height 40px
        line-height 40px
        display flex
        position relative
        overflow hidden
        .navItem
          width 60px
          height 39px
          font-size 14px
          margin  0 7px
          text-align center
          flex-shrink 0
          &.active
            color red
            border-bottom  2px solid red
      .xiaJianTou
        width 60px
        height 30px
        position absolute
        right 0px
        top 50px
        text-align center
        display inline-block
        background white
        z-index 100
        .icon-xiajiantou
          font-size 20px
      // 头部箭头处隐藏列表
      .nav2
        width 100%
        height 40px
        line-height 40px
        background white
        position relative
        z-index 9999999
        .PinDao
          padding-left 10px
        .shangJianTou
          width 30px
          height 30px
          position absolute
          right 8px
          top 0
          .icon-arrow-top
            font-size 26px
        .nav2List
          width 100%
          overflow hidden
          background white
          padding-bottom 20px
          z-index 999999
          .nav2Item
            width 80px
            height 30px
            margin 15px 5px 5px 5px
            float left
            border 1px solid darkgrey
            border-radius 10px
            text-align center
            line-height 30px
            &.active
              color red
              border 1px solid red
        &.off
          display none
  .swiper-container
    width 100%
    height 160px
    .img
      width 100%
      height 160px
  .make
    width 100%
    height 100%
    background darkgrey
    position fixed
    top 0
    left 0
    z-index 88
    &.active
      display none
  .WuYouTuiHuo
    width 100%
    height 40px
    .WuYouTuiHuo-List
      width 100%
      height 40px
      display flex
      background white
      .WuYouTuiHuo-List-Item
        width 32%
        height 40px
        font-size 12px
        text-align center
        line-height 40px
        .iconfont
            color red
  .XinPinShouFaList
      width 100%
      height 200px
      display flex
      flex-wrap wrap
      background white
      padding 20px
      box-sizing border-box
      align-content space-between
      justify-content space-between
    .XinPinShouFaList-Item
      width 60px
      height 60px
      text-align center
      img
        width 45px
        height 45px
        border-radius 15px
      span
        font-size 12px
  .XinRenZhuanXiang
    width 100%
    height 280px
    background white
    margin 10px 0
    .XinRenZhuanXiang-top
      width 100%
      height 40px
      text-align center
      line-height 40px
    .XinRenZhuanXiang-bottom
      width 340px
      height 220px
      display flex
      padding-left 15px
      .LiBaoTU
        width 170px
        height 220px
        background coral
        margin-right 5px
        p
          width 100px
          height 20px
          margin-left 15px
          padding-top 20px
        .XinRenZhuanXiang-img1
          width 170px
          height 180px
      .FuLiSheANDXinRenPinTuan
        width 170px
        height 220px
        .FuLiShe
          width 170px
          height 100px
          background orange
          display flex
          margin-bottom 10px
          .FuLiShe-left
            width 50%
            height 100%
            text-align center
            margin-left 10px
            padding-top 10px
            font-size 14px
            .p1
              width 60px
              height 20px
              line-height 20px
              text-align center
              color white
              font-size 12px
              background darkgrey
          .FuLiShe-right
            width 50%
            height 100%
            .XinRenZhuanXiang-img2
              width 100%
              height 100%
  .PinPaiZhiZaoShang
    width 100%
    height 350px
    margin 20px 0
    padding 0 20px
    background white
    box-sizing border-box
    .PinPaiZhiZaoShang-heard
      width 100%
      height 40px
      line-height 40px
      .span1
        float left
      .span2
        float right
    .PinPaiZhiZaoShang-List
      width 100%
      height 300px
      display flex
      flex-wrap wrap
      justify-content space-around
      align-content space-around
      .PinPaiZhiZaoShang-Item
        width 45%
        height 45%
        display flex
        flex-direction column
        justify-content center
        align-items center
        justify-content space-around
        .span1
          font-size 14px
        .span2
          font-size 12px
          color dimgrey
        .ShangXin
          display inline-block
          width 40px
          height 15px
          font-size 14px
          color white
          background coral
          text-align center
          border-radius 10px
        img
          width 100%
          height 60%
  .LeiMuReXiao
    width 100%
    height 380px
    margin-top 20px
    background white
    .name
      font-size 16px
      width 100%
      height 50px
      line-height 50px
      padding-left 15px
      box-sizing border-box
    .BanKuai
      width 100%
      height 330px
      display flex
      .LeiMuReXiao-left
        width 160px
        height 330px
        margin-left 15px
        .LeiMuReXiao-left-rexiaobang
          width 100%
          height 100px
          display flex
          background #FFC0CB
          .wenzi
            width 80px
            height 100px
            display flex
            flex-direction column
            justify-content center
            padding-left 15px
            font-size 14px
            .p1
              height 10px
              width 25px
              border-bottom 2px solid black
          img
            width 80px
            height 100px
        .LeiMuReXiao-left-jujiashenhuo
          width 100%
          height 220px
          margin-top 5px
          .LeiMuReXiao-left-jujiashenhuoList
            width 100%
            height 220px
            display flex
            flex-wrap wrap
            justify-content space-between
            .LeiMuReXiao-left-jujiashenhuoList-Item
              width 75px
              height 100px
              background cyan
              text-align center
              display flex
              flex-direction column
              justify-content space-around
              span
                font-size 12px
              img
                width 100%
                height 50px
      .LeiMuReXiao-right
        width 160px
        height 330px
        margin-left 20px
        .LeiMuReXiao-right-haopingbang
          width 100%
          height 100px
          background pink
          display flex
          .wenzi
            width 80px
            height 100px
            display flex
            flex-direction column
            justify-content center
            padding-left 15px
            font-size 14px
            .p1
              height 10px
              width 25px
              border-bottom 2px solid black
          img
            width 80px
            height 100px
        .LeiMuReXiao-right-fushixiebao
          width 100%
          height 220px
          margin-top 5px
          .LeiMuReXiao-right-fushixiebaoList
            width 100%
            height 220px
            display flex
            flex-wrap wrap
            justify-content space-between
            .LeiMuReXiao-right-fushixiebaoList-Item
              width 75px
              height 100px
              background cyan
              text-align center
              display flex
              flex-direction column
              justify-content space-around
              span
                font-size 12px
              img
                width 100%
                height 50px

</style>

