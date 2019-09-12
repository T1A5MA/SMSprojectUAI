//const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//Mongoose
const mongoose = require('mongoose');

//Initialize express
const app = express();
//Template Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Routes functions
const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');
const errorRoutes = require('./routes/error');

//Middlewares - Encode Body + Static Files
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

//Routes to admin (login)
app.use('/admin', adminRoutes);
//Routes to else (no login)
app.use(homeRoutes);
//Routes to error pages
app.use(errorRoutes);

//Server port
const PORT = process.env.PORT || 3000;
//Connect DB
mongoose.connect('mongodb+srv://SMS_nodeApp:mvGx8TZJ5R7g5c5l@cluster0-kcdyy.mongodb.net/test?retryWrites=true&w=majority')
  .then(result => {
    app.listen(PORT);
  }).catch(err => {
    console.log(err);
  });