module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }, "@babel/preset-react"],
      "nativewind/babel",
    ],
    plugins: [
      'expo-router/babel',
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin'
    ]
  };
};