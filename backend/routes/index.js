const router = require("koa-router")();
const site = require("../config/site.json");

router.get("/", async (ctx, next) => {
  ctx.body = "index page";
});

router.post("/upimg", async (ctx, next) => {
  let result = ctx.request.files.img.path.split("\\");
  result = result[result.length - 1];

  ctx.body = `${site.name}/images/${result}`;
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

module.exports = router;
