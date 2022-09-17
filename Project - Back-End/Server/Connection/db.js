const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const dbconnection = mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("Connected to DB and Listening on Port",PORT);
        });
    })
    .catch((error)=>{
        console.log(error);
    });

module.exports = dbconnection;