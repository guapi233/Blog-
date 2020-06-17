const router = require("koa-router")();
const fs = require("fs");
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog");
const { SuccessModel, FailModel } = require("../utils/resModel");

router.prefix("/blog");

// 获取博客列表
router.get("/", async (ctx, next) => {
  let resData = await getList(ctx.request.query.keyword || "");

  ctx.body = new SuccessModel(resData, "成功获取列表");
});

// 博客详情
router.get("/detail", async (ctx, next) => {
  let resData = await getDetail(ctx.request.query.id);

  if (!resData) {
    ctx.body = new FailModel("查找失败");
    return;
  }

  ctx.body = new SuccessModel(resData, "找到了");
});

// 新建
router.post("/new", async (ctx, next) => {
  let data;
  try {
    data = fs.readFileSync(ctx.request.files.blog.path);
  } catch (e) {
    ctx.body = new FailModel("新建失败");
    return;
  }

  let result = await newBlog(data.toString(), ctx.request.body.createtime || Date.now());
  if (!result) {
    ctx.body = new FailModel("新建失败");
    return;
  }
  ctx.body = new SuccessModel(result, "新建成功");
});

// 修改博客
router.post("/modify", async (ctx, next) => {
  let result = await updateBlog(
    ctx.request.body.id,
    ctx.request.body.title,
    ctx.request.body.content
  );

  if (result) {
    ctx.body = new SuccessModel("更新成功");
    return;
  }

  ctx.body = new FailModel("更新失败");
});

// 删除博客
router.post("/del", async (ctx, next) => {
  let result = await delBlog(ctx.request.body.id);

  if (result) {
    ctx.body = new SuccessModel("删除成功");
    return;
  }

  ctx.body = new FailModel("删除失败");
});

module.exports = router;
