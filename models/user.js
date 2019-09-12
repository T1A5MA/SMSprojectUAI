const mongodb = require('mongodb');
const getDB = require('../util/database').getDB;

module.export = class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  save() {}
  static fetchAll() {}
}