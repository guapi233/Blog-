const marked = require("marked");
const highlight = require("highlightjs");

var rendererMD = new marked.Renderer();

marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  },
}); // 基本设置

// const fs = require("fs");
// fs.readFile(`E:\\myBlog\\docs\\js\\essay\\01.md`, (error, data) => {
//   console.log(handler(data.toString()))
// })

function handler(text) {
  let result = {};
  text = text.split("-- divide --");

  result.title = text[0];
  result.sketch = text[1];
  result.content = text[2];

  for (let i in result) {
    result[i] = marked(result[i]);
  }

  result.otitle = text[0].replace("#", "");
  result.osketch = text[1];

  return result;
}

module.exports = handler;
