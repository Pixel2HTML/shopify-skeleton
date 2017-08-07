const gulp = require('gulp')
const watch = require('gulp-watch')
const config = require('../gulp.config')
const shopify = require('gulp-shopify-upload-with-callbacks')

const WE_CAN_DEPLOY = config.shopify.key && config.shopify.pass && config.shopify.shopName && config.shopify.themeId

const THEME_FILES = config.theme + '/{assets,layout,config,snippets,templates,locales,sections}/**/*'

const shopifyUpload = () => {
  shopify(
    config.shopify.key,
    config.shopify.pass,
    `${config.shopify.shopName}.myshopify.com`,
    config.shopify.themeId,
    {basePath: config.theme}
  )
}

gulp.task('deploy:watch', () => {
  return WE_CAN_DEPLOY
    ? watch(THEME_FILES)
      .pipe(shopifyUpload())
    : null
})

gulp.task('deploy', () => {
  return WE_CAN_DEPLOY
    ? gulp.src(THEME_FILES)
      .pipe(shopifyUpload())
    : null
})
