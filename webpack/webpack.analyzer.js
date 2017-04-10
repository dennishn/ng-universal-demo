const { root } = require('./helpers');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/**
 * This is a prod config to be merged with the Client config
 */
module.exports = {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static', // change it to `server` to view bundle stats
            reportFilename: root('stats/report.html'),
            generateStatsFile: true,
            statsFilename: root('stats/stats.json')
        }),
    ]
};
