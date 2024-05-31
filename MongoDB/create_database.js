var MongoClient = require('mongodb').MongoClient;
const env = require("dotenv");
env.config();

MongoClient.connect(process.env.DB_connection, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    //Create a collection name "customers":
    dbo.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});