// Import the mongoose library
const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURL = 'mongodb+srv://prajakta:praju%40123@cluster0.jz314qu.mongodb.net/'; //Replace with your MongoDB URL

mongoose.set('strictQuery', false);
// Create a new Mongoose connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notifications of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to open event (to perform operations after the connection is successfully opened)
db.once('open', () => {
    console.log('Connected to MongoDB!');

    // Create a new database using Mongoose
    db.createCollection('myDatabase', (err, result) => {
        if (err) {
            console.error('Error creating database:', err);
        } else {
            console.log('Database "myDatabase" created successfully!');
        }

        // Close the MongoDB connection (optional)
        mongoose.connection.close();
    });
});
