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

        // Define the object to insert
        const myobj = { name: "Ajeet Kumar", age: "28", address: "Delhi" };

        // Insert the object into a collection
        const result = await db.collection('myDatabase').insertOne(myobj);

        console.log(`Inserted ${result.insertedCount} record with _id: ${result.insertedId}`);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the MongoClient
        client.close();
    }
}
// Call the run function to execute the code
run();

