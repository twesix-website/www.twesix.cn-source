module.exports =
    [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test:/\.js$/,
            loader:'babel-loader',
            exclude:'/node_modules/',
            query:
                {
                    presets: ['latest', 'stage-0']
                }
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader?minimize',
            exclude: '/node_modules/'
        },
        {
            test: /.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader',
            options:
                {
                    limit: 8192,
                    name: 'vendor/img/[hash].[ext]',
                }
        },
        {
            test: /.(eot|svg|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options:
                {
                    limit: 8192,
                    name: 'vendor/font/[hash].[ext]',
                }
        },
    ];