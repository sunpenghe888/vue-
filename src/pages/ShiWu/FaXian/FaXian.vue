<template>
  <div class="ShiWu-content wrappershangla"  v-if="list">
    <div class="RongQi">
       <div class="ShiWu-content-datu" v-for="(item,index) in list" :key="index">
        <div class="XuanMei">
          <img :src="item.avatar" alt="">
          <span class="meimei">{{item.nickname}}</span>
        </div>
        <span class="TuoXie">{{item.title}}</span>
        <img v-lazy="item.picUrl" alt="">
        <div class="KanGuo">
          <span><i class="icon-kanguo iconfont"></i></span>
          <span class="span1">74.4k 人看过</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        yeshu:5,
        geshu:10,
        list:[],
        index:0
      }
    },
    async mounted(){
     await this.$store.dispatch('getFaxianData',{yeshu:this.yeshu,geshu:this.geshu})
     this.list = this.list.concat(this.faxianData[this.index].topics)
       this.$nextTick(()=>{
        this.scroll()
      })
    },
    
    methods:{
       scroll(){
         this.scroll = new BScroll('.wrappershangla',{
          scrollY: true,
          click:true,
          probeType:1,
           pullUpLoad: {
            threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
          }
          })
           
           this.scroll.on('pullingUp',async () => {
            this.yeshu++
            await this.$store.dispatch('getFaxianData',{yeshu:this.yeshu,geshu:this.geshu})
              this.list =this.list.concat(this.faxianData[this.index].topics)
             this.pullingDownUp()
              })
            },
               pullingDownUp(){
                  this.scroll.finishPullUp()
                  this.scroll.refresh() //重新计算元素高度
                }
    
    },
      watch: {
        deep:true,
        async $route(){
          this.index = this.$route.params.id*1
          await this.$store.dispatch('getFaxianData',{yeshu:this.yeshu,geshu:this.geshu})
          if(this.faxianData[this.index]){
              this.list =[...this.faxianData[this.index].topics]
          }
         
        }
      },
  
    computed:{
      ...mapState({
         faxianData: state => state.faxian.faxianData
      }),



    },
   }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.ShiWu-content
  width 100%
  height 500px
  .RongQi
    width 100%
    .ShiWu-content-datu
      width 100%
      height 320px
      padding 0 20px
      box-sizing border-box
      background white
      margin-bottom 10px 
      .XuanMei
        width 100%
        height 40px
        position relative
        img 
          width 25px
          height 25px
          border-radius 50%
          margin-top 10px
          margin-right 15px   
        .meimei
          font-size 14px
          position absolute
          left 40px
          top 0.39rem
      .TuoXie
        font-size 18px
        line-height 30px
      img
        width 100%
        height 180px
      .KanGuo
        width 100%
        height 30px
        line-height 30px
        .span1
          font-size 14px
          color #C2C2C2
  </style>
