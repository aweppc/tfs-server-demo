const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack/base.config');
const devConfig = require('./webpack/dev.config');
const clientConfig = require('./webpack/client.config');

module.exports = merge(baseConfig, devConfig, clientConfig, {
    devServer: {
        static: path.join(__dirname, 'assets'),
        compress: true,
        port: 9000
    },
});