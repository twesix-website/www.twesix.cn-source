const plugins = require('../webpack-config/plugins');
const vars = require('../vars');
const path = require('path');

module.exports=
    {
        entry: require('../webpack-config/entry'),
        output: require('../webpack-config/output'),
        module: require('../webpack-config/module'),
        plugins:
        [
            plugins.CommonsChunk,
            plugins.Define.development
        ]
            .concat(plugins.HtmlWebpack)
    };