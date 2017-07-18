var gulp = require('gulp')
var config = require('../gulp.config')

var del = require('del')

gulp.task('clean', function () {
  return del([config.theme])
})
