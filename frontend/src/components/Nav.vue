<template>
  <nav :style="{ marginTop }">
    <div class="nav-wrap" :style="isRight">
      <!-- 主页 -->
      <router-link to="/" class="nav-item" tag="div">
        <span>主</span>
        <span>页</span>
        <i class="iconfont icon-circle active-item"></i>
      </router-link>
      <!-- 博客页 -->
      <router-link to="/blog" class="nav-item" tag="div">
        <div class="click-listener" @click="showSearcher">
          <span>博</span>
          <span>客</span>
          <i class="iconfont icon-search active-item search-item"></i>
        </div>
        <!-- 检索框 -->
        <div class="search-wrap" v-if="searcherShow">
          <input type="text" />
        </div>
      </router-link>
      <!-- GitHub -->
      <div @click="toGitHub" class="nav-item">
        <span>产</span>
        <span>出</span>
      </div>
      <!-- 关于页 -->
      <router-link to="/about" class="nav-item" tag="div">
        <span>关</span>
        <span>于</span>
        <i class="iconfont icon-circle active-item"></i>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    marginTop: {
      type: String,
      default: "0"
    },
    atRight: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      searcherShow: false
    };
  },
  computed: {
    isRight() {
      return this.atRight ? { marginLeft: "auto" } : {};
    }
  },
  methods: {
    toGitHub() {
      window.open("https://github.com/guapi233");
    },
    showSearcher() {
      if (this.$router.currentRoute.fullPath === "/blog") {
        this.searcherShow = !this.searcherShow;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.router-link-exact-active i {
  display: inline !important;
}

nav {
  width: 100%;
  padding: 0 5.34vh;
  user-select: none;

  .nav-wrap {
    width: 26.04vw;
    height: 10.67vh;
    line-height: 10.67vh;
    text-align: center;
    background-color: @titleColor;
    padding: 0 1.6vw;
    display: flex;
    justify-content: center;

    .nav-item {
      flex: 1;
      font-size: 1.04vw;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
      position: relative;
      z-index: 0;

      .active-item {
        color: #27ae60;
        position: absolute;
        margin-top: -10px;
        margin-left: -10px;
        transform: rotate(165deg);
        z-index: -1;
        display: none;
      }

      .search-item {
        transform: rotate(0deg);
        font-size: 18px;
      }

      .search-wrap {
        position: absolute;
      }

      .click-listener {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
  }
}

// 适配平板
@media screen and (max-width: 1200px) and (min-width: 768px) {
  nav {
    .nav-wrap {
      width: 35.04vw;
      height: 10.67vh;
      justify-content: space-evenly;
      .nav-item {
        display: flex;
        flex-direction: column;
        font-size: 2.04vw !important;
        line-height: 1.5;
        justify-content: center;

        .active-item {
          margin-top: -1.95vh !important;
          margin-left: 3.91vw !important;
        }

        .click-listener {
          display: flex !important;
          justify-content: center;
          flex-direction: column;
        }

        .search-wrap {
          margin-top: 1.5vh;
        }
      }
    }
  }
}

// 适配手机
@media screen and (max-width: 500px) {
  .nav-item {
    display: none;

    .search-wrap {
      top: 0;
      left: 30vw;
    }
  }

  .nav-show {
    display: block;
  }

  .router-link-exact-active {
    display: block !important;
  }
}
</style>