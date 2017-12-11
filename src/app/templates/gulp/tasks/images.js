const gulp = require('gulp')
const config = require('../gulp.config')
const $ = require('gulp-load-plugins')()

gulp.task('images', function () {
  return gulp.src(config.src.images)
    .pipe($.changedInPlace())
    .pipe($.rename(config.flatten))
    .pipe($.rename({ dirname: '', prefix: '' }))
    .pipe(gulp.dest(config.theme + '/assets'))
})
