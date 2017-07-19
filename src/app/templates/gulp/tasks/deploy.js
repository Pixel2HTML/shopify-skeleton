const gulp = require('gulp')
const watch = require('gulp-watch')
const config = require('../gulp.config')
const shopify = require('gulp-shopify-upload-with-callbacks')

gulp.task('deploy', () => {
  return watch(config.theme + '/{assets|layout|config|snippets|templates|locales|sections}/**/*')
    .pipe(shopify(
      config.shopify.key,
      config.shopify.pass,
      `${config.shopify.shopName}.myshopify.com`,
      config.shopify.themeId,
      {basePath: config.theme}
    ))
})
