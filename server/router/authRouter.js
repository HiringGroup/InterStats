const express = require('express');
const authRouter = express.Router();
const authController = require('../controller/authController')

// authRouter.post('/getAccessToken', 
//   authController.authenticate, 
//   (req, res) => {
//   res.status(200)
// })