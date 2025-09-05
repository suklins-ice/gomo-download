const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: '/downloader/', // path สำหรับ production

  devServer: {
    allowedHosts: "all",   // ปิดการเช็ค host header
    host: "0.0.0.0",       // ให้ container หรือ network อื่นเข้าถึงได้
    port: 8080,            // พอร์ต dev server

    // กำหนด WebSocket สำหรับ HMR ให้เข้าถึงจาก domain จริง
    client: {
      webSocketURL: {
        hostname: "gomo.mimotech.org", // ชื่อ domain ที่ browser ใช้
        port: 8080,
        protocol: "ws"
      }
    }
  }
});
