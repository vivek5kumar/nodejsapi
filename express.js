const express = require('express')
const app = express()
const db = require("./db");


const bodyParser = require("body-parser");

const MenuItem = require("./models/menu");



app.use(bodyParser.json());  //req.body
db()


// import the router file

const personRouter = require("./routes/personRoutes");
app.use("/person", personRouter);


const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server started"))