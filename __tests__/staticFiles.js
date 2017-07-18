import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import { staticFiles } from '../lib/filesToAssert'

describe('Static Files', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .toPromise()
  })

  it('creates expected static files', function () {
    assert.file(staticFiles)
  })
})
