const http = require("http");
const fs = require("fs");
const url = require("http");

const myServer = http.createServer((req, resp) => {
    const currentDate = new Date();


    const log = `${currentDate.toDateString()} ${req.url}\n`;

    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
                resp.end("home")
                break;
            case "/about":
                resp.end("about")
        }
        resp.end("hello from server again");
    })
});

myServer.listen(8080, () => console.log("Server started"));