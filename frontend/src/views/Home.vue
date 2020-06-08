<template>
  <div>
    <nav>
      <div class="nav-wrap">
        <span class="nav-item">主页</span>
        <span class="nav-item" @click="openShelter = true">博客</span>
        <span class="nav-item">归档</span>
        <span class="nav-item">GITHUB</span>
        <span class="nav-item">关于我</span>
      </div>
    </nav>
    <div class="shelter">
      <div class="shelter-wrap">
        <div class="shelter-left">
          <div class="page-tips">
            <h1>你好</h1>
            <h2>欢迎来到我的个人博客</h2>
          </div>

          <div class="hr-line"></div>

          <footer>
            <div class="left">©2019 山下铸一</div>
            <div class="right"></div>
          </footer>
        </div>

        <div class="shelter-right">
          <div class="shower"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
nav {
  width: 100vw;
  margin-top: 9.61vh;
  padding: 0 5.34vh;

  .nav-wrap {
    width: 26.04vw;
    height: 10.67vh;
    line-height: 10.67vh;
    text-align: center;
    background-color: @titleColor;
    margin-left: auto;
    padding-left: 1.56vw;

    .nav-item {
      margin-right: 1.56vw;
      font-size: 1.04vw;
      color: #fff;
      font-weight: 700;
    }
  }
}

.shelter {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  .shelter-wrap {
    display: flex;
  }

  .shelter-left {
    flex: 6;
    height: 100vh;
    position: relative;
    .page-tips {
      position: absolute;
      bottom: 25.61vh;
      left: 14.06vw;
      line-height: 2;

      h1, h2 {
        color: @titleColor;
      }

      h1 {
        font-size: 3.65vw;
      }

      h2 {
        font-size: 2.6vw;
      }
    }

    .hr-line {
      height: 1px;
      width: 52.08vw;
      background: @assistColor;
      position: absolute;
      left: 0;
      bottom: 12.25vh;
    }

    footer {
      width: 52.08vw;
      position: absolute;
      bottom: 0px;
      left: 14.06vw;
      min-height: 8.54vh;

      .left {
        color: @assistColor;
        font-size: 0.83vw;
      }
    }
  }

  .shelter-right {
    flex: 4;
    height: 100vh;
    position: relative;

    .shower {
      width: 28.65vw;
      height: 93.6vh;
      background: url("../assets/img/Lily.jpg") center center/cover;
      position: absolute;
      right: 15.1vw;
      top: 6.4vh;
    }
  }
}
</style>