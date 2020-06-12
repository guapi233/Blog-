<template>
  <nav :style="{ marginTop }">
    <div class="nav-wrap" :style="isRight">
      <router-link to="/" class="nav-item nav-show" tag="div">
        <span>主</span>
        <span>页</span>
      </router-link>
      <router-link to="/blog" class="nav-item" tag="div">
        <span>博</span>
        <span>客</span>
      </router-link>
      <div @click="toGitHub" class="nav-item">
        <span>产</span>
        <span>出</span>
      </div>
      <router-link to="/about" class="nav-item" tag="div">
        <span>关</span>
        <span>于</span>
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
  computed: {
    isRight() {
      return this.atRight ?{marginLeft: "auto"} : {}
    }
  },
  methods: {
    toGitHub() {
      window.open('https://github.com/guapi233')
    }
  }
};
</script>

<style lang="less" scoped>
nav {
  width: 100%;
  padding: 0 5.34vh;

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
      }
    }
  }
}

// 适配手机
@media screen and (max-width: 500px) and (min-width: 325px) {
  .nav-item {
    display: none;
  }

  .nav-show {
    display: block;
  }
}

// 适配iphone5/SE特小机型
@media screen and (max-width: 325px) {
  .nav-item {
    display: none;
  }

  .nav-show {
    display: block;
  }
}
</style>