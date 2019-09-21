const MessagingResponse = require('twilio').twiml.MessagingResponse;
const SmsTwilio = require('../models/smsTwilioModel');
const SmsNexmo = require('../models/smsNexmoModel');


exports.postTwilioSMS = (req, res, next) => {
  const twiml = new MessagingResponse();
  twiml.message('Este es un SMS de Twilio de prueba.');
  res.writeHead(200, {
    'Content-Type': 'text/xml'
  });
  res.end(twiml.toString());
};

//Logica SMS Nexmo
exports.postNexmoSMS = (req, res, next) => {

};