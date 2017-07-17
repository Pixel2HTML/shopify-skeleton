'use strict'
// We use this to read flags in the command line
const argv = require('yargs').argv
// Add your conditions here 💅
const production = argv.prod || argv.production

module.exports = {
  src: {
    scssMain: [
      './src/styles/main.scss'
    ],
    scssFonts: [
      './src/styles/fonts.scss'
    ],
    scssVendors: [
      './src/styles/vendor.scss'
    ],
    jsMain: './src/scripts/app.js',
    fonts: [
      './src/fonts/**/*'
    ]
  },
  dist: {
    assets: './deploy/assets'
  },
  scriptVendors: [
    'jquery'
  ],
  onError: function (error) {
    console.log(error.toString())
    this.emit('end')
  },
  production: !!production
}
