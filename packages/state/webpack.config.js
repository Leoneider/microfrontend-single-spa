const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "lab",
    projectName: "state",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [
      new CopyPlugin({patterns: [
        { from: 'fruit', to: 'fruit'},
      ]}),
     
    ],
    devServer: {
      port: 2703,
      onListening: ({ compiler }) => {
        const { https, client } = compiler.options.devServer;
        const { publicPath, filename } = compiler.options.output;
        const protocol = https ? "https://" : "http://";
        const port = !client.port ? "" : `:${client.port}`;
        const path = ["", "auto"].includes(publicPath) ? "/" : publicPath;
        console.log(
          `⚡️ single-spa application entry: ${protocol}${client.host}${port}${path}${filename}`
        );
      },
    },
  });
};
