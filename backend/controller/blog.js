const { exec } = require("../db/mysql");
const handler = require("../utils/marked");

/**
 * 获取博客列表
 * @param {*} keyword 关键字
 */
async function getList(keyword, pagination) {
  let sql = "select * from blog where 1=1 ";

  keyword && (sql += `and title like '%${keyword}%' `);

  sql += "and state=1 ";
  sql += "order by createtime desc ";

  pagination && (sql += `limit ${(pagination - 1) * 3}, 3; `);

  let result = await exec(sql);

  if (pagination == 1) {
    result[0].totalCount = await exec(`select count(id) as count from blog`);
    result[0].totalCount = result[0].totalCount[0].count;
  }

  return result;
}

/**
 * 获取博客详情
 * @param {*} id 博客id
 */
async function getDetail(id) {
  if (!id) return null;

  let sql = `select * from blog where id=${id}`;

  let result = await exec(sql);

  return result[0];
}

/**
 * 新建博客
 * @param {*} blogObj 文章相关内容
 */
async function newBlog(blogObj, createtime) {
  // 解析markdown
  blogObj = handler(blogObj);

  let title = blogObj.title,
    content = blogObj.content,
    sketch = blogObj.sketch,
    otitle = blogObj.otitle,
    osketch = blogObj.osketch;

  if (!title || !sketch || !content || !createtime || !otitle || !osketch)
    return false;

  let sql = `insert into blog (title, otitle, sketch, osketch, content, createtime) values('${title}', '${otitle}', '${sketch}', '${osketch}', '${content}', '${createtime}')`;
  console.log(sql);
  let result = await exec(sql);

  return result.insertId;
}

/**
 * 更新博客
 * @param {*} id 需要被更新的id
 * @param {*} content 新内容
 * @param {*} title 新标题
 */
async function updateBlog(id, title, content) {
  let sql = `update blog set title='${title}', content='${content}' where id=${id}`;

  let result = await exec(sql);

  if (result.affectedRows > 0) return true;
  return false;
}

/**
 * 删除博客
 * @param {*} id 需要被删除的博客
 */
async function delBlog(id) {
  let sql = `update blog set state=0 where id=${id}`;

  let result = await exec(sql);

  if (result.affectedRows > 0) return true;
  return false;
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
