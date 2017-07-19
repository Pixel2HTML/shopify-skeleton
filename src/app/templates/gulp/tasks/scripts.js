const gulp = require('gulp')
const $ = require('gulp-load-plugins')()
const when = require('gulp-if')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const babel = require('babelify')

const config = require('../gulp.config')
const transform = [ babel ]
const vendors = config.scriptVendors
const production = config.production
const destination = config.theme + '/assets'

gulp.task('vendor:scripts', () => {
  const b = browserify({
    debug: !production
  })

  // require all libs specified in vendors array
  vendors.forEach(lib => {
    b.require(lib)
  })

  return b.bundle()
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(when(!production, $.sourcemaps.init({ loadMaps: true })))
    .pipe(when(!production, $.sourcemaps.write()))
    // All production stuff here
    // Rename file to .min and uglify that stuff
    .pipe(when(production, $.uglify())).on('error', config.onError)
    .pipe(gulp.dest(destination))
})

gulp.task('main:scripts', () => {
  return browserify({
    entries: config.src.scripts + '/app.js',
    debug: !production
  })
    .external(vendors)
    .transform(transform)
    .bundle().on('error', config.onError)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(when(!production, $.sourcemaps.init({ loadMaps: true })))
    .pipe(when(!production, $.sourcemaps.write()))
    // All production stuff here
    // Rename file to .min and uglify that stuff
    .pipe(when(production, $.rename({suffix: '.min'})))
    .pipe(when(production, $.uglify())).on('error', config.onError)
    .pipe(gulp.dest(destination))
})

gulp.task('scripts', gulp.parallel('vendor:scripts', 'main:scripts'))
