'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('webpack-html-plugin');
var HasteResolverPlugin = require('haste-resolver-webpack-plugin');

var IP = '0.0.0.0';
var PORT = 3000;
var NODE_ENV = process.env.NODE_ENV;
var ROOT_PATH = path.resolve(__dirname, '..');
var PROD = 'production';
var DEV = 'development';
var isProd = NODE_ENV === 'production';

var config = {
  paths: {
    src: path.join(ROOT_PATH, '.'),
    index: path.join(ROOT_PATH, 'index'),
  },
};

module.exports = {
  ip: IP,
  port: PORT,
  devtool: false,
  target: 'node',
  resolve: {
    alias: {
      'react-native': "finch-react-server",
      'finch-react-web': "finch-react-web",
      'finch-react-core': "finch-react-core",
      'ReactNativeART': 'react-art'
    },
    extensions: ['', '.web.js', '.js', '.jsx'],
  },
  entry: [
    config.paths.index
  ],
  output: {
    path: path.join(__dirname, 'output'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new HasteResolverPlugin({
      platform: 'web',
      nodeModules: ['react-web']
    }),
    new webpack.ProvidePlugin({
      React: "react"
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader?minimize&modules&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader?' + JSON.stringify({
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['add-module-exports']
        })],
        include: [
          config.paths.src,
          path.resolve(__dirname, "../node_modules/finch-react-core/src/"),
          path.resolve(__dirname, "../node_modules/finch-react-web/src/"),
          path.resolve(__dirname, "../node_modules/finch-react-server/src/")
        ],
        exclude: [
          /node_modules\/(?!finch\-react)/,
          /output/
        ]
      }]
  }
};
