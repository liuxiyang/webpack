var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/entry/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          js: 'babel',
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
     {
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          limit: 102400,
          name: '[name].[ext]?[hash]'
        }
      },
      {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url",
          query: {
            name: '[name].[ext]?[hash]&mimetype=application/font-woff'
          }
      },
      {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url",
          query: {
            name: '[name].[ext]?[hash]&mimetype=application/font-woff2'
          }
      },
      {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url",
          query: {
            name: '[name].[ext]?mimetype=application/font-woff2'
          }
      },
      {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url",
          query: {
            name: '[name].[ext]?mimetype=application/font-woff2'
          }
      },
      {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url",
          query: {
            name: '[name].[ext]?mimetype=image/svg+xml'
          }
      },
      {
        test:/\.css$/,
        loader:'style!css!autoprefixer!less'
      }

    ]
  },
  externals: {   // 指定采用外部 CDN 依赖的资源，不被webpack打包
    // "vue": "Vue",
    // "vue-resource": "VueResource",
    // "vue-router": "VueRouter"
  },
  resolve: {
    extensions : ['*', '.js', '.vue','css']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  plugins: [
    new webpack.BannerPlugin(new Date().getFullYear() + '年'+ parseInt(new Date().getMonth()+1,10)+'月'+ new Date().getDate() + '日' + new Date().getHours() + '点' + new Date().getMinutes() + '分' + '编译')
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      vue: {
        postcss: [
          require('autoprefixer')({
            browsers: ['last 2 version', 'Android >= 4.0']
          })
        ]
      }
    })
  ])
}
