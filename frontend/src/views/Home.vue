<template>
  <div class="container">
    <Nav marginTop="9.61vh" />
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
import Nav from "../components/Nav"
export default {
  components: {Nav}
};
</script>

<style lang="less" scoped>
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
  .shower {
    width: 80vw !important;
  }

  .shelter-right {
    flex: 0 !important;
  }

  .shelter-left {
    z-index: 1;

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

// 适配手机
@media screen and (max-width: 500px) and (min-width: 325px) {
  .shower {
    width: 85.65vw !important;
    height: 94vh !important;
  }

  .shelter-left {
    z-index: 1;

    .page-tips {
      bottom: 25.61vh !important;
      left: 49.06vw !important;

      h1 {
        font-size: 5.65vw !important;
      }

      h2 {
        font-size: 4.6vw !important;
      }
    }

    .hr-line {
      width: 49.08vw !important;
      left: auto !important;
      right: -3vw;
      bottom: 7.25vh !important;
      transform: rotate(145deg);
    }

    footer {
      width: 27.08vw !important;
      left: 73.56vw !important;
      min-height: 3.54vh !important;
    }
  }

  .shelter-right {
    flex: 0 !important;
  }
}

// 适配iphone5/SE特小机型
@media screen and (max-width: 325px) {
  .shower {
    width: 85.65vw !important;
    height: 94vh !important;
  }

  .shelter-left {
    z-index: 1;

    .page-tips {
      bottom: 25.61vh !important;
      left: 49.06vw !important;

      h1 {
        font-size: 5.65vw !important;
      }

      h2 {
        font-size: 4.6vw !important;
      }
    }

    .hr-line {
      width: 49.08vw !important;
      left: auto !important;
      right: -3vw;
      bottom: 7.25vh !important;
      transform: rotate(145deg);
    }

    footer {
      width: 17.08vw !important;
      left: 85.56vw !important;
      min-height: 3.54vh !important;
    }
  }

  .shelter-right {
    flex: 0 !important;
  }
}
</style>