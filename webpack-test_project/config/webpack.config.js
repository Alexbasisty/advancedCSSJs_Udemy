const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
    },
    output: {
        filename: "[name]-bundle.js",
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
    plugin: [new CleanWebpackPlugin()],
};
