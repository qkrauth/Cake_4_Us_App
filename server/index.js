const express = require("express");
const cors = require("cors");
const server = express();
const db = require("./util/database");
const {PORT} = process.env;
const path = require("path");
const { Base, Extra } = require("./util/models");
const seed = require("./seed/seed");
const {getOptions} = require("./controllers/cakeController");

require("dotenv").config();

server.use(express.json());
server.use(cors());

server.use(express.static(path.resolve(__dirname, "../build")));

server.get("/api/getOptions", getOptions);

server.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "..build", "index.html"))
});

db
    // .sync({force: true})
    // .then(() => seed());

server.listen(PORT, () => console.log(`server running on port ${PORT}`));