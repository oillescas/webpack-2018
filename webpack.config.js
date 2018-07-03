const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  /* mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }, */
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{loader:'babel-loader'}
      },
      {
        test:/\.html$/,
        use:[
          {
            loader: 'html-loader',
            options: {minimize:true}
          }
        ]
      },{
        test:/\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/template.html',
      filename:'./index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]_style.css'
    })
  ]
  /* resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/')
  }*/
};