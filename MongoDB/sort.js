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

        // Ascending order sort
        let mysort = {name :1};

        // Descending order sort
        // let mysort = {name :-1};

        // you can use other keys also
        // let mysort = {_id :1};

        const result = await db.collection('myDatabase').find().sort(mysort).toArray()

        console.log(result);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the MongoClient
        client.close();
    }
}
// Call the run function to execute the code
run();

