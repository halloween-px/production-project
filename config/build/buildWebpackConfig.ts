import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {BuildPlugins} from "./buildPlugins";
import {BuildLoader} from "./buildLoader";
import {BuildResolvers} from "./buildResolvers";
import {BuildDevServer} from "./buildDevServer";

export function BuildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: BuildPlugins(options),
        module: {
            rules: BuildLoader(options),
        },
        resolve: BuildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? BuildDevServer(options) : undefined
    }
}