const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const Joi = require('joi')
const passwordComplexity = require("joi-password-complexity");

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        }
    },
    {timestamps: true}
);
userSchema.methods.generateAuthToken = function(){
    const token =  jwt.sign(
        {_id: this._id},
        process.env.JWTPRIVATEKEY,
        {expiresIn:"7d"});
    return token;
};
const User = mongoose.model("user", userSchema);

const validate = (data)=>{
    const schema = Joi.object({
        userName: Joi.string().required().label("User Name"),
        email: Joi.string().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    });
    return schema.validate(data)
}
const validateAuth = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};
module.exports = {User,validate,validateAuth};