const path = require('path');

module.exports = {
    entry: './public/javascripts/script.ts',
    devtool: 'inline-source-map',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'built/public/javascripts')
    }
};