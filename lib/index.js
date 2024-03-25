const fs = require('fs')

module.exports = async (files) => {
  const filename = files[0]
  const statObj = fs.statSync(filename)
  if (statObj.size > 1024 * 200) {
    throw new Error(`${filename} 图片大小不能大于200kb!`)
  }
}
