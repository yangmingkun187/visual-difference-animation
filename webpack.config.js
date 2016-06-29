var path = require('path');

module.exports = {
    entry: {
        index: './src/app.js'
    },
    output: {
        path: './dist/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            },
        ]
    }
};