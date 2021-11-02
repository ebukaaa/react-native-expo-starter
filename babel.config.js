module.exports = (api) => {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { lazyImports: true }]],
    // plugins: ["react-require"],
    plugins: [
      [
        "@babel/plugin-transform-react-jsx",
        {
          runtime: "automatic",
        },
      ],
    ],
  };
};
