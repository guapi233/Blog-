<template>
  <div class="blog-container">
    <div class="blog-wrap">
      <div class="blog-left"></div>
      <div class="blog-right">
        <Nav />
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

<style scoped>
.blog-container {
  height: 100vh;
}

.blog-wrap {
  display: flex;
  height: 100%;
}

.blog-left {
  flex: 6;
  height: 100%;
  background: red;
}

.blog-right {
  flex: 4;
  height: 100%;
  background-color: blue;
}
</style>