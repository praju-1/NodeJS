const { MongoClient } = require('mongodb');
const env = require("dotenv");
env.config();

// Create a MongoClient and connect to the MongoDB server
const client = new MongoClient(process.env.DB_connection);

async function run() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        const db = client.db(); // The database name can be specified here if needed

        // Record which you have to delete
        var myquery = { address: "Valley 345" };

        var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };

        // Updating single record
        const result = await db.collection('myDatabase').updateOne(myquery, newvalues)
        console.log(result);

        // // updating multiple record
        // let multiupdate = {address : /^S/}
        // let value = {$set: {name: "Minnie"} };
        // const out = await db.collection('myDatabase').updateMany(multiupdate, value)
        // console.log(out);
       

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the MongoClient
        client.close();
    }
}
// Call the run function to execute the code
run();

