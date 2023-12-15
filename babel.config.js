module.exports = function(api) {
  api.cache(false);
  return {
    // presets: ["babel-preset-expo",'module:metro-react-native-babel-preset'],
    presets: [['module:metro-react-native-babel-preset', {
      unstable_disableES6Transforms: true
    }]],
    plugins: [
      [
        "babel-plugin-inline-import",
        {
          extensions: [".svg"]
        }
      ]
    ]
  };
};
