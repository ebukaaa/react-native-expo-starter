const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

module.exports = (async function config() {
  const {
    resolver: { sourceExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-sass-transformer"),
      getTransformOptions: async () => ({
        transform: { experimentalImportSupport: false, inlineRequires: false },
      }),
    },
    resolver: {
      extraNodeModules: {
        screens: path.resolve("./screens"),
        components: path.resolve("./components"),
      },
      sourceExts: [...sourceExts, "scss", "sass"],
    },
  };
})();
