const Generator = require('yeoman-generator')

// Very serious dependencies
const cowsay = require('cowsay-browser')
const chalk = require('chalk')

class ShopifySkeleton extends Generator {
  sayHello () {
    const greeting = cowsay.say({
      text: 'Pixel2HTML Shopify Skeleton',
      f: 'www'
    })
    this.log(chalk.blue(greeting))
  }
}

module.exports = ShopifySkeleton
