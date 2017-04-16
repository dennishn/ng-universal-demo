const { root } = require('./helpers');

const { AotPlugin } = require('@ngtools/webpack');

/**
 * This is a server config which should be merged on top of common config
 */
module.exports = {
  entry: root('./src/main.server.ts'),
  output: {
    filename: 'server.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        /*
          TODO: Hack - attempt to remove Material related DOM warnings on the server
         */
        test: /@angular(\\|\/)material/,
        loader: 'imports-loader',
        options: {
          window: '>global',
          'CSS': '>null',
          navigator: '>{get userAgent(){ return \'Chrome\'; }}',
          document: '>global.document',
        },
      },
    ]
  }
};
