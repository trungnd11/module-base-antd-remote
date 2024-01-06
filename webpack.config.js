const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const WebpackBar = require("webpackbar");
const TerserPlugin = require("terser-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
const { ModuleFederationTypesPlugin } = require("@cloudbeds/webpack-module-federation-types-plugin");

const federationConfig = {
  name: "container",
  filename: "remoteEntry.js",
  library: { type: "var", name: "container" },
  exposes: {
    "./AppButton": "./src/components/appButton/AppButton.tsx",
    "./AppTable": "./src/components/appTable/AppTable.tsx",
    "./AppModal": "./src/components/appModal/AppModal.tsx",
    "./Login": "./src/pages/login/Login.tsx",
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      eager: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
    "react-router-dom": {
      singleton: true,
      version: deps["react-router-dom"],
    },
    "react-redux": {
      singleton: true,
      version: deps["react-router-dom"],
    },
  },
};

module.exports = {
  entry: "/src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
    chunkFilename: "[id].[contenthash:8].chunk.js",
    clean: true,
  },
  devServer: {
    port: 3000,
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({}), //default tsconfig.json
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html"),
    }),
    new ModuleFederationPlugin(federationConfig),
    new ModuleFederationTypesPlugin(),
    new WebpackBar()
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};