/*
const Sms = require('../models/sms');

exports.getAdminIndex = (req, res, next) => {
  res.render('index', {
    path: '/index',
    pageTitle: 'Index',
  });
};

exports.getSMS = (req, res, next) => {
  Sms.fetchAll()
    .then(sms => {
      res.render('admin/index', {
        sms: sms,
        path: '/index',
        pageTitle: 'Admin index',
      });
    })
    .catch(err => {
      console.log(err);
    });
};
exports.getAddSMS = (req, res, next) => {
  res.render('admin/addSMS', {
    pageTitle: 'Add SMS',
    path: '/admin/addSMS',
    editing: false
  });
};

exports.postAddSMS = (req, res, next) => {
  const numero = req.body.numero;
  const region = req.body.region;
  const ciudad = req.body.ciudad;
  const texto = req.body.texto;
  const sms = new Sms({
    numero: numero,
    region: region,
    ciudad: ciudad,
    texto: texto,
  });
  Sms.save();
}

exports.postDeleteSMS = (req, res, next) => {
  const smsId = req.body.smsId;
  Sms.deleteById(smsId)
    .then(() => {
      console.log("Elemento borrado");
      res.redirect('admin/index');
    })
    .catch(err => {
      console.log(err);
    })
}
*/