var gulp = require('gulp')
var config = require('../config')
var browserSync = require('browser-sync')

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
  done()
})

gulp.task('serve', gulp.parallel('browser-sync', 'watch'))
