const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
    },
    teste: {
        type: String,
        enum: ["spice", "sweet", "sour"],
        require: true
    },
    is_drinckin: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: [],
    },
    num_sales: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model("menu", menuSchema);