var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'XPage.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'XPage',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['transform-class-properties']
        }
      }
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  watch: true,
  devtool: 'eval'
};
