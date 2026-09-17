const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ThemeWatcher = require('@salla.sa/twilight/watcher.js');
const path = require('path');

const asset = file => path.resolve('src/assets', file || '');
const publicDir = file => path.resolve('public', file || '');

module.exports = {
  entry: {
    app: [asset('styles/app.scss'), asset('js/app.js')]
  },
  output: {
    path: publicDir(),
    clean: true,
    filename: '[name].js'
  },
  stats: { modules: false, assetsSort: 'size' },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new ThemeWatcher(),
    new MiniCssExtractPlugin({ filename: '[name].css' })
  ],
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()]
  }
};
