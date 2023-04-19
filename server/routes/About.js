const express = require('express');
const route = express.Router();

route.get('/about');
route.post('/about');

module.exports = route;