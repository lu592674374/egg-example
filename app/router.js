// app/router.js
module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/news', app.controller.news.list);
  app.get('/user/:id', app.controller.user.info);
};
