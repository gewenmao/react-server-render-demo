var path = require('path');
var webpack = require('webpack');

module.exports = [{
    name: 'browser',
    entry: './main.js',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-decorators-legacy']
            }
        }]
    },
},
/*{
    name: "server-side rending",
    entry: './page/index/index.jsx',
    output: {
        path: __dirname, 
        filename: 'page.index.js' ,
        // 使用page.generator.js的是nodejs，所以需要将
        // webpack模块转化为CMD模块
         //library: 'page',
         //libraryTarget: 'commonjs' 
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-decorators-legacy']
            }
        }]
    }
}*/
];
