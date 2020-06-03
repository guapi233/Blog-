const { exec } = require("../db/mysql")
const marked = require("../utils/marked")

/**
 * 获取博客列表
 * @param {*} keyword 关键字
 */
async function getList(keyword) {
  let sql = "select * from blog where 1=1 "

  keyword && (sql += `and title like '%${keyword}%' `)

  sql += "and state=1 "
  sql += "order by createtime desc;"

  let result = await exec(sql)

  return result
}


/**
 * 获取博客详情
 * @param {*} id 博客id
 */
async function getDetail (id) {
  if (!id) return null

  let sql = `select * from blog where id=${id}`

  let result = await exec(sql)

  return result[0]
}
 

/**
 * 新建博客
 * @param {*} blogObj 文章相关内容
 */
async function newBlog(blogObj) {
  let title = blogObj.title, content = blogObj.content, createtime = blogObj.createtime
  
  if (!title || !content || !createtime) return false

  // 解析markdown
  content = marked(content)

  let sql = `insert into blog (title, content, createtime) values('${title}', '${content}', ${createtime})`

  let result = await exec(sql)

  return result.insertId
}


/**
 * 更新博客
 * @param {*} id 需要被更新的id
 * @param {*} content 新内容
 * @param {*} title 新标题
 */
async function updateBlog(id, title, content) {
  let sql = `update blog set title='${title}', content='${content}' where id=${id}`

  let result = await exec(sql)

  if (result.affectedRows > 0) return true
  return false
}


/**
 * 删除博客
 * @param {*} id 需要被删除的博客
 */
async function delBlog(id) {
  let sql = `update blog set state=0 where id=${id}`

  let result = await exec(sql)
  
  if (result.affectedRows > 0) return true
  return false
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}