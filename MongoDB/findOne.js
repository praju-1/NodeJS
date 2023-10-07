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


        // Finding the record from database
        const result = await db.collection('myDatabase').findOne({});

        // You can access particular information from 
        // Complete result
        console.log(result);

        // Only ID of user 
        console.log(result._id);

        // Only name of user
        console.log(result.name);

        // Age of user
        console.log(result.age);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the MongoClient
        client.close();
    }
}
// Call the run function to execute the code
run();

