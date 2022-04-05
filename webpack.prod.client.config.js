const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack/base.config');
const prodConfig = require('./webpack/prod.config');
const clientConfig = require('./webpack/client.config');

module.exports = merge(baseConfig, prodConfig, clientConfig, {
    output: {
        path: path.resolve(__dirname, 'build/static'),
    },
});