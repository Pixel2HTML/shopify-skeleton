import Yeoman from 'yeoman-generator'
import cowsay from 'cowsay-browser'
import chalk from 'chalk'
import { shopifyCoreFiles } from '../../lib/filesToAssert'

class ShopifySkeleton extends Yeoman {
  sayHello () {
    const greeting = cowsay.say({
      text: 'Pixel2HTML Shopify Skeleton',
      f: 'www'
    })
    this.log(chalk.blue(greeting))
  }
  copyShopifyCoreFiles () {
    this.log(chalk.hex('#3E456C')('Copying Shopify Core Files Now...'))
    return shopifyCoreFiles.map(file => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file),
        {
          author: 'Pixel2HTML'
        }
      )
    })
  }
}

export default ShopifySkeleton
