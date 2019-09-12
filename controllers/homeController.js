exports.getHomePage = (req, res, next) => {
  res.render('home', {
    path: '/',
    pageTitle: 'Home',
  });
};

exports.getAllSMS = (req, res, next) => {
  Sms.fetchAll()
    .then(sms => {
      res.render('sms', {
        smsData: sms,
        pageTitle: 'Sms',
        path: 'sms'
      })
    })
    .catch(err => {
      console.log(err);
    });
};