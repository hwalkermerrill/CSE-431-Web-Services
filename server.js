// Load environment variables (must be on top)
const dotenv = require('dotenv');
dotenv.config();

// Constants go here
const Joi = require('joi'); // Capitalize class objects
const express = require('express');
const mongoose = require('./DataBase/connection');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes/index'));

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});