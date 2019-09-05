const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const homeController = require('../controllers/homeController');

//Al recibir request de home, usa homeController
router.get('/', homeController.getHomePage);
router.get('/sms', homeController.getAllSMS);

module.exports = router;