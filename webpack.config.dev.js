const path = require('path');
const { DuplicatesPlugin } = require("inspectpack/plugin");

module.exports = {
    entry: {
        main: "./src/ts/polaris.ts",
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: "polaris.js",
        publicPath: "dist/js",
        library: {
            name: 'Polaris',
            type: 'umd',
            export: 'default'
        }
    },
    module: {
        rules: [
            { 
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    mode: "development",
    devtool: "source-map",
    watch: true,
    plugins: [
        new DuplicatesPlugin({
            emitErrors: false,
            emitHandler: undefined,
            ignoredPackages: undefined,
            verbose: false
        })
    ]
};