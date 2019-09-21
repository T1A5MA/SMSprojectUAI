const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Estructura DB SMS Nexmo
const smsNexmoSchema = new Schema({

});

module.exports = mongoose.model('SmsNexmo', smsNexmoSchema);