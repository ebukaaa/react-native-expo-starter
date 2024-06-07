// Learn more https://docs.expo.io/guides/customizing-metro
/** @type {import('expo/metro-config').MetroConfig} */

const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async function useConfig() {
  const configs = await getDefaultConfig(__dirname, { isCSSEnabled: true });
  const { resolver: { sourceExts, assetExts } = {} } = configs;
  return {
    ...configs,
    transformer: {
      ...configs.transformer,
      babelTransformerPath: require.resolve("./configs/transform.js"),
    },
    resolver: {
      ...configs.resolver,
      sourceExts: [...sourceExts, "svg"],
      assetExts: assetExts.filter((ext) => ext !== "svg"),
    },
  };
})();
