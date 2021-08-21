const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './docs')
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },   
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/svg',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/img',
            },
          },
        ],
      },
      {
        test: /\.(gif|ico|webp|pdf|mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/rodo.html',
      filename: './rodo.html'
    })
    ,
    new HtmlWebPackPlugin({
      template: './src/cennik.html',
      filename: './cennik.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/galeria.html',
      filename: './galeria.html'
    })
  ]
}
