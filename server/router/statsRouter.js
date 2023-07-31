const express = require("express");
const statRouter = express.Router();

statRouter.get("/stats", (req, res) => {
  console.log("initial get");
});

module.exports = statRouter;
