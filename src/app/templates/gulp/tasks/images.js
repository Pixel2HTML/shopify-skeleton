var gulp = require('gulp')
var config = require('../gulp.config')

gulp.task('images', function () {
  return gulp.src(config.src.images)
    .pipe(gulp.dest(config.theme + '/assets'))
})
