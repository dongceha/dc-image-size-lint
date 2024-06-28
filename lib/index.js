const fs = require('fs')

module.exports = (files) => {
  const sizeTag = files[0]
  let fileSize = 200
  if (/--size=/.test(sizeTag)) {
    files.shift()
    const size = Number(sizeTag.split('=')[1])
    if (!isNaN(size)) {
      fileSize = size
    }
  }

  for (let i = 0; i < files.length; i++) {
    const filename = files[i]
    // if (/\.(png|jpe?g|gif|svg|webp)(\?.*)?$/.test(filename)) {
      const statObj = fs.statSync(filename)
      if (statObj.size > 1024 * fileSize) {
        throw new Error(`${filename} 大小不能大于${fileSize}kb!`)
      }
    // }
  }
}
