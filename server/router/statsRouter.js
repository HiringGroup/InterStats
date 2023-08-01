const express = require("express");
const statRouter = express.Router();
const statController = require("../controller/statController");

statRouter.get("/stats/:id", statController.initialFetch, (req, res) => {
  console.log("initial get");
  res.status(200).json(res.locals.user);
});

statRouter.post("/increment", statController.incrementStat, (req, res) => {
  res.status(200).json("done");
});
statRouter.post("/joinGroups", statController.joinGroup, (req, res) => {
  res.status(200);
});

statRouter.get("/getGroups/:id", statController.getGroups, (req, res) => {
  res.status(200).json(res.locals.groups);
});

statRouter.post("/increment", statController.incrementStat, (req, res) => {
  res.status(200).json("done");
});
module.exports = statRouter;
