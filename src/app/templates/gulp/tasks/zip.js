const gulp = require('gulp')
const config = require('../gulp.config')
const zip = require('gulp-zip')
const pkg = require('../../package.json')
const version = pkg.version
const zipName = `v.${version}.zip`

const openBrowser = require('react-dev-utils/openBrowser')

gulp.task('zip', done => {
  var distFiles = [
    `${config.theme}/**`,
    `!${config.theme}`
  ]

  gulp.src(distFiles, {base: '.'})
    .pipe(zip(zipName)).on('error', config.onError)
    .pipe(gulp.dest('releases'))

  openBrowser(`https://${config.shopify.shopName}.myshopify.com/admin/themes`)
  done()
})
