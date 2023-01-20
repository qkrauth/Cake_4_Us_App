const express = require("express");
const cors = require("cors");
const server = express();
const db = require("./util/database");
const { Base, Extra } = require("./util/models");
const seed = require("./seed/seed");

server.use(express.json());
server.use(cors());

db
    .sync({force: true})
    .then(() => seed());

server.listen(4500, () => console.log("running on PORT 4500"));