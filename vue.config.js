let path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports={
    chainWebpack: (config) => {
        config.externals({
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
        })
        config.resolve.alias.set('@', resolve('src'))
    },
    lintOnSave: false,
    assetsDir:'static',
    publicPath:'./',
    devServer: {
        hot: true,
        host: 'localhost',
        port: 8080,
        proxy:{
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        resolve: {
            symlinks: true,
        },
        plugins: [
            new CompressionPlugin({
                test: /\.js$|\.html$|\.css/,
                threshold: 10240,
                deleteOriginalAssets: false
            })
        ]
    }
}
