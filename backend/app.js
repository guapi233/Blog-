const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const koaBody = require("koa-body");
const logger = require("koa-logger");
const cors = require("koa2-cors");
const path = require("path");

const index = require("./routes/index");
const blog = require("./routes/blog");

// error handler
onerror(app);

// middlewares
app.use(
  koaBody({
    multipart: true, // 支持文件上传
    encoding: "gzip",
    formidable: {
      uploadDir: path.join(__dirname, "public/blog/"), // 设置文件上传目录
      keepExtensions: true, // 保持文件的后缀
      maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
      onFileBegin: (name, file) => {
        // 文件上传前的设置
        if (file.type.split("/")[0] === "image") {
          file.path = path.join(
            __dirname,
            `public/images/${Date.now() + Math.floor(Math.random() * 100)}.${file.type.split("/")[1]}`
          );
        }
      },
    },
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public/"));

// cors
app.use(cors());

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(blog.routes(), blog.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
