const express = require('express');
const router = express.Router();
const smsController = require('../controllers/smsController');

//Recibir SMS de Twilio
router.post('/twilioSMS', smsController.postTwilioSMS);
//Recibir SMS de Nexmo
router.post('/nexmoSMS', smsController.postNexmoSMS);


module.exports = router;