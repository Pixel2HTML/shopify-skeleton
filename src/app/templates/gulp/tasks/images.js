const gulp = require('gulp')
const config = require('../gulp.config')
const $ = require('gulp-load-plugins')()

gulp.task('images', function () {
  return gulp.src(config.src.images)
    .pipe($.changed(config.theme + '/assets', {hasChanged: $.changed.compareSha1Digest}))
    .pipe(gulp.dest(config.theme + '/assets'))
})
