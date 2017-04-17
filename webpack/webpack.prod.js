/**
 * This is a prod config to be merged with the Client config
 */
module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: prod? `"production"`: '"development"'
                }
            }
        })
    ]
};
