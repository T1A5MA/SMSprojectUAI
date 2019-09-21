const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Estructura DB
const smsTwilioSchema = new Schema({
  account_sid: {
    type: String,
  },
  api_version: {
    type: String,
  },
  body: {
    type: String,
  },
  date_created: {
    type: String,
  },
  date_sent: {
    type: String,
  },
  date_updated: {
    type: String,
  },
  direction: {
    type: String,
  },
  error_code: {
    type: String,
  },
  error_message: {
    type: String,
  },
  from: {
    type: String,
  },
  messaging_service_sid: {
    type: String,
  },
  num_media: {
    type: Number,
  },
  num_segments: {
    type: Number,
  },
  price: {
    type: Number,
  },
  price_unit: {
    type: String,
  },
  sid: {
    type: String,
  },
  status: {
    type: String,
  },
  to: {
    type: String,
  },
  uri: {
    type: String,
  },
});

module.exports = mongoose.model('Sms', smsTwilioSchema);