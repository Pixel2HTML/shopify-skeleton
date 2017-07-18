const gulp = require('gulp')
const config = require('../gulp.config')

gulp.task('shopify', () => {
  return gulp.src(config.src.shopify)
  .pipe(gulp.dest(config.theme))
})
