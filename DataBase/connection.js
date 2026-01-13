const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
module.exports = mongoose;