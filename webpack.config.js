const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const alias = {
    '@img': path.resolve(__dirname, 'src/_img'),
    '@sh': path.resolve(__dirname, 'src/shared'),
    '@hk': path.resolve(__dirname, 'src/hooks'),
    '@str': path.resolve(__dirname, 'src/store'),
    '@cnt': path.resolve(__dirname, 'src/containers'),
    '@c': path.resolve(__dirname, 'src/components'),
    '@c-b': path.resolve(__dirname, 'src/components/blocks'),
    '@c-f': path.resolve(__dirname, 'src/components/forms'),
    '@c-l': path.resolve(__dirname, 'src/components/lists'),
    '@c-md': path.resolve(__dirname, 'src/components/modals'),
    '@c-s': path.resolve(__dirname, 'src/components/sections'),
    '@c-ui': path.resolve(__dirname, 'src/components/ui')
}

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return config
}

const filename = ext => isDev ? `[name].${ext}` : `${ext}/[name].[hash].${ext}`

const babelOptions = preset => {
  const opts = {
    presets: [
      '@babel/preset-env'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }
  if (preset) {
    opts.presets.push(preset)
  }
  return opts
}

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: 'index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'static')
      }
    ]),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
  ]

  if (isProd) {
    base.push(new BundleAnalyzerPlugin())
  }
  return base
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['core-js/stable', 'regenerator-runtime/runtime', 'svgxuse/svgxuse.js', './index.js'],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'static')
  },
  resolve: {
    extensions: ['.js', '.styl'],
    alias: alias
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
    hot: isDev,
    historyApiFallback: true
  },
  devtool: isDev ? 'source-map' : '',
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: isDev,
                    reloadAll: true
                },
            },
            'css-loader',
            'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath:  'img/'
                }
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 70
                    },
                    optipng: {
                        enabled: false,
                    },
                    pngquant: {
                        quality: [0.80, 0.90],
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    }
                }
            },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
          publicPath:  isProd? `../fonts` : ''
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions('@babel/preset-react')
          }
        ]
      }
    ]
  }
}
