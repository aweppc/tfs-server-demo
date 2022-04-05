const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack/base.config');
const prodConfig = require('./webpack/prod.config');
const serverConfig = require('./webpack/server.config');

module.exports = merge(baseConfig, prodConfig, serverConfig, {
    output: {
        path: path.resolve(__dirname, 'build/server'),
    },
});