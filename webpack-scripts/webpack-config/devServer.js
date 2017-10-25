const vars = require('../vars');
const path = require('path');

const devServer =
    {
        // allowedHosts: ['*'],
        // clientLogLevel: 'info',
        // compress: false,
        contentBase: path.resolve(vars.path.build.root),
        inline: true,
        // filename: 'entry.js',
        // headers: {},
        // historyApiFallback: true,
        // host: 'localhost',
        hot: true,
        // hotOnly: true,
        // https:{},
        // lazy: false,
        // noInfo: false,
        // overlay: true,
        // proxy: {},
        // progress: true,
        // public: 'localhost.resource',
        publicPath: '/',
        // quiet: false,
        // setup: function(app)
        // {
        //
        // },
        // staticOptions:{},
        // stats: 'errors-only',
        // watchContentBase: true,
        // watchOptions:
        //     {
        //
        //     },
        port: 9000,
    };

module.exports = devServer;