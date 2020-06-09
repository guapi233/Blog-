<template>
  <div>
    <nav>
      <div class="nav-wrap">
        <div class="nav-item">
          <span>主</span>
          <span>页</span>
        </div>
        <div class="nav-item">
          <span>博</span>
          <span>客</span>
        </div>
        <div class="nav-item">
          <span>归</span>
          <span>档</span>
        </div>
        <div class="nav-item githide">
          <span>G</span>
          <span>I</span>
          <span>T</span>
          <span>H</span>
          <span>U</span>
          <span>B</span>
        </div>
        <div class="nav-item">
          <span>关</span>
          <span>于</span>
        </div>
      </div>
    </nav>
    <div class="shelter">
      <div class="shelter-wrap">
        <div class="shelter-left">
          <img src="../assets/img/github.svg" alt class="github" />
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
    display: flex;
    justify-content: center;

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

    .github {
      display: none;
    }

    .page-tips {
      position: absolute;
      bottom: 25.61vh;
      left: 14.06vw;
      line-height: 2;

      h1,
      h2 {
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
      .githide {display: none;}
    }
  }

  .shower {
    width: 80vw !important;
  }

  .shelter-right {
    flex: 0 !important;
  }

  .shelter-left {
    z-index: 1;

    .github {
      display: block !important;
      position: absolute;
      bottom: 31.8vh;
      right: 35.6vw;
      width: 3.54vw;
    }

    .page-tips {
      bottom: 25.61vh !important;
      right: 19.06vw !important;
      left: auto !important;

      h1 {
        font-size: 4vw !important;
      }

      h2 {
        font-size: 3vw !important;
      }
    }

    .hr-line {
      height: 3px !important;
      width: 50.08vw !important;
      left: auto !important;
      right: -3vw !important;
      bottom: 11.25vh !important;
      transform: rotate(145deg);
    }

    footer {
      width: 21.58vw !important;
      left: auto !important;
      right: 0;
      min-height: 6.54vh !important;

      .left {
        font-size: 1.83vw !important;
      }
    }
  }
}
</style>