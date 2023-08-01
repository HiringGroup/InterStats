const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = 3000;
const http = require("http");
const socketIO = require("socket.io");

const statRouter = require("./router/statsRouter");
const authRouter = require("./router/authRouter")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:8080" }));

// app.use("/login", auth);
app.use("/stats", statRouter);

app.use('/authenticate',authRouter)

app.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.use("/getGroups", statRouter)

app.use("/joinGroups", statRouter)

app.listen(PORT, () => {
  console.log(`WebSocket server running on ${PORT}`);
});
