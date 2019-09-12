const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Estructura DB
const smsSchema = new Schema({
  numero: {
    type: Number,
    required: true
  },
  region: {
    type: String,
    required: false
  },
  ciudad: {
    type: String,
    required: false
  },
  texto: {
    type: String,
    required: false
  },
});

module.exports = mongoose.model('Sms', smsSchema);





/* const mongodb = require('mongodb');
const getDB = require('../util/database').getDB;

class Sms {
  constructor(numero, region, ciudad, texto, id) {
    this.numero = numero;
    this.region = region;
    this.ciudad = ciudad;
    this.texto = texto;
    this._id = id ? new mongodb.ObjectID(id): null;
  }

  save() {
    const db = getDB();
    let dbOp;
    if (this._id) {
      dbOp = db.collection('sms').updateOne({_id: this._id}, {$set: this});
    } else {
      dbOp = db.collection('sms').insertOne(this);
    }
    return dbOp
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
  }

  static fetchAll() {
    const db = getDB();
    return db
    .collection('sms')
    .find()
    .toArray()
    .then(sms => {
      console.log(sms);  
      return sms;
    })
    .catch(err => {
      console.log(err);
    });
  }

  static deleteById(smsId) {
    const db = getDB();
    return db.collection('sms')
    .deleteOne({_id: new mongodb.ObjectId(smsId)})
    .then()
    .catch(err => {
      console.log(err);
    });
  }
}

module.exports = Sms; */