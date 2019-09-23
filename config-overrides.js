const { injectBabelPlugin } = require("react-app-rewired")

module.exports = function override(config, dev) {
  config = injectBabelPlugin(
    ["import", { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config
  )

  return config
}