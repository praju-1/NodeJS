const { MongoClient } = require('mongodb');
const env = require("dotenv");
const { log } = require('debug/src/browser');
env.config();

// Create a MongoClient and connect to the MongoDB server
const client = new MongoClient(process.env.DB_connection);

async function run() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        const db = client.db(); // The database name can be specified here if needed


        // Finding record from database
        const result = await db.collection('myDatabase').find({}).toArray();
        console.log(result);

        // Finding limited data 
        // It only return 5 record using limit
        const limit_data = await db.collection('myDatabase').find().limit(5).toArray();
        console.log(limit_data);

        // Find some data 
        const some_data = await db.collection('myDatabase').find({}, {projection: {_id : 0, name : 1}}).toArray()
        console.log(some_data);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the MongoClient
        client.close();
    }
}
// Call the run function to execute the code
run();

