const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnent = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Tvizugit:4RmpQFkU4XX9PLgH@cluster0-2kbif.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnent;