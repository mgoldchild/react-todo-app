var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./main.js",
  },
  output: {
    path: 'public', // webpackで使用する
    publicPath:"public", // webpack-dev-severで使用する
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['latest', 'react' ]
        }
      }
    ]
  },
  plugin: [
    // new webpack.ResolverPlugin(
    //   new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    // ),
    // new webpack.optimize.UglifyJsPlugin()  // minify
    // なぜか動かないので-pオプションをつけるほうが良いかも
  ]
}
