const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
    entry: "./src/app.ts",
    target: "es5",
    externals: [nodeExternals()],
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        modules: ["src"],
        extensions: [".ts", ".js"]
    },
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: './dist'
    }
};
