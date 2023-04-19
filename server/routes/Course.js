const express = require('express');
const route = express.Router();

route.get('/course');
route.post('/course');

module.exports = route;