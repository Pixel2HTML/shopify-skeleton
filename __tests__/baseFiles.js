import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import { baseFiles } from '../lib/filesToAssert'

describe('Base Files', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        noAnims: true
      })
      .toPromise()
  })

  it('creates expected base files', function () {
    assert.file(baseFiles)
  })
})
