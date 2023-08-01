const express = require("express");
const statRouter = express.Router();
const statController = require("../controller/statController");

statRouter.get("/stats/:id", statController.initialFetch, (req, res) => {
  console.log("initial get");
  res.status(200).json(res.locals.user);
});

statRouter.post("/increment", statController.incrementStat, (req, res) => {
  return res.status(200).json("done");
});
statRouter.post("/joinGroups", statController.joinGroup, (req, res) => {
  return res.status(200);
});

statRouter.get("/getGroups/:id", statController.getGroups, (req, res) => {
  return res.status(200).json(res.locals.groups);
});
statRouter.get(
  "/getUserGroups/:id",
  statController.getUserGroups,
  (req, res) => {
    res.status(200).json(res.locals.userGroups);
  }
);

statRouter.post("/increment", statController.incrementStat, (req, res) => {
  return res.status(200).json("done");
});
module.exports = statRouter;
