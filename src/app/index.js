import Yeoman from 'yeoman-generator'
import cowsay from 'cowsay-browser'
import chalk from 'chalk'

class ShopifySkeleton extends Yeoman {
  sayHello () {
    const greeting = cowsay.say({
      text: 'Pixel2HTML Shopify Skeleton',
      f: 'www'
    })
    this.log(chalk.blue(greeting))
  }
}

export default ShopifySkeleton
