const fs = require('fs-extra')
const path = require('path')

const SRC = path.join(__dirname, '../src')
const DIST = path.join(__dirname, '../generator/app')

fs.copy(SRC, DIST)
  .then(() => {
    console.log('Success')
  })
  .catch(err => {
    console.error(err)
  })
