// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */

module.exports = (async function config() {
  const configs = await getDefaultConfig(__dirname, { isCSSEnabled: true });
  const { resolver: { sourceExts, assetExts } = {} } = configs;

  return {
    ...configs,
    transformer: {
      babelTransformerPath: require.resolve("./configs/transform.js"),
      getTransformOptions: async () => ({
        transform: { experimentalImportSupport: false, inlineRequires: false },
      }),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
