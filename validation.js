// Importing package to provide validation
const joi = require('joi');

const registerValidation = (data) => {
    const Schema = joi.object({
        // providing validation to specified parameter
        name : joi.string().required().min(2).max(7),
        email : joi.string().required().email(),
        mobile : joi.number().integer().min(10).max(99999999999).required(),
        password : joi.string().required().min(5).max(8)
    })
    return Schema.validate(data);
}
//login validation
const loginValidation = (data)=>{
    const Schema = joi.object({
        // Schema for login validation
        email : joi.string().required().email(),
        password : joi.string().required().min(2).max(8)
    })
    return Schema.validate(data);
}
 
// Exporting logic of validation
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;