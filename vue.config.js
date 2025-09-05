const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: '/downloader/',
  devServer: {
    allowedHosts: "all",
    host: "0.0.0.0",
    port: 8080,
    client: {
      webSocketURL: {
        protocol: "wss",                // เปลี่ยนจาก ws เป็น wss
        hostname: "gomo.mimotech.org",  // domain ของคุณ
        port: 8080,
        pathname: "/ws"
      }
    }
  }
});
