var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./js/app.jsx",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                use: ['babel-loader'] 
            }
        ]
    }
}