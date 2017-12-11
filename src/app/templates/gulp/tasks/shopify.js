const gulp = require('gulp')
const config = require('../gulp.config')
const $ = require('gulp-load-plugins')()

const createShopifyTask = name => {
  gulp.task(`shopify:${name}`, () =>
    gulp.src(config.src.theme + `/${name}/**/*`)
      .pipe($.changedInPlace())
      .pipe(gulp.dest(config.theme + `/${name}`))
  )
}

const flattenShopifyTask = name => {
  gulp.task(`shopify:${name}`, () =>
    gulp.src(config.src.theme + `/${name}/**/*`)
      .pipe($.changedInPlace())
      .pipe($.flatten())
      .pipe(gulp.dest(config.theme + `/${name}`))
  )
}

config.shopify.flatFolders.forEach(createShopifyTask)
config.shopify.multiLevelFolders.forEach(flattenShopifyTask)

gulp.task('shopify', () =>
  gulp.src(config.src.shopify)
    .pipe(gulp.dest(config.theme))
)
