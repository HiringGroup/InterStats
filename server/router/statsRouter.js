const express = require("express");
const statRouter = express.Router();
const statController = require("../controller/statController");

statRouter.get("/stats/:id", statController.initialFetch, (req, res) => {
  console.log("initial get");
  res.status(200).json(res.locals.user);
});

module.exports = statRouter;
