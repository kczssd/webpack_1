const path = require('path');
const FileListPlugin = require('./plugin/plugin');
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.js/,
                use: [path.resolve(__dirname, './loader/replace.js')]
            }
        ]
    },
    plugins: [
        new FileListPlugin()
    ]
}