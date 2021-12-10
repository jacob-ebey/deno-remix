/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  serverModuleFormat: "esm",
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
  devServerBroadcastDelay: 1000,
};
