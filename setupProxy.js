import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: `${process.env.REACT_APP_BACK_URL}`,
      changeOrigin: true,
    })
  );
};
