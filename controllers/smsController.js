const MessagingResponse = require('twilio').twiml.MessagingResponse;
const SmsTwilio = require('../models/smsTwilioModel');
const SmsNexmo = require('../models/smsNexmoModel');


exports.postTwilioSMS = (req, res, next) => {

  const twiml = new MessagingResponse();
  //Primary Key Twilio SMS (SmsSid)
  const SmsSid = req.body.SmsSid;
  const ToCity = req.body.ToCity;
  const ToState = req.body.ToState;
  const ToCountry = req.body.ToCountry;
  const SmsStatus = req.body.SmsStatus;
  const FromCity = req.body.FromCity;
  const FromState = req.body.FromState;
  const FromCountry = req.body.FromCountry;
  const Body = req.body.Body;
  const From = req.body.From;
  const To = req.body.To;

  const smsTwilio = new SmsTwilio({
    SmsSid: SmsSid,
    ToCity: ToCity,
    ToState: ToState,
    ToCountry: ToCountry,
    SmsStatus: SmsStatus,
    FromCity: FromCity,
    FromState: FromState,
    FromCountry: FromCountry,
    Body: Body,
    From: From,
    To: To,
  });
  smsTwilio.save()
  .then((data)=> {
    console.log(data);
   })
  .catch((err)=> {
    console.log(err);
  })

  twiml.message('Se ha recibido correctamente su SMS de emergencia');
  res.writeHead(200, {
    'Content-Type': 'text/xml'
  });
  res.end(twiml.toString());
};