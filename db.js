
const mongoose = require('mongoose');
require("dotenv").config();
const mongoUrl = process.env.MONGODB_URL_LOCAL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log(`Mongo db connected`);
    } catch (error) {
        console.log("error", error);
    }
};

module.exports = connectDB;