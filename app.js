const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Require the 'path' module
const sequelize = require('./util/database');
const appointmentsRoutes = require('./routes/appointments');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Define a default route for the root path
app.get('/', (req, res) => {
  // Use path.join() to specify the path to your HTML file
  res.sendFile(path.join(__dirname, 'views', 'user', 'index.html'));
});

app.use('/user/appointments', appointmentsRoutes);

sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => console.log(err));
