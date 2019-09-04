exports.getHomePage = (req, res, next) => {
  res.render('home', {
    path: '/',
    pageTitle: 'Home',
  });
};
