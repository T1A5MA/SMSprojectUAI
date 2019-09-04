const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const errorController = require('../controllers/errorController');

router.use(errorController.get404Page);

module.exports = router;