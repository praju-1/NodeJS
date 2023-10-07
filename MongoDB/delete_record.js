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
        let myquery = { address: "Green Grass 1"};

        // deleting single record
        const result = await db.collection('myDatabase').deleteOne(myquery)
        console.log(result);

        // Deleting multiple record
        let multidelete = {address : /^0/};
        const out = await db.collection('myDatabase').deleteMany(multidelete)
        console.log(out);
       

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the MongoClient
        client.close();
    }
}
// Call the run function to execute the code
run();

