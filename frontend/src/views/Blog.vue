<template>
  <div class="blog-container">
    <div class="blog-wrap">
      <div class="blog-left">
        <div class="blog-list">
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
        <div
          class="slider"
          style="width:26.04vw;height:3.2vh;background:red;margin-left:5vw;"
        ></div>
      </div>

      <div class="blog-right">
        <Nav marginTop="3vh" />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import BlogItem from "../components/BlogItem"
export default {
  components: { Nav, BlogItem }
};
</script>

<style lang="less" scoped>
.blog-list {
  margin-top: 10vh;
  padding: 0 5vw;


}

.blog-container {
  height: 100vh;
}

.blog-wrap {
  display: flex;
  height: 100%;
}

.blog-left {
  flex: 7;
  height: 100%;
  position: relative;
}

.blog-right {
  flex: 3;
  height: 100%;
}

// 适配平板
@media screen and (max-width: 1200px) and (min-width: 768px) {

}
</style>