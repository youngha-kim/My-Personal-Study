module.exports = function (app){
  app.use(
      createProxyMiddleware('/public', {
          target: 'http://localhost:3000',
          changeOrigin: true
      })
  )
};