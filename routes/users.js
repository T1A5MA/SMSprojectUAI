/*
Aqui se estableceran las rutas hacia las paginas para los usuarios
*/
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

//Recibir SMS de Twilio
router.get('/dashboard', dashboardController.getDashboard);


module.exports = router;