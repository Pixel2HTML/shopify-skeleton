const gulp = require('gulp')
const config = require('../gulp.config')
const webpack = require('webpack')
const wp = require('webpack-stream')
const webpackConfig = require('../../webpack.config')
const $ = require('gulp-load-plugins')()

gulp.task('webpack', () =>
  gulp.src(config.src.scripts + '/index.js')
    .pipe(wp(webpackConfig, webpack)).on('error', config.onError)
    .pipe(gulp.dest(config.theme + '/assets'))
)

gulp.task('legacy', () =>
  gulp.src(config.src.scripts + '/__legacy__/*.js')
    .pipe($.concat('js_libs.js'))
    .pipe($.uglify())
    .pipe(gulp.dest(config.theme + '/assets'))
)

gulp.task('scripts', gulp.parallel('webpack', 'legacy'))
