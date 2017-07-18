import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import { staticFiles } from '../lib/filesToAssert'

describe('Static Files', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        noAnims: true
      })
      .toPromise()
  })

  it('creates expected static files', function () {
    const compiledFiles = staticFiles.map(file => `src/${file}`)
    assert.file(compiledFiles)
  })
})
