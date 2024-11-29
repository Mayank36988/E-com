const express = require('express');
const CloudeneryRoute = express.Router();
const { CloudeneryTest } = require('../../Controllers/CloudnaryController/CloudnaryController'); // Adjust the path if needed
const upload = require('../../Middlewares/multer');

// Use `CloudeneryRoute` to define your route and method
CloudeneryRoute.post("/",upload, CloudeneryTest);

module.exports = CloudeneryRoute;
