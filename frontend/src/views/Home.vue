<template>
  <div>
    <div class="shelter">
      <div class="left">haha</div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.shelter {
  width: 100vw;
  height: 100vh;
  position: relative;

  .left,
  .right {
    height: 0;
    width: 20vw;
    position: absolute;
    top: 0;
  }

  .left {
    left: 0;
    border-bottom: 100vh solid white;
    border-right: 60vw solid transparent;
  }

  .right {
    right: 0;
    border-top: 100vh solid white;
    border-left: 60vw solid transparent;
  }
}
</style>