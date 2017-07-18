import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import { gulpFiles } from '../lib/filesToAssert'

describe('Gulp Files', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        noAnims: true
      })
      .toPromise()
  })

  it('creates expected gulp files', function () {
    const allFiles = gulpFiles.map(file => `gulp/${file}`)
    assert.file(allFiles)
  })
})
