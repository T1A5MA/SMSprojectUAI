const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const adminController = require('../controllers/adminController');

//GET
router.get('/index', adminController.getSMS);
router.get('/addSMS', adminController.getAddSMS);


//POST
router.post('/addSMS', adminController.postAddSMS);
router.post('/deleteSMS', adminController.postDeleteSMS);

module.exports = router;