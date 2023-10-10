const upstreamTransformer = require("metro-react-native-babel-transformer");
const svg = require("react-native-svg-transformer");

module.exports.transform = function transform({ src, filename, options }) {
  if (filename.endsWith(".svg"))
    return svg.transform({ src, filename, options });
  return upstreamTransformer.transform({ src, filename, options });
};
