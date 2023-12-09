const { Appointment } = require('../models/appointment');


const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const addAppointment = async (req, res) => {
  const { uName, emailId, phoneNo, date, time } = req.body;


  try {
    const newAppointment = await Appointment.create({
      uName,
      emailId,
      phoneNo,
      date,
      time,
    });


    res.status(201).json(newAppointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const editAppointment = async (req, res) => {
  const { id } = req.params;
  const { uName, emailId, phoneNo, date, time } = req.body;


  try {
    const appointment = await Appointment.findByPk(id);


    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }


    appointment.uName = uName;
    appointment.emailId = emailId;
    appointment.phoneNo = phoneNo;
    appointment.date = date;
    appointment.time = time;


    await appointment.save();


    res.json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const deleteAppointment = async (req, res) => {
  const { id } = req.params;


  try {
    const appointment = await Appointment.findByPk(id);


    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }


    await appointment.destroy();


    res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  getAllAppointments,
  addAppointment,
  editAppointment,
  deleteAppointment,
};






