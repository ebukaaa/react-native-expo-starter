const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

module.exports = (async function config() {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve("./utils/transform.js"),
      getTransformOptions: async () => ({
        transform: { experimentalImportSupport: false, inlineRequires: false },
      }),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      extraNodeModules: {
        screens: path.resolve("./screens"),
        components: path.resolve("./components"),
      },
      sourceExts: [...sourceExts, "scss", "sass", "svg"],
    },
  };
})();
