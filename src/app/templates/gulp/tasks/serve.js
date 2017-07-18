const gulp = require('gulp')
const config = require('../gulp.config')
const browserSync = require('browser-sync')

function reload (done) {
  browserSync.reload()
  done()
}

gulp.task('browser-sync', () => {
  return browserSync.init({
    proxy: `https://${config.shopify.shopName}.myshopify.com`,
    startPath: `?preview_theme_id=${config.shopify.themeId}`,
    open: false,
    logConnections: true
  })
})

gulp.task('watch', done => {
  gulp.watch(config.src.fonts, gulp.series('fonts', reload))
  gulp.watch(config.src.icons, gulp.series('icons', reload))
  gulp.watch(config.src.styles + '/**/*', gulp.series('styles', reload))
  gulp.watch(config.src.scripts + '/**/*', gulp.series('scripts', reload))
  gulp.watch(config.src.images, gulp.series('images', reload))
  gulp.watch(config.src.shopify, gulp.series('shopify', reload))
  done()
})
