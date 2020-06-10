<template>
  <nav>
    <div class="nav-wrap">
      <div class="nav-item nav-show">
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
      .githide {
        display: none;
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