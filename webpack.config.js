const webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: "./index.js",

    output: {
        filename: "bundle.js",
        //path: __dirname + "dist",
        publicPath: __dirname + "/src"
    },
    devServer: {
        host: '0.0.0.0',//your ip address
        port: 8080,
        contentBase: "dist",
        
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                //loader: "babel-loader",
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    mode: "development"
}