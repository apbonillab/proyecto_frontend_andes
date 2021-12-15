/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin  = require("fork-ts-checker-webpack-plugin");
const ESLintPlugin  = require("eslint-webpack-plugin");



const ROOT = path.resolve(__dirname, '..');
console.log('@@@@@@@@@ USING DEVELOPMENT @@@@@@@@@@@@@@@');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'web',
    performance: {
        hints: false
      },
    entry: {
        app: path.join(__dirname, '../src', 'index.tsx')
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        path: path.resolve(__dirname, '../dist/')
    },

    
    resolve: {
        plugins: [new TsconfigPathsPlugin({
            baseUrl: path.resolve(__dirname, '.'),
            configFile: path.resolve(__dirname, './tsconfig.dev.json'),
            mainFields: ['browser', 'main'],
           })],
        extensions: ['.ts', '.tsx', '.js']
      
    },
    devServer: {
        historyApiFallback: true,
        static: {
          directory: path.join(ROOT,'/dist/'),
        },
        open: true,
        hot: true,
        port: 9002
      },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
      
              {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1,
                      modules: true
                    }
                  }
                ],
                include: /\.module\.css$/
              },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                  ]
              },
              {
                test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
                exclude: /node_modules/,
                use: 'file-loader?name=assets/[name]-[hash:6].[ext]'
              },
              {
                test: /favicon.ico$/,
                loader:'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
                //use: 'file-loader?name=/[name].[ext]'
              }
        ]
    },
    plugins: [

      // new CleanWebpackPlugin(['./dist', './assets'], {
      //   root: ROOT
      // }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "../public", "index.html"),
          favicon: './public/favicon.ico'
        }),
        new ForkTsCheckerWebpackPlugin({
          async: false,
        }),

        new CopyWebpackPlugin({
          patterns: [{ from: './src/assets/img/*.*', to: 'assets/img/[name][ext]'}]
          }  )
      ]
}

