<template>
  <!--购物车-->
      <div id="GouWuChe">
        <!--购物车头部-->
          <div class="GouWuChe-heart">
            <div class="GouWuChe-heart-top">
              <span>购物车</span>
              <a href="javascript:">领劵</a>
            </div>
            <div class="GouWuChe-heart-bottom">
              <ul class="GouWuChe-heart-bottom-List">
                <li class="GouWuChe-heart-bottom-Item">
                  <span><i class="icon-dianying iconfont"></i></span>
                  <span>网易自营品牌</span>
                </li>
                <li class="GouWuChe-heart-bottom-Item">
                  <span><i class="icon-dianying iconfont"></i></span>
                  <span>30天无忧退货</span>
                </li>
                <li class="GouWuChe-heart-bottom-Item">
                  <span><i class="icon-dianying iconfont"></i></span>
                  <span>42小时快速退款</span>
                </li>
              </ul>
            </div>
          </div>
        <!--购物车中间部分-->
          <div class="GouWuChe-content">
            <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
            <div class="GouWuChe-content-denglu">
              <span>去添加点啥吧</span>
              <button @click.prevent="$router.replace('/login')">登录</button>
            </div>
          </div>
      </div>

</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #GouWuChe
    width 100%
    height 50%
    .GouWuChe-heart
      position fixed
      left 0
      top 0
      width 100%
      height 80px
      .GouWuChe-heart-top
        width 100
        height 40px
        background white
        display flex
        padding 0 20px
        justify-content space-between
        align-items  center
        span
          font-size 16px
        a
          color red
          font-size 16px
      .GouWuChe-heart-bottom
        width 100%
        height 40px
        .GouWuChe-heart-bottom-List
          width 100%
          height 40px
          display flex
          background white
          .GouWuChe-heart-bottom-Item
            width 32%
            height 40px
            font-size 12px
            text-align center
            line-height 40px
            .iconfont
              color red
    .GouWuChe-content
      width 300px
      height 300px
      margin 100px auto
      display flex
      flex-direction column
      justify-content center
      align-items center
      img
        width 35%
        height 120px
      .GouWuChe-content-denglu
        display flex
        flex-direction column
        width 100%
        height 80px
        align-items center
        span
          color darkgrey
          font-size 14px
        button
          width 200px
          background darkred
          height 40px
          border 1px solid darkred
          margin-top 30px
          border-radius 10px
          color white
          font-weight bold
</style>
