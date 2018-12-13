/* eslint-disable global-require */
module.exports = function(api) {
  api.cache(() => process.env.NODE_ENV);

  return {
    presets: [
      // require("@babel/preset-es2015"),
      require("@babel/preset-env"),
      require("@babel/preset-react")
    ],
    plugins: [
      require("@babel/plugin-syntax-dynamic-import"),
      [require("@babel/plugin-proposal-class-properties"), { loose: true }]
    ]
  };
};
