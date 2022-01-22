const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  //针对antd 实现按需打包：根据import来打包 （使用babel-import-plugin)
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true, //自动打包相关的样式 默认style:'css
  }),
  //增加路径别名的处理
  addWebpackAlias({
    "@": path.resolve("./src"),
  })
);
