const express = require('express');
const { coursesGet, coursesPost } = require('../controller/CourseFunction');
const route = express.Router();

route.get('/course',coursesGet);
route.post('/course',coursesPost);

module.exports = route;