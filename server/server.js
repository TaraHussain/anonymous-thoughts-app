const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json());

const port = process.env.PORT || 3000;

server.get("/", (req, res) => res.send("Hello, world!"));
server.listen(port, () =>
  console.log(`Express now departing from http://localhost:${port}!`)
);
