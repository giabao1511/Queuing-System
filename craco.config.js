const CracoAlias = require("craco-alias");

module.exports = {
  webpack: {
    mode: "extends",
    configure: {
      module: {
        rules: [
          {
            test: /\.js$/,
            enforce: "pre",
            use: ["source-map-loader"],
          },
        ],
      },
      ignoreWarnings: [/Failed to parse source map/],
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "./tsconfig.path.json",
      },
    },
  ],
};
