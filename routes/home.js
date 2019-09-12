const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

//Al recibir request de home, usa homeController
router.get('/', homeController.getHomePage);

module.exports = router;