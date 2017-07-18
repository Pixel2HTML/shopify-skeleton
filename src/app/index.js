import Yeoman from 'yeoman-generator'
import cowsay from 'cowsay-browser'
import lolcatjs from 'lolcatjs'
import chalk from 'chalk'
import filesToAssert from '../../lib/filesToAssert'
import figlet from 'figlet'

class ShopifySkeleton extends Yeoman {
  constructor (args, opts) {
    super(args, opts)
    this.option('noAnims')
  }

  configureLols () {
    if (!this.options.noAnims) {
      lolcatjs.options.colors = true

      lolcatjs.options.animate = true
      lolcatjs.options.duration = 12
      lolcatjs.options.speed = 20

      lolcatjs.options.seed = Math.round(Math.random() * 1000)

      lolcatjs.options.spread = 8.0
      lolcatjs.options.freq = 0.8
    }
  }

  sayHello () {
    if (!this.options.noAnims) {
      const pixel = figlet.textSync('Pixel2HTML')
      lolcatjs.fromString(pixel)
    }
  }

  mustHavePrompts () {
    const generalOverview = cowsay.say({
      text: 'A few general purpose questions now...',
      f: 'vader'
    })
    this.log(chalk.red(generalOverview))
    return this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Name of your Project?'
      }
    ])
    .then(props => {
      this.options.projectName = props.projectName
    })
  }

  setShopNowPrompt () {
    return this.prompt([
      {
        type: 'confirm',
        name: 'setShopNow',
        message: 'Do you want to set up your shop credentials now?',
        default: true
      }
    ])
    .then(props => {
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
        this.destinationPath(`src/${file}`),
        {
          author: 'Pixel2HTML'
        }
      )
    })
  }
}

export default ShopifySkeleton
