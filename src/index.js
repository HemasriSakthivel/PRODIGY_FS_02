const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./routes/employees');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/employees', employeeRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
