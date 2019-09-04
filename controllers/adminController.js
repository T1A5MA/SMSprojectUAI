exports.getAdminIndex = (req, res, next) => {
  res.render('index', {
    path: '/index',
    pageTitle: 'Index',
  });
};