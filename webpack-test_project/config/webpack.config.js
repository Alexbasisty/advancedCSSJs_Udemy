const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
    },
    output: {
        filename: "[name]-[contenthash:6].js",
        path: path.resolve(__dirname, "../", "build"),
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: "raw-loader",
            },
        ],
    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, "../", "public"),
        port: 5001,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: "New Application",
            template: "src/template.html",
        }),
    ],
};
