const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "lab",
    projectName: "mf-home",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["@lab/state"],
    // modify the webpack config however you'd like to by adding to this object
  });
};
