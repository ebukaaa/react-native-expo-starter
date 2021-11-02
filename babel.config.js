module.exports = (api) => {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { lazyImports: true }]],
    plugins: [["@babel/plugin-transform-react-jsx", { runtime: "automatic" }]],
  };
};
