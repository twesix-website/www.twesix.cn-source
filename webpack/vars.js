const path = require('path');

const root = {};
root.project = path.resolve(__dirname, '../');
root.build = path.resolve(root.project, 'build');
root.src = path.resolve(root.project, 'src');
root.webpack = path.resolve(root.project, 'webpack');

const vars = {};
vars.path =
    {
        build:
            {
                root: root.build,
                vendor:
                    {
                        root: path.resolve(root.build, 'vendor', 'dll'),
                        manifest: path.resolve(root.build, 'vendor', 'dll', 'manifest.json')
                    },
            },
        src:
            {
                root: root.src,
                pages: path.resolve(root.src, 'pages'),
                vendor: path.resolve(root.src, 'vendor')
            },
        webpack:
            {
                root: root.webpack
            },
        project:
            {
                root: root.project,
            }
    };

vars.project =
    {
        entry: require('./project-config/entry'),
        pages: require('./project-config/pages'),
    };

module.exports = vars;