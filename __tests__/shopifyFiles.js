import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import { shopifyCoreFiles } from '../lib/filesToAssert'
import {
  shopName,
  shopKey,
  shopPassword,
  shopSecret,
  shopThemeId
} from '../lib/mockPrompts'

describe('General Assertions', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        noAnims: true
      })
      .withPrompts({
        projectName: 'Awesome Test Project',
        setShopNow: true,
        shopName,
        shopKey,
        shopPassword,
        shopSecret,
        shopThemeId
      })
      .toPromise()
  })

  it('creates expected general files', function () {
    const shopifyFiles = shopifyCoreFiles.map(file => `src/theme/${file}`)
    assert.file(shopifyFiles)
  })
})
