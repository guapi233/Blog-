<template>
  <div class="blog-item">
    <div class="hr-top"></div>
    <router-link to="/detail" tag="p" class="blog-title">{{ blogItem.otitle.trim() }}</router-link>
    <p class="blog-createtime">{{ blogItem.createtime }}</p>
    <p class="blog-content">{{ blogItem.osketch.trim() }}</p>
    <router-link :to="{name: 'Detail', params: {blog: blogItem}}"  class="blog-detail">阅读全文</router-link>
  </div>
</template>

<script>
export default {
  props: {
    blogItem: {
      type: Object,
      default: {}
    }
  }
};
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
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
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
    font-size: 16px;
    min-height: 9.82vh;
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

// 适配手机
@media screen and (max-width: 500px) {
  .hr-top {
    width: 6vw !important;
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