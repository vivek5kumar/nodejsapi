const express = require("express");
const router = express.Router();
const MenuItem = require('./../models/menu');


// POST route add a item
router.post("/", async (req, resp) => {
    try {
        const data = req.body;
        const newItem = MenuItem(data);
        const response = await newItem.save();
        console.log("Items saved");
        resp.status(200).json(response);
    } catch (err) {
        console.log(error);
        resp.status(500).json({ error: "Internal server error", error });
    }
});

// GET route find all items data list

router.get("/", async (req, resp) => {
    try {
        const items = await MenuItem.find();
        console.log("Find data successfully");
        resp.status(200).json(items);
    } catch (err) {
        console.log(err);
        resp.status(500).json(items);
    }

});
module.exports = router;