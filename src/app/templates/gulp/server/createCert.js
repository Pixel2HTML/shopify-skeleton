const fs = require('fs')
const del = require('del')
const selfsigned = require('selfsigned')
const selfsignedOptions = require('./self-signed-options')
const log = console.log
const path = require('path')

const keyPath = path.join(__dirname, 'key.pem')
const certPath = path.join(__dirname, 'cert.crt')
let certExists = fs.existsSync(certPath)
let keyExists = fs.existsSync(keyPath)

if (certExists && keyExists) {
  const certStat = fs.statSync(certPath)
  const certTtl = 1000 * 60 * 60 * 24
  const now = new Date()

  // cert is more than 30 days old, kill it with fire
  if ((now - certStat.ctime) / certTtl > 30) {
    log('SSL Certificate is more than 30 days old. Removing.')
    del.sync([certPath, keyPath], { force: true })
    certExists = false
    keyExists = false
  }
}

if (!certExists || !keyExists) {
  log('Generating SSL Certificate')
  const attrs = [{ name: 'commonName', value: 'localhost' }]
  const pems = selfsigned.generate(attrs, selfsignedOptions)
  fs.writeFileSync(keyPath, pems.private, { encoding: 'utf-8' })
  fs.writeFileSync(certPath, pems.cert, { encoding: 'utf-8' })
}

module.exports = {
  key: keyPath,
  cert: certPath
}
