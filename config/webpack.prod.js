const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPluigin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglyifyJsPlugin = require("uglifyjs-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = env => {
  return {
    entry: {
      // vendor: [
      //   "gsap"
      // ],
      main: ["./src/pug/main.js"],
      mode: "production"
    },
    output: {
      filename: "[name]-bundle.js",
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/"
    },
    mode: "production",
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{
            loader: "babel-loader"
          }]
        },
        {
          test: /\.css$/,
          use: [{
              loader: MiniCssExtractPluigin.loader
            },
            {
              loader: "css-loader"
            }
          ]
        },
        // {
        //   test: /\.scss$/,
        //   use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
        // },
        {
          test: /\.jpg$/,
          use: [{
            loader: "file-loader",
            options: {
              name: "images/[name]-[hash:8].[ext]"
            }
          }]
        },
        {
          test: /\.html$/,
          use: [{
            loader: "html-loader"
          }]
        }
        // {
        //   test: /\.pug$/,
        //   use: [{
        //     loader: "pug-loader"
        //   }]
        // }
      ]
    },
    plugins: [
      new OptimizeCssAssetsPlugin(),
      new MiniCssExtractPluigin({
        "filename": "[name]-[contenthash].css"
      }),
      // new HTMLWebpackPlugin({
      //   template: "./src/pug/index.pug",
      //   title: "Links Journal"
      // }),
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify(env.NODE_ENV)
        }
      }),
      // new MinifyPlugin(),
      new UglyifyJsPlugin(),
      new CompressionPlugin({
        algorithm: "gzip"
      }),
      new BrotliPlugin()
    ]
  }
}