module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["module-resolver", { root: ["."] }],
      "react-native-reanimated/plugin",
      "react-native-classname-to-dynamic-style",
      ["react-native-stylename-to-style", { extensions: ["scss", "sass"] }],
      [
        "react-native-platform-specific-extensions",
        { extensions: ["scss", "sass"] },
      ],
    ],
  };
};
