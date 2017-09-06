const webpack = require('webpack');

module.exports = new webpack.optimize.UglifyJsPlugin
(
    {
        beautify: false,
        comments: false,
        compress:
            {
                warnings: false,
                drop_console: true,
                collapse_vars: true,
                reduce_vars: true
            }
    }
);