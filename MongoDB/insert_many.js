const { MongoClient } = require('mongodb');
const env = require("dotenv");
env.config();


// Create a MongoClient and connect to the MongoDB server
const client = new MongoClient(process.env.DB_connection);

async function run() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log("Connection created");

        const db = client.db(); // The database name can be specified here if needed

        // Define the object to insert

        // adding _id field
        const myobj = [{ _id: 154, name: 'Chocolate Heaven' },
        { _id: 155, name: 'Tasty Lemon' },
        { _id: 156, name: 'Vanilla Dream' }]


        // without _id field which generate default unique id for each record
        // { name: 'John', age: "23", address: 'Highway 71'},
        // { name: 'Peter', age: "29", address: 'Lowstreet 4'},
        // { name: 'Amy', age: "28",  address: 'Apple st 652'},
        // { name: 'Hannah', age: "27",  address: 'Mountain 21'},
        // { name: 'Michael', age: "22",  address: 'Valley 345'},
        // { name: 'Sandy', age: "22",  address: 'Ocean blvd 2'},
        // { name: 'Betty',age: "30",  address: 'Green Grass 1'}];

        // Insert the object into a collection
        const result = await db.collection('myDatabase').insertMany(myobj);

        console.log("Many document inserted");

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the MongoClient
        client.close();
    }
}
// Call the run function to execute the code
run();

