require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");

const animeRoutes = require("./routes/animes");
const cors = require("cors");

//express app
const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use("/api/animes", animeRoutes);
app.use("/api/users", userRoutes);


//connect to db
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        const {
            PORT
        } = process.env;
        app.listen(PORT, () => {
            console.log("connected to DB and listening on port", PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });