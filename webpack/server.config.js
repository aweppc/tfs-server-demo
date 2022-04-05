const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/server/index.ts',
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['ignore-loader']
            },
        ],
    },
    output: {
        publicPath: '',
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'server.js',
    },
};