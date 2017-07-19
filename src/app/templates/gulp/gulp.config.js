// We use this to read flags in the command line
const argv = require('yargs').argv
const production = argv.prod || argv.production

module.exports = {
  theme: './deploy',
  shopify: {
    key: process.env.SHOP_KEY,
    pass: process.env.SHOP_PASSWORD,
    secret: process.env.SHOP_SECRET,
    themeId: process.env.SHOP_THEME_ID,
    shopName: process.env.SHOP_NAME
  },
  src: {
    styles: './src/styles',
    scripts: './src/scripts',
    fonts: [
      './src/fonts/**/*'
    ],
    icons: [
      './src/icons/**/*'
    ],
    images: [
      './src/images/**/*'
    ],
    shopify: [
      './src/theme/**/*'
    ]
  },
  scriptVendors: [
    'jquery'
  ],
  onError: function (error) {
    console.log(error.toString())
    this.emit('end')
  },
  production: !!production
}
