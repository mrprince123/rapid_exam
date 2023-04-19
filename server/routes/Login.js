const express = require('express');
const route = express.Router();
const LoginPostFun = require('../controller/LoginFunction');


route.get('/login');
route.post('/login', LoginPostFun);

module.exports = route;