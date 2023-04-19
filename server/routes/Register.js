const express = require('express');
const route = express.Router();
const {RegisterGetFun, RegisterPostFun}  = require('../controller/RegisterFunction');

route.get('/register/get/', RegisterGetFun);
route.post('/register/post/', RegisterPostFun);

module.exports = route;