const { merge } = require("webpack-merge");

exports.default = {
  config: function (cfg) {
    return merge(cfg, {
      devtool: "inline-source-map",
    });
  },
};