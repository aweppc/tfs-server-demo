const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/client/index.tsx',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
        ],
    },
    output: {
        publicPath: '',
        path: path.resolve(__dirname, 'assets'),
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new WebpackManifestPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    ],
};