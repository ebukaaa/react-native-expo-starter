/** @type {import('@babel/core').ConfigFunction} */

module.exports = function useConfig(api) {
  api.cache(true);
  return { presets: ["babel-preset-expo"] };
};
