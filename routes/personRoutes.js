const express = require("express");
const router = express.Router();
const Person = require('./../models/person');
const res = require("express/lib/response");
const { jwtMiddleware, generateToken } = require("./../jwt");


// POST route add new person
router.post("/signup", async (req, resp) => {
    try {
        const data = req.body;

        // create new person document

        const newPerson = Person(data);
        const response = await newPerson.save();
        console.log("Saved data");
        const payload = {
            id: response.id,
            username: response.username

        }
        const token = generateToken(payload);
        console.log("Token is :", token);
        resp.status(200).json({ response: response, token: token });
    } catch (error) {
        console.log(error);
        resp.status(500).json({ error: "Internal server error", error });
    }
});

// GET route find all person data list

router.get("/", async (req, resp) => {
    try {
        const data = await Person.find();
        console.log("data success");
        resp.status(200).json(data);
    } catch (err) {
        console.log(error);
        resp.status(500).json(data);
    }
});

// Data get by parametarized

router.get("/:workType", async (req, resp) => {
    try {
        const workType = req.params.workType;
        if (workType == "chef" || workType == "manager" || workType == "waiter") {
            const response = await Person.find({ work: workType });
            console.log("response fatched");
            resp.status(200).json(response);
        } else {
            resp.status(404).json({ error: "Invalide work type" });
        }
    } catch (err) {
        resp.status(500).json({ error: "Internal server error" });
    }
});


// Update our person record

router.put("/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const updatePersonData = req.body;

        const response = await Person.findOneAndUpdate({ _id: personId }, updatePersonData,
            {
                new: true,
                upsert: true
            }
        );
        if (!response) {
            return res.status(404).json({ error: "Person not found" });
        }
        console.log("Data Updated");
        res.status(200).json({ message: "Data upadated successfully" });
    } catch (err) {
        console.error("Error updating person:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findOneAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: "Person not found" });
        }
        console.log("Data Deleted");
        res.status(200).json({ message: "Data deleted successfully" });
    } catch (err) {
        console.error("Delete record:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router;