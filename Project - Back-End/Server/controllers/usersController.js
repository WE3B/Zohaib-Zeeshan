const express = require("express");
const mongoose= require("mongoose");
const { User,validate, validateAuth } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const register=async(req,res)=>{
    try{
        const{error} = validate(req.body);
        if(error)
            return res.status(400).send({message:error.details[0].message});
       
        const user = await User.findOne({email: req.body.email});
        if(user)
            return res.status(409).send({message: "User with given email already exist!"})
     const salt = await bcrypt.genSalt(Number(process.env.SALT));
     const hashPassword = await bcrypt.hash(req.body.password,salt);
     await new User({...req.body,password: hashPassword}).save();
     res.status(201).send({message: "User created Successfully!"})
    }catch(error){
        res.status(500).send({message:"Internal Server Error!"})
    }
}

const login =async (req, res) => {
	try {
		const { error } = validateAuth(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

            const token = await user.generateAuthToken();
            res.status(200).send({ data : token , message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}



module.exports = {register,login}