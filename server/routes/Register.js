const express = require('express');
const route = express.Router();
const {RegisterGetFun, RegisterPostFun}  = require('../controller/RegisterFunction');

route.get('/register', RegisterGetFun);
route.post('/register', RegisterPostFun);

module.exports = route;