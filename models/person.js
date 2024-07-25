const { decrypt } = require("dotenv");
const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const personSchema = mongoose.Schema({

    name: {
        type: String,
        require: true,
    },
    age: { type: Number },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true,
    },
    mobile: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    Address: { type: String },
    salary: {
        type: Number,
    },
    username: {
        require: true,
        type: String,
    },
    password: {
        require: true,
        type: String
    }
});


const personModel = mongoose.model('person', personSchema);
module.exports = personModel

