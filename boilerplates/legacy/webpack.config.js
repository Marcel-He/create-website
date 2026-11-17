import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

/**
 * @param {string} env
 * @param {object} argv
 * @returns {object}
 */
export default function (env, argv) {
    let mode = "development";

    const plugins = [];

    if (!argv.watch) {
        mode = "production";

        plugins.push(
            new BundleAnalyzerPlugin({
                analyzerMode: "static",
                reportFilename: "webpack-report.html",
                openAnalyzer: false,
            }),
        );
    }

    return {
        mode,
        devtool: false,
        entry: {
            main: ["./src/scripts/main"],
            lazysizes: ["./src/scripts/lazysizes"],
        },
        output: {
            path: path.resolve("__OUTPUT_PATH__"),
            publicPath: "/project/frontend/",
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    defaultVendors: {
                        test: (mod) => {
                            // Only include all node_modules excluding lazysizes
                            if (!mod.context.includes("node_modules") || mod.context.includes("lazysizes")) {
                                return false;
                            }

                            return true;
                        },
                        name: "vendor",
                        chunks: "all",
                        enforce: true,
                    },
                },
            },
            runtimeChunk: {
                name: "runtime",
            },
            minimizer: [new TerserPlugin()],
        },
        plugins,
        module: {
            rules: [
                {
                    test: /\.(js|mjs)$/,
                    exclude: [/\bcore-js\b/, /\bwebpack\/buildin\b/],
                    use: {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                        },
                    },
                    resolve: {
                        // https://webpack.js.org/configuration/module/#resolvefullyspecified
                        fullySpecified: false,
                    },
                },
            ],
        },
    };
}
