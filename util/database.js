const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect('mongodb+srv://SMS_nodeApp:mvGx8TZJ5R7g5c5l@cluster0-kcdyy.mongodb.net/test?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(client => {
    _db = client.db();
    callback(client);
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
};

const getDB = () => {
  if (_db) {
    return _db;
  }
  throw 'DB error';
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
