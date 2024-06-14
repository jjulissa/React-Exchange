const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://xecdapi.xe.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Opcional: elimina el prefijo /api de las solicitudes
      },
    })
  );
};
