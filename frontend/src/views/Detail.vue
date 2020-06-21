<template>
  <div class="detail-container">
    <div class="detail-wrap">
      <div class="detail-left">
        <div class="back">
          <img @click="backHome" src="../assets/img/back.svg" class="back-to-home" alt />
        </div>
        <div class="content">
          <div v-html="blog.title"></div>
          <p>{{ blog.createtime | timeFormate }}</p>
          <div v-html="blog.sketch"></div>
          <div v-html="blog.content"></div>
        </div>
      </div>
      <div class="detail-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {}
    };
  },
  methods: {
    backHome() {
      this.$router.push("blog");
    },
    getContent() {
      let content = localStorage.getItem("blog");

      if (this.$route.params.blog) {
        this.blog = this.$route.params.blog;
      } else {
        if (content) {
          this.blog = JSON.parse(content);
        } else if (!content && this.$route.params.blog) {
          localStorage.setItem("blog", JSON.stringify(this.$route.params.blog));
          this.blog = this.$route.params.blog;
        }
      }

      console.log(this.blog);
    }
  },
  filters: {
    timeFormate(time) {
      let createTime = new Date(Number(time));
      return `${createTime.getFullYear()}-${
        createTime.getMonth() + 1 > 9
          ? createTime.getMonth() + 1
          : `0${createTime.getMonth() + 1}`
      }-${
        createTime.getDate() > 9
          ? createTime.getDate()
          : `0${createTime.getDate()}`
      }`;
    }
  },
  created() {
    this.getContent();
  }
};
</script>

<style lang="less" scoped>
@import url("../assets/css/highlight.css");
.detail-container {
  min-height: 100vh;
}

.detail-wrap {
  height: 100%;
  display: flex;
}

.detail-left {
  flex: 7;

  .back {
    width: 80%;
    margin: 0 auto;
    padding-left: 50px;
    margin-top: 50px;

    .back-to-home {
      height: 3vh;
      transform: rotate(180deg);
      cursor: pointer;
    }
  }

  .content {
    font-size: 18px;
    .createtime {
      color: @assistColor;
    }
  }
}

.detail-right {
  flex: 3;
}

// 平板端适配
@media screen and (max-width: 900px) and (min-width: 768px) {
  .detail-right {
    flex: 0 !important;
  }

  .back {
    padding-left: 0 !important;
  }
}

// 手机端适配
@media screen and (max-width: 500px) {
  .content {
    font-size: 14px !important;
  }

  .detail-right {
    flex: 0 !important;
  }

  .back {
    padding-left: 0 !important;
  }
}
</style>