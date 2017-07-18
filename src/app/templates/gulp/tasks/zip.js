const gulp = require('gulp')
const config = require('../gulp.config')
const zip = require('gulp-zip')

gulp.task('zip', function () {
  var distFiles = [
    `${config.theme}/**`,
    `!${config.theme}`
  ]

  return gulp.src(distFiles, {base: '.'})
    .pipe(zip('theme.zip')).on('error', config.onError)
    .pipe(gulp.dest('releases'))
})
