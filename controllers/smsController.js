const twilioMessagingResponse = require('twilio').twiml.MessagingResponse;


exports.postTwilioSMS = (req, res, next) => {
  const twiml = new twilioMessagingResponse();
  twiml.message('Este es un SMS de Twilio de prueba.');
  res.writeHead(200, {
    'Content-Type': 'text/xml'
  });
  res.end(twiml.toString);
};