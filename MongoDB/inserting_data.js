const { MongoClient } = require('mongodb');

const env = require("dotenv");
env.config();

// MongoDB connection URL and database name
// Bydefault it uses test database

const dbName = 'test'; // Change the database name

// Sample data to insert into the database
const sampleData = [
    { name: 'John', age: 30, address: 'Pune' },
    { name: 'Alice', age: 25, address: 'Mumbai' },
    { name: 'Bob', age: 35, address: 'Banglore' },
];

// Create a MongoClient and connect to the MongoDB server
const client = new MongoClient(process.env.DB_connection);

async function inserData() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        // Select the database
        const db = client.db(dbName);

        // Insert data into a collection (e.g., 'users')
        const collection = db.collection('myDatabase');
        const result = await collection.insertMany(sampleData);

        console.log(`Inserted ${result.insertedCount} documents into the 'myDatabase' collection.`);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the MongoClient
        client.close();
    }
}

// Call the run function to execute the code
inserData();
