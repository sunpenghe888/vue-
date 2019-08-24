<template>
  <div id="Search">
    <div class="heardRongQi">
        <span class="span1">
            <i class="icon-sousuo iconfont"></i>
        </span>
        <input class="heard-search" v-model="key"  @keyup='toSearch' placeholder="硅藻土浴室地毯 直降29元"/>
        <div class="x" @click="clearkey" v-show="key!==''">X</div>
        <div class="quxiao"  @click="$router.back()">取消</div>
    </div>
    <div class="search-content">
        <ul v-show="key!==''" class="List">
            <li class="item" v-for="(item,index) in searchData" :key="index"> {{item}}</li>
        </ul>
        <div class="ReMen" v-show="key===''">
            <div class="ReMen1">热门搜索</div>
            <ul class="ReMen-List">
                <li class="ReMen-List-Item">爆款 行李箱</li>
                <li class="ReMen-List-Item">爆款 行李箱</li>
                <li class="ReMen-List-Item">爆款 行李箱</li>
                <li class="ReMen-List-Item">爆款 行李箱</li>
                <li class="ReMen-List-Item">爆款 行李箱</li>
                <li class="ReMen-List-Item">好嗨 呦</li>
                <li class="ReMen-List-Item">爆款 行李箱</li>
                <li class="ReMen-List-Item">那个 小哥有点帅</li>
                <li class="ReMen-List-Item">爆款 行李箱</li>
                <li class="ReMen-List-Item">爆款 行李箱</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
      data(){
          return{
              key:''
          }
      },
      mounted(){
        //   this.$store.dispatch('getSearchkey',{key:this.key})
      },
      methods:{
        toSearch(){
            this.$store.dispatch('getSearchkey',{key:this.key})
        },
        clearkey(){
            this.key = ''
        }
      },
      computed:{
          ...mapState({
              searchData:state => state.search.searchData
          })
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#Search
    width 100%
    height 100%
    background white
    .heardRongQi
        width 100%
        height 40px
        background white
        position fixed
        left 0
        top 0
        padding 0 20px
        padding-top 10px 
        .span1
            position absolute
            left 25px
            top 17px
        .heard-search
            width 70%
            height 30px
            background #EDEDED
            font-size 14px
            line-height 30px
            color #999999
            padding-left 25px
            float left
            outline none
        .x
            display inline-block
            width 30px
            height 30px
            position absolute
            left 7.35rem
            top 10px
            border 1px solid #EDEDED
            text-align center
            line-height 30px
            font-size 20px
            color red
            border-radius 50%
        .quxiao
            width 60px
            height 30px 
            float right 
            text-align center
            line-height 30px
            margin-right 20px 
            font-size 14px
            color #333333
    .search-content
        margin-top -30px 
        padding 0 20px
        .List
            width 100%
            height 100%
            .item 
                width 100%
                height 40px
        .active
            display none
        .ReMen
            .ReMen1
                width 100%
                height 40px
                color #9D9D9D
                font-size 14px
                line-height 40px
            .ReMen-List
                width 100%
                display flex
                flex-wrap wrap
                justify-content  space-between
                .ReMen-List-Item
                    padding 8px
                    border 1px solid #EAEAEA
                    margin-bottom 10px
                    margin-right 10px 
</style>
