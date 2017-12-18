const gulp = require('gulp')
const config = require('../gulp.config')
const browserSync = require('browser-sync')
const openBrowser = require('react-dev-utils/openBrowser')
const WebpackDevServerUtils = require('react-dev-utils/WebpackDevServerUtils')
const {prepareUrls, choosePort} = WebpackDevServerUtils

const DEFAULT_PORT = 3000
const HOST = '0.0.0.0'
const protocol = 'https'

const fakeCert = require('create-cert-files')()

gulp.task('browser-sync', done => {
  choosePort(HOST, DEFAULT_PORT)
    .then(port => {
      if (port === null) {
        return
      }
      const urls = prepareUrls(protocol, HOST, port)
      browserSync.init({
        port,
        open: false,
        logConnections: true,
        logPrefix: 'Pixel2Html',
        proxy: `https://${config.shopify.shopName}.myshopify.com`,
        startPath: `?preview_theme_id=${config.shopify.themeId}`,
        reloadDebounce: 2000,
        injectChanges: false,
        https: {
          key: fakeCert.key,
          cert: fakeCert.cert
        }
      })
      if (openBrowser(urls.localUrlForBrowser)) {
        openBrowser(urls.localUrlForBrowser)
      } else {
        openBrowser(urls.localUrlForBrowser + `?preview_theme_id=${config.shopify.themeId}`)
      }
      done()
    })
})
