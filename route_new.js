// importing require modules and packages

const express = require("express").Router();
const route = require("express").Router();
const { registerValidation, loginValidation } = require('./validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModule = require('./module');


route.get('/register', function(req, res, next){
    return res.render('register.html');
});

// Creating API's using HTTP request
// API for registration
route.post("/register", async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    //email validation
    const emailExist = await userModule.findOne({ email: req.body.email });
    if (emailExist) return res.status(404).send('Email is already Exists');

    //password bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);


    const newUser = new userModule({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        mobile: req.body.mobile
    })
    try {
        const SaveData = await newUser.save();
        res.send(SaveData);
    } catch (error) {
        console.log(error);
    }

    route.get('/login', function(req, res, next){
        return res.render('login.html');
    })

    //login validation
    route.post("/login", async (req, res) => {
        const { error } = loginValidation(req.body);
        if (error) return res.status(404).send(error.details[0].message);


        //login email validation
        const userExist = await userModule.findOne({ email: req.body.email });

        if (!userExist) return res.status(400).send("Invalid email-id");

        //login password validation

        const ispass = await bcrypt.compare(req.body.password, userExist.password)
        if (!ispass) return res.status(401).send("Invalid password");


        //JWT token
        const token = jwt.sign({ _id: userExist._id }, process.env.Token_secret);
        res.header('auth-token', token).send(token);

        res.send("login successfully");
    });

     // showdata to get data
    // using below API we can access all data from database
    route.get("/showData", async (req, res) => {
        try {
            const showData = await userModule.find();
            res.send(showData)
        } catch (error) {
            console.log(error);
        }

    })

    //Delete data
    // particular id related data will be deleted
    route.delete("/delete", async (req, res) => {
        let id = req.query.id;
        try {
            const deleteData = await userModule.findByIdAndDelete(id);
            res.send('Delete data successfully')
        } catch (error) {
            console.log(error);
        }
    })


// Update data using PUT method
route.put("/update", async (req, res) => {
    const id = req.body.id;

    try {
        // Use findByIdAndUpdate to update the data based on the ID
        const updateData = await userModule.findByIdAndUpdate(id, req.body);
        if (!updateData) {
            return res.status(404).send("Data not found");
        }

        // Optionally, you can send back the updated data
        const updatedData = await userModule.findById(id);
        res.send(updatedData);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
})
//showone user
     // using below API we can access one specific data from database using ID
     route.get("/showOne", async (req, res) => {
        const id = req.query.id;

        try {
            const showOne = await userModule.findById(id);
            res.send(showOne);
        } catch (error) {
            console.log(error);
        }
    })
})
module.exports = route;
