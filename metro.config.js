// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */

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
