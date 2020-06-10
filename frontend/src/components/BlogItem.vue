<template>
  <div class="blog-item">
    <div class="hr-top"></div>
    <p class="blog-title">林州别伦火今求</p>
    <p class="blog-createtime">2100-09-24</p>
    <p
      class="blog-content"
    >我就不太满意啊，就和他说你别老是扣分啊！他还挺委屈告诉我我段位太高（我这个赛季就打到王者拿了印记，最高不超过15星的段位)打不过。问我能不能输几把排位掉星耀。这样就不会扣分了。我一想反正印记拿了，段位不段位无所谓再加一心软就同意了。毕竟人家免费帮我肝了80级战令，肝到了就不让他玩了不太厚道况且我也不太玩这个游戏了（崩坏3真香）于是就同意了。结果好家伙，他一晚上，直接给我从王者低星五排安排到星耀5。</p>
    <a href="#" class="blog-detail">阅读全文</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.blog-item {
  margin-bottom: 6.4vh;
  .hr-top {
    width: 2vw;
    height: 2px;
    background: @titleColor;
    border-radius: 1vw;
  }

  .blog-title {
    margin-top: 2.13vh;
    color: @titleColor;
    font-size: 1.05vw;
    font-weight: 700;
  }

  .blog-createtime {
    text-align: right;
    color: @assistColor;
    margin-bottom: 0.53vh;
    padding: 0 0.53vh;
    font-size: 0.73vw;
    margin-top: -1.07vh;
  }

  .blog-content {
    color: @textColor;
    margin-bottom: 1.07vh;
    line-height: 1.5;
    font-size: 0.83vw;
    height: 9.82vh;
  }

  .blog-detail {
    color: @adornColor;
    text-decoration: none;
    font-size: 0.83vw;
  }
}

// 适配平板
@media screen and (max-width: 1200px) and (min-width: 768px) {
  .hr-top {
    width: 4vw !important;
  }

  .blog-title {
    font-size: 2.1vw !important;
  }

  .blog-createtime {
    font-size: 1.73vw !important;
  }

  .blog-content {
    font-size: 1.83vw !important;
    height: auto !important;
  }

  .blog-detail {
    font-size: 1.83vw !important;
  }
}
</style>