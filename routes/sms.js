const express = require('express');
const router = express.Router();
const smsController = require('../controllers/smsController');

//Recibir SMS de Twilio
router.post('/twilioSMS', smsController.postTwilioSMS);


module.exports = router;