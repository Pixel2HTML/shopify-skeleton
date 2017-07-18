import Yeoman from 'yeoman-generator'
import cowsay from 'cowsay-browser'
import chalk from 'chalk'
import filesToAssert from '../../lib/filesToAssert'

class ShopifySkeleton extends Yeoman {
  sayHello () {
    const greeting = cowsay.say({
      text: 'Pixel2HTML Shopify Skeleton',
      f: 'www'
    })
    this.log(chalk.blue(greeting))
  }

  mustHavePrompts () {
    const generalOverview = cowsay.say({
      text: 'A few general purpose questions now...',
      cow: 'vader'
    })
    this.log(chalk.red(generalOverview))
  }

  setShopNowPrompt () {
    return this.prompt([
      {
        type: 'confirm',
        name: 'setShopNow',
        message: 'Do you want to set up your shop credentials now?',
        default: true
      }
    ]).then(props => {
      this.options.setShopNow = props.setShopNow
    })
  }

  copyShopifyCoreFiles () {
    return filesToAssert.shopifyCoreFiles.map(file => {
      this.fs.copyTpl(
        this.templatePath(`theme/${file}`),
        this.destinationPath(`src/theme/${file}`),
        {
          author: 'Pixel2HTML'
        }
      )
    })
  }

  copyBaseFiles () {
    return filesToAssert.baseFiles.map(file => {
      this.fs.copyTpl(
        this.templatePath(`base/${file}`),
        this.destinationPath(file),
        {
          author: 'Pixel2HTML'
        }
      )
    })
  }

  copyGulpFiles () {
    return filesToAssert.gulpFiles.map(file => {
      this.fs.copyTpl(
        this.templatePath(`gulp/${file}`),
        this.destinationPath(`gulp/${file}`),
        {
          author: 'Pixel2HTML'
        }
      )
    })
  }

  copyStaticFiles () {
    return filesToAssert.staticFiles.map(file => {
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
