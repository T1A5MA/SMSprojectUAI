const MessagingResponse = require('twilio').twiml.MessagingResponse;
const Sms = require('../models/smsModel');


exports.postTwilioSMS = (req, res, next) => {
  const twiml = new MessagingResponse();
  twiml.message('Este es un SMS de Twilio de prueba.');
  res.writeHead(200, {
    'Content-Type': 'text/xml'
  });
  res.end(twiml.toString());
};