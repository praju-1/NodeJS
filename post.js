// Importing require module and packages

const route = require("express").Router();
const verify = require("./verifyToken")

// Creating route for JSON format
route.get("/", verify, (req, res)=>{
    res.json({
        post : {
            title : "JWT Token",
            description : "This is our first JWT"
        }
    })
})
module.exports = route;