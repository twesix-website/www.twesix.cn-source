const path=require('path');

module.exports =
    {
        CommonsChunk: require('./plugin-list/CommonsChunk'),
        Define:require('./plugin-list/Define'),
        HtmlWebpack: require('./plugin-list/HtmlWebpack'),
        NamedModules: require('./plugin-list/NamedModules'),
        UglifyJs: require('./plugin-list/UglifyJs'),
        HotModuleReplacement: require('./plugin-list/HotModuleReplacement'),
    };
