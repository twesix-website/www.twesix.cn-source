const path=require('path');

module.exports =
    {
        CommonsChunk: require('./plugins/CommonsChunk'),
        Define: require('./plugins/Define'),
        HtmlWebpack: require('./plugins/HtmlWebpack'),
        NamedModules: require('./plugins/NamedModules'),
        UglifyJs: require('./plugins/UglifyJs'),
        HotModuleReplacement: require('./plugins/HotModuleReplacement'),
    };
