const gulp = require('gulp')
const watch = require('gulp-watch')
const config = require('../gulp.config')
const shopify = require('gulp-shopify-theme')
const theme = shopify.create()

const shopifyConfig = {
  api_key: config.shopify.key,
  password: config.shopify.pass,
  shared_secret: config.shopify.secret,
  shop_name: config.shopify.shopName,
  theme_id: config.shopify.themeId,
  root: process.cwd() + '/deploy'
}

const CAN_DEPLOY = () => {
  const validKeys = Object.keys(shopifyConfig).filter(key => shopifyConfig[key])
  return validKeys.length > 0
}

const themeFiles = config.theme + '/{assets,layout,config,snippets,templates,locales,sections}/**/*.*'

gulp.task('theme:init', done => {
  if (CAN_DEPLOY()) theme.init(shopifyConfig)
  done()
})

gulp.task('theme:watch', () => {
  return CAN_DEPLOY()
  ? watch(themeFiles)
    .pipe(theme.stream())
    .on('error', config.onError)
  : null
})

gulp.task('theme:upload', () => {
  return CAN_DEPLOY()
  ? gulp.src(themeFiles)
    .pipe(theme.stream())
    .on('error', config.onError)
  : null
})

gulp.task('deploy', gulp.series('theme:init', 'theme:upload'))

// Danger Zone 💀
gulp.task('theme:purge', function (done) {
  theme.purge()
  done()
})
gulp.task('kill:theme', gulp.series('theme:init', 'theme:purge'))
