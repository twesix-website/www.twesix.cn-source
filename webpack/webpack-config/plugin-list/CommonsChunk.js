const webpack = require('webpack');

module.exports = new webpack.optimize.CommonsChunkPlugin
(
    {
        name: 'commons',
        filename: 'vendor/chunk/[name].js',
    }
);