import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import { shopifyCoreFiles } from '../lib/filesToAssert'

describe('General Assertions', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .toPromise()
  })

  it('creates expected general files', function () {
    const shopifyFiles = shopifyCoreFiles.map(file => `src/theme/${file}`)
    assert.file(shopifyFiles)
  })
})
