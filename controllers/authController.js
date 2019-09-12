const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
  });
};

exports.postLogin = (req, res, next) => {
  res.session.isLoggedin
  res.render('/');
};
/*
exports.postLogin = (req, res, next) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const email = req.body.email;
  const password = req.body.password;
  const user = new User({
    nombre: nombre,
    apellido: apellido,
    email: email,
    password: password,
  });
  User.save();
};
*/