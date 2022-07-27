require('index.css');

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, './src'),
        },
        compress: true,
        port: 8080,
    },
    entry: path.resolve(__dirname, "./src/index.js"),
    module: { 
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
            }, 
            { test: /\.css$/,
              use:["style-loader", "css-loader"],
              exclude: /node_module/,
            }
        ]

    },
    // resolve: {
    //     extensions: ['js','jsx']
    // },
    output: {
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
      })]
}