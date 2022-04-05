const { merge } = require('webpack-merge');
const baseConfig = require('./webpack/base.config');
const devConfig = require('./webpack/dev.config');
const serverConfig = require('./webpack/server.config');

module.exports = merge(baseConfig, devConfig, serverConfig);