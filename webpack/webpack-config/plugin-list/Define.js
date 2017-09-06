const webpack = require('webpack');

const production = new webpack.DefinePlugin
(
    {
        PRODUCTION: true,
        DEVELOPMENT: false,
    }
);

const development = new webpack.DefinePlugin
(
    {
        PRODUCTION: false,
        DEVELOPMENT: true,
    }
);
module.exports =
    {
        development,
        production
    };