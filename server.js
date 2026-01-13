// Load environment variables (must be on top)
const dotenv = require('dotenv');
dotenv.config();

// Other constants go here
const express = require('express');
const mongoose = require('./DataBase/connection');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes/index'));

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});