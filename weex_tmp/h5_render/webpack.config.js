var webpack = require('webpack')
var pkg = require('./package.json')
var getDateStr = require('./src/utils').getDateStr

var sourceMapPlugin = new webpack.SourceMapDevToolPlugin({
  test: /\.js$/
})

var version = pkg.version
var banner = `(this.nativeLog || function(s) {console.log(s)})\
('START WEEX HTML5: ${pkg.version} BUILD ${getDateStr()}');`;

var bannerPlugin = new webpack.BannerPlugin(banner, {
  raw: true
})

module.exports = {
  entry: './src/bundle',
  output: {
    path: './dist',
    filename: 'weex.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [bannerPlugin, sourceMapPlugin]
}

