<template>
  <div id="FenLei">
    <div class="FenLei-heard">
      <div class="heard-search" @click="$router.push('/search')">
          <i class="icon-sousuo iconfont"></i>
          <span>搜索商品，共XXXXX款好物</span>
      </div>
    </div>
    <div class="FenLei-content clearfix">
      <div class="content-left wrapper">
        <ul class="content-left-TuiJian ">
          <li class="content-left-TuiJian-Item"  :class="{active:high === index}"
          @click="ishigh(index)"
           v-for="(Item,index) in categoryData.categoryL1List" :key="index">{{Item.name}}</li>
        </ul>
      </div>
     <FenLei-right v-if="categoryData.categoryL1List" :data="categoryData.categoryL1List[high]" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
import FenLeiRight from './FenLeiRight'
  export default {
    components:{
      FenLeiRight
    },
    data(){
      return{
        high:0
      }
    },
    methods:{
      ishigh(index){
        this.high = index
      }
    },
     mounted(){
        let scroll = new BScroll('.wrapper',{
          scrollY: true,
          click:true
        })
      },
       computed: {
      ...mapState({
        categoryData:state => state.fenlei.categoryData
        })
      }          
    }
   
</script>

<style lang="stylus" rel="stylesheet/stylus">
#FenLei
  background white
  .FenLei-heard
    width 100%
    height 40px
    position fixed
    top 0
    left 0
    padding 10px 0
    background white
    z-index 3
    .heard-search
      width 80%
      height 30px
      background #EDEDED
      font-size 12px
      text-align center
      line-height 30px
      color black
      margin 0 auto
      border-radius 5px
  .FenLei-content
    width 100%
    height 100%
    margin-top -20px 
    .content-left
      float: left
      width: 2.58rem
      height: 500px
      overflow hidden
      background-color #fff
      .content-left-TuiJian
        width 2.58rem
        line-height 1.2rem
        height 667px
        .content-left-TuiJian-Item
          width: 100%
          height: 1.2rem
          text-align: center
          color #BCC3C4
          font-size 14px
          &.active
            color #b4282d
            border-left 1px solid #b4282d
   </style>
