const gulp = require('gulp')
const config = require('../gulp.config')
const $ = require('gulp-load-plugins')()

gulp.task('shopify', () => {
  return gulp.src(config.src.shopify)
  .pipe($.changed(config.theme))
  .pipe(gulp.dest(config.theme))
})
