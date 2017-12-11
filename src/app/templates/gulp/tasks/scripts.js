const gulp = require('gulp')
const config = require('../gulp.config')
const webpack = require('webpack')
const wp = require('webpack-stream')
const webpackConfig = require('../../webpack.config')

gulp.task('scripts', () =>
  gulp.src(config.src.scripts + '/index.js')
    .pipe(wp(webpackConfig, webpack)).on('error', config.onError)
    .pipe(gulp.dest(config.theme + '/assets'))
)
