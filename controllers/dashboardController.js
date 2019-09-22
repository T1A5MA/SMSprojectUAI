const SmsTwilio = require('../models/smsTwilioModel');
const SmsNexmo = require('../models/smsNexmoModel');

exports.getDashboard = (req, res, next) => {
  //Recibe SMS de twilio
  SmsTwilio.find()
  .then(sms => {
    res.render('dashboard', {
      path: '/dashboard',
      pageTitle: 'Dashboard',
      isAuthenticated: req.session.isLoggedIn,
      sms: sms,
    });
  })
  .catch(err => {
    console.log(err);
    res.send("Ha ocurrido un error");
  });
};
