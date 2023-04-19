const express = require('express');
const route = express.Router();
const LoginPostFun = require('../controller/LoginFunction');

route.get('/login', function (req, res) {
    res.send("This is the Login Get");
})
route.post('/login', LoginPostFun);

module.exports = route;