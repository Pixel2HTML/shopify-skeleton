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
    lolcatjs.options.colors = true

    lolcatjs.options.animate = true
    lolcatjs.options.duration = 8
    lolcatjs.options.speed = 20

    lolcatjs.options.seed = Math.round(Math.random() * 1000)

    lolcatjs.options.spread = 8.0
    lolcatjs.options.freq = 0.8
  }

  sayHello () {
    if (!this.options.noAnims) {
      const pixel = figlet.textSync('Pixel2HTML')
      lolcatjs.fromString(pixel)
    }
  }

  vaderSays () {
    const generalOverview = cowsay.say({
      text: 'A few general purpose questions now...',
      f: 'vader'
    })
    return this.log(chalk.red(generalOverview))
  }

  mustHavePrompts () {
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

  suchTalk () {
    const dogeText = 'To set up a shop now you will need to have' + '\n' +
    'private API credentials at hand see more here:' + '\n' +
    'https://help.shopify.com/api/getting-started/api-credentials'
    const muchWow = cowsay.think({
      text: dogeText,
      f: 'doge'
    })
    return this.options.noAnims
      ? this.log(chalk.magenta(muchWow))
      : this.log(chalk.hex('#b69a4e')(muchWow))
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

  shopifyConfigs () {
    return this.options.setShopNow
      ? this.prompt([
        {
          type: 'input',
          name: 'shopName',
          message: 'Shop Name (Its the part that goes before the .myshopify.com bit on the admin)'
        },
        {
          type: 'input',
          name: 'shopKey',
          message: 'API Key'
        }, {
          type: 'input',
          name: 'shopPassword',
          message: 'Password'
        }, {
          type: 'input',
          name: 'shopSecret',
          message: 'Shared Secret'
        }, {
          type: 'input',
          name: 'shopThemeId',
          message: 'Theme ID (Create a new theme click customize HTML/CSS and its after the themes/ part on the URL)'
        }
      ])
      .then(props => {
        this.options.shopName = props.shopName
        this.options.shopKey = props.shopKey
        this.options.shopPassword = props.shopPassword
        this.options.shopSecret = props.shopSecret
        this.options.shopThemeId = props.shopThemeId
      })
      : false
  }

  copyShopifyCoreFiles () {
    const templates = {
      author: 'Pixel2HTML'
    }
    return filesToAssert.shopifyCoreFiles.map(file => {
      this.fs.copyTpl(
        this.templatePath(`theme/${file}`),
        this.destinationPath(`src/theme/${file}`),
        templates
      )
    })
  }

  copyBaseFiles () {
    const {
      projectName,
      shopName,
      shopKey,
      shopPassword,
      shopSecret,
      shopThemeId,
      setShopNow
    } = this.options

    const templates = {
      projectName,
      shopName,
      shopKey,
      shopPassword,
      shopSecret,
      shopThemeId,
      setShopNow
    }

    return filesToAssert.baseFiles.map(file => {
      this.fs.copyTpl(
        this.templatePath(`base/${file}`),
        this.destinationPath(file),
        templates
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
