import Generator from 'yeoman-generator'

// Very serious dependencies
import cowsay from 'cowsay-browser'
import chalk from 'chalk'

class ShopifySkeleton extends Generator {
  sayHello () {
    const greeting = cowsay.say({
      text: 'Pixel2HTML Shopify Skeleton',
      f: 'www'
    })
    this.log(chalk.blue(greeting))
  }
}

export default ShopifySkeleton
