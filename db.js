
const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017/studentData';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log(`Mongo db connected`);
    } catch (error) {
        console.log("error", error);
    }
};

module.exports = connectDB;