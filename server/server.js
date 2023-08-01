const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = 3000;
const http = require("http");
const socketIO = require("socket.io");
require('dotenv').config();
const CLIENT_ID = process.env.GITHUB_CLIENT_ID
const CLIENT_SECRETS = process.env.GITHUB_CLIENT_SECRETS

const statRouter = require("./router/statsRouter");
const authRouter = require("./router/authRouter")
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())

// app.use("/login", auth);
app.use("/user", statRouter);
app.use("/stats", statRouter);

app.get('/getAccessToken', async function (req, res) {
  console.log('In access token express')
  console.log('Github code: ', req.query.code)

  const params = '?client_id=' +
    CLIENT_ID +
    '&client_secret=' +
    CLIENT_SECRETS +
    '&code=' +
    req.query.code;

  await fetch('https://github.com/login/oauth/access_token' + params, {
    method: 'POST',
    headers: {
      "Accept": 'application/json'
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    });
});

app.get('/getUserData', async function (req, res) {
  req.get("Authorization")
  await fetch('https://api.github.com/user', {
    method: 'GET',
    headers: {
      "Authorization" : req.get('Authorization')
    }
  }).then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
    res.json(data)
  })
})




app.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
