const express = require('express')
const app = express()
const db = require("./db");
const bodyParser = require("body-parser");
const passport = require("./auth");

require("dotenv").config();


const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());  //req.body

db();

// Middleware Function
// const logRequest = (req, resp, next) => {
//     console.log(`${Date().toLocaleString()} Request mode to :${req.originalUrl}`);
//     next();
// }

// app.use(logRequest);

app.use(passport.initialize());
const localAuthMIddleware = passport.authenticate("local", { session: false })

app.get("/", function (req, resp) {
    resp.send("Welcome to Node Js tutorial")
})

// import the router file

const personRouter = require("./routes/personRoutes");
app.use("/person", localAuthMIddleware, personRouter);


const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);


app.listen(PORT, () => console.log("Server started"))