const { root } = require('./helpers');

const AngularServiceWorkerPlugin = require('@angular/service-worker/webpack').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const {LoaderOptionsPlugin} = require('webpack');
/**
 * This is a common webpack config which is the base for all builds
 */
module.exports = {
  "resolve": {
    "extensions": [
      ".ts",
      ".js"
    ],
    "modules": [
      "./node_modules"
    ]
  },
  "resolveLoader": {
    "modules": [
      "./node_modules"
    ]
  },
  // devtool: 'source-map',
  // resolve: {
  //   extensions: ['.ts', '.js']
  // },
  output: {
    path: root('dist')
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      {
        "enforce": "pre",
        "test": /\.js$/,
        "loader": "source-map-loader",
        "exclude": [
          /\/node_modules\//
        ]
      },
      {
        "test": /\.(eot|svg)$/,
        "loader": "file-loader?name=[name].[hash:20].[ext]"
      },
      {
        "test": /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
        "loader": "url-loader?name=[name].[hash:20].[ext]&limit=10000"
      },
      {
        test: /\.scss$/,
        use: ['to-string-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        exclude: [root('src/styles')]
      },
      {
        test: /\.scss$/,
        // use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader?sourceMap'],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','postcss-loader','sass-loader']
        }),
        include: [root('src/styles')]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      "filename": "[name].bundle.css",
      "disable": true
    }),

    new LoaderOptionsPlugin({
      "sourceMap": false,
      "options": {
        "postcss": [
          autoprefixer()
        ],
        "sassLoader": {
          "sourceMap": false,
          "includePaths": []
        },
        "context": ""
      }
    }),

    new CopyWebpackPlugin([
      {from: root('src/ngsw-manifest.json')},
    ]),

    new AngularServiceWorkerPlugin()
  ]
};
