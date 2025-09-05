const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/downloader/' : '/',
  devServer: {
    allowedHosts: "all", // ปิดการเช็ค host header
    host: "0.0.0.0",     // ให้ container อื่นเข้าถึงได้
    port: 8080           // หรือพอร์ตที่คุณใช้
  }
});
