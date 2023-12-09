const express = require('express');
const router = express.Router();
const appointmentsController = require('../controller/appointmentsController');

router.get('/data', appointmentsController.getAllAppointments);
router.post('/', appointmentsController.addAppointment);
router.post('/edit/:id', appointmentsController.editAppointment);
router.get('/delete/:id', appointmentsController.deleteAppointment);

module.exports = router;
