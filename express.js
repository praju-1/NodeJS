// Importing require modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require('./route');
// const router = require('./route_new')
const env = require("dotenv");
const postRoute = require("./post");

// Creating Middleware for API 
app.use(express.json());
app.use("/user", router);
app.use("/authorisedUser", postRoute);
env.config()


mongoose.set('strictQuery', false);
//DB connection
mongoose.connect(process.env.DB_connection)
    // applying promise structure to handle data properly

    .then(() => {
        console.log("Connection successfull");
    })
    .catch((err) => {
        console.log(err);
    })

// Port number to work code
app.listen(4000);