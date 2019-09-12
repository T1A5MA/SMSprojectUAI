const express = require('express');
const router = express.Router();
const homeController = require('../controllers/authController');

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

module.exports = router;