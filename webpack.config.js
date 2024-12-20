const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');
const Dotenv = require('dotenv-webpack');

const deps = require("./package.json").dependencies;

const printCompilationMessage = require('./compilation.config.js');



module.exports = (_, argv) => {
  const isProduction = argv.mode === "production";
  const publicPath = isProduction
    ? process.env.PUBLIC_PATH_PRODUCTION
    : process.env.PUBLIC_PATH_DEVELOPMENT;

  return {

    output: {
      publicPath: publicPath,
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
      port: 4210,
      historyApiFallback: true,
      watchFiles: [path.resolve(__dirname, 'src')],
      onListening: function (devServer) {
        const port = devServer.server.address().port

        printCompilationMessage('compiling', port)

        devServer.compiler.hooks.done.tap('OutputMessagePlugin', (stats) => {
          setImmediate(() => {
            if (stats.hasErrors()) {
              printCompilationMessage('failure', port)
            } else {
              printCompilationMessage('success', port)
            }
          })
        })
      }
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "mf_st_common",
        filename: "remoteEntry.js",
        remotes: {},
        exposes: {
          './Common': './src/components/Common.tsx',
          './PopoverComponent': './src/components/PopoverComponent/PopoverComponent.tsx',
          './TableComponent': './src/components/TableComponent/TableComponent.tsx',
          './Button': './src/components/Button/Button.tsx',
          './LabelComponent': './src/components/LabelComponent/LabelComponent.tsx',
          './PaginationComponent': './src/components/PaginationComponent/PaginationComponent.tsx',
          './SelectComponent': './src/components/SelectComponent/SelectComponent.tsx',
          './OptionComponent': './src/components/OptionComponent/OptionComponent.tsx',
          './InputComponent': './src/components/InputComponent/InputComponent.tsx',
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
      new Dotenv()
    ],
  };
};
