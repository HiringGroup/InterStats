const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = 3000;
const apiRoute = require("./routes/apiRoute");
const authRoute = require("./routes/authRoute");
const socketController = require("./controllers/socketController");
const http = require("http");
const socketIO = require("socket.io");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:8080" }));

qpp.use('/login', auth)
app.use('/stats', makestates)


app.get("/*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../index.html"), function (err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  
  server.listen(PORT, () => {
    console.log(`WebSocket server running on ${PORT}`);
  });