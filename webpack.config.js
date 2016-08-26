module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'sandstorage.js',
        library: 'SandStorage',
        libraryTarget: 'umd',
        path: './build'
    },
    module: {
        loaders: [
            {
                exclude: ['node_modules', 'test'],
                loader: 'babel',
                test: /\.js$/
            }
        ]
    }
};
