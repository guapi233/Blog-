<template>
  <div class="blog-container">
    <div class="blog-wrap">
      <div class="blog-left">
        <div class="blog-list">
          <BlogItem v-for="item in blogList" :key="item.id" :blogItem="item" />
        </div>
        <!-- <div class="blog-slider" style="width:26.04vw;height:3.2vh;background:red;margin-left:5vw;"></div> -->
        <Pagination style="margin-left:5vw;" :count="totalPage" @turn="changeNow" />
      </div>

      <div class="blog-right">
        <Nav marginTop="3vh" :atRight="false" class="blog-nav-toRight" />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import BlogItem from "../components/BlogItem";
import Pagination from "../components/Pagination";
export default {
  components: { Nav, BlogItem, Pagination },
  data() {
    return {
      blogList: [],
      nowPage: 1,
      totalPage: 0
    };
  },
  methods: {
    changeNow(nowPage) {
      this.nowPage = nowPage;
    },
    async getList() {
      let blogList = await this.$axios.get(`/blog/?pagination=${this.nowPage}`);
      if (blogList.data.isError) {
        alert(blogList.data.message);
      } else {
        this.blogList = blogList.data.data;
        this.nowPage === 1 &&
          (this.totalPage = blogList.data.data[0].totalCount / 3);
      }
    }
  },
  async created() {
    await this.getList();
  },
  watch: {
    nowPage() {
      this.getList();
    }
  }
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
  overflow: hidden;
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
  .blog-wrap {
    display: block !important;
    position: relative;
  }

  .blog-list {
    overflow: auto;
    height: 100vh;
    padding-bottom: 20vh;
    padding: 0 10vw 20vh;
  }

  .blog-left {
    height: 100%;
    position: relative;
    margin: 15vh auto 0;
  }

  .blog-right {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto !important;
  }

  .blog-slider {
    display: none;
  }
}

// 适配手机
@media screen and (max-width: 500px) {
  .blog-wrap {
    display: block !important;
    position: relative;
  }

  .blog-list {
    overflow: auto;
    height: 100vh;
    padding-bottom: 20vh;
    padding: 0 10vw 20vh;
  }

  .blog-left {
    height: 100%;
    position: relative;
    margin: 15vh auto 0;
  }

  .blog-right {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto !important;
  }

  .blog-slider {
    display: none;
  }
}
</style>

<style>
.blog-nav-toRight > div {
  margin-left: auto;
}

/* 适配手机 */
@media screen and (max-width: 500px) {
  .blog-nav-toRight > div {
    margin-left: 0 !important;
  }
}
</style>