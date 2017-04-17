const ngtools = require('@ngtools/webpack');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const commonPartial = require('./webpack/webpack.common');

const clientPartial = require('./webpack/webpack.client');
const clientProdPartial = require('./webpack/webpack.client.prod');

const analyzerPartial = require('./webpack/webpack.analyzer');

const serverPartial = require('./webpack/webpack.server');

const { getAotPlugin } = require('./webpack/webpack.aot');

module.exports = function (options, webpackOptions) {
  options = options || {};

  if (options.aot) {
    console.log(`Running build for ${(options.client || options.analyzer) ? 'client' : 'server'} with AoT Compilation`)
  }

  const serverConfig = webpackMerge({}, commonPartial, serverPartial, {
    entry: options.aot ? './src/main.server.aot.ts' : serverPartial.entry, // Temporary
    plugins: [
      getAotPlugin('server', !!options.aot),
      new webpack.DefinePlugin({
        environment: webpackOptions.p ? `"production"`: '"development"'
      })
    ]
  });

  let clientConfig = webpackMerge({}, commonPartial, clientPartial, {
    plugins: [
      getAotPlugin('client', !!options.aot),
      new webpack.DefinePlugin({
        environment: webpackOptions.p ? `"production"`: '"development"'
      })
    ]
  });

  if (webpackOptions.p) {
    clientConfig = webpackMerge({}, clientConfig, clientProdPartial);
  }

  const configs = [];
  if (!options.aot) {
    configs.push(clientConfig, serverConfig);

  } else if (options.client) {

    if(options.analyzer) {
      clientConfig = webpackMerge({}, clientConfig, analyzerPartial);
    }

    configs.push(clientConfig);

  } else if (options.server) {
    configs.push(serverConfig);
  }

  return configs;
}
