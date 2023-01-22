const express = require("express");
const cors = require("cors");
const server = express();
const db = require("./util/database");
const { Base, Extra } = require("./util/models");
const seed = require("./seed/seed");
const {getOptions} = require("./controllers/cakeController");

server.use(express.json());
server.use(cors());

server.get("/api/getOptions", getOptions);

// db
//     .sync({force: true})
//     .then(() => seed());

server.listen(4500, () => console.log("running on PORT 4500"));