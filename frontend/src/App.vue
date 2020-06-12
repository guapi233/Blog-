<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import "./assets/css/base.less";

*:not(pre):not(code) {
  margin: 0;
  padding: 0;
  letter-spacing: 1.5px;
}

div,
nav,
main,
section, ul, li {
  box-sizing: border-box;
}
</style>
