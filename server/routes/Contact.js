const express = require('express');
const route = express.Router();
const { ContactGetFun, ContactPostFun } = require('../controller/ContactFunction');

route.get('/contact', ContactGetFun);
route.post('/contact', ContactPostFun);

module.exports = route;