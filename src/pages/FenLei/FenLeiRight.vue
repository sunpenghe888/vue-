<template>
   <div class="content-right wrapperImg">
     <div class="HuaDong">
         <div class="content-right-img"><img src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196" alt=""></div> 
         <div class="content-right-NeiRong ">
           <ul class="content-right-NeiRong-List ">
             <li class="content-right-NeiRong-List-Item" v-for="(Item,index) in data.subCateList">
               <img v-lazy="Item.bannerUrl" alt="">
               <span>{{Item.name}}</span>
             </li>
           </ul>
         </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
  export default {
    props:{
      data:Object
    },
    mounted(){
      this.$nextTick(()=>{
         let scroll = new BScroll('.wrapperImg',{
          scrollY: true,
          click:true
        })
      })
    },
      computed: {
      ...mapState({
        categoryData:state => state.fenlei.categoryData
        })
      }     
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .content-right
    width 265px
    height 300px
    background white
    padding-right 15px
    box-sizing border-box
    float right
    .HuaDong
      width 100%
      height 400px
    .content-right-img
      width 265px
      height 100px
      z-index 10
      img
        width 265px
        height 100px
    .content-right-NeiRong
      width 265px
      height 400px
      overflow hidden
      .content-right-NeiRong-List
        display flex
        width 265px
        flex-wrap wrap
        justify-content center
        overflow hidden
        .content-right-NeiRong-List-Item
          width 70px
          height 100px
          display flex
          flex-direction column
          justify-content center
          align-items center
          margin-right 10px 
          text-align center
          img
            width 65px
            height 65px
          span
            line-height 20px
  </style>
