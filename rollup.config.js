// rollup.config.js

const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonJs = require('rollup-plugin-commonjs');

export default {
    entry: './src/service-worker/worker-basic.js',
    format: 'iife',
    dest: 'dist/worker-basic.js',
    sourceMap: false,
    treeshake: true,
    plugins: [
        nodeResolve({jsnext: true, main: true}),
        commonJs({
            include: 'node_modules/**',
            namedExports: {
              'node_modules/jshashes/hashes.js': ['SHA1']
            }
        }),
    ],
    onwarn: function ( message ) {
        if ( /at the top level of an ES module, and has been rewritten/.test( message ) ) {
            return;
        }
        console.error( message );
    }
}