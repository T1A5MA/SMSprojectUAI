const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const adminController = require('../controllers/adminController');


router.get('/index', adminController.getAdminIndex);

module.exports = router;