const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/helpdesk',
    createProxyMiddleware({
      target: 'http://secure.focusrtech.com:8029',
      changeOrigin: true
    })
  );
};
