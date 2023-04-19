const express = require('express');
const route = express.Router();

route.get('/contact');
route.post('/contact');

module.exports = route;