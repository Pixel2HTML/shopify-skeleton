const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const config = require('./gulp/gulp.config')
const {cwd} = require('process')

const production = config.production
const debug = config.debug
const WebpackMonitor = require('webpack-monitor')

// When you really want to make the relationship work...
const ENTRY_PATH = cwd() + '/' + config.src.scripts
const OUTPUT_PATH = cwd() + '/' + config.theme + '/assets'

let plugins = [
  new webpack.SourceMapDevToolPlugin({
    filename: '[name].js.map',
    append: '\n//# sourceMappingURL={{ "[url]" | asset_url }}',
    test: /(\.js|\.liquid)$/
  }),
  // Add module names to factory functions so they appear in browser profiler.
  new webpack.NamedModulesPlugin(),
  // Allow everyone to use jQuery like it was global
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  }),
  // Separate node_modules packages
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: module => /node_modules/.test(module.resource)
  }),
  // Log our build stats
  new WebpackMonitor({
    target: cwd() + '/gulp/stats.json'
  }),
  // Do NOT import the BLOAT from moment.js
  // thanks create-react-app
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
]

const productionPlugins = [
  // Add the env to remove excess skin
  new webpack.DefinePlugin({
    'process.env': { 'NODE_ENV': JSON.stringify('production') }
  }),
  // Concatenate modules for smaller builds
  new webpack.optimize.ModuleConcatenationPlugin(),
  // Uglify the heck out of this
  new UglifyJSPlugin({sourceMap: true})
]

const debugPlugins = [
  new BundleAnalyzerPlugin(),
  new WebpackMonitor({
    target: cwd() + '/gulp/stats.json',
    launch: true,
    port: 5000
  })
]

if (production) plugins = [...plugins, ...productionPlugins]
if (debug) plugins = [...plugins, ...debugPlugins]

const CONFIG = {
  entry: ENTRY_PATH,
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['timmy']
        }
      }
    }]},
  output: {
    filename: debug ? '[name].js' : '[name].js.liquid',
    path: OUTPUT_PATH
  },
  plugins,
  externals: {
    jquery: 'jQuery'
  }
}

module.exports = CONFIG
