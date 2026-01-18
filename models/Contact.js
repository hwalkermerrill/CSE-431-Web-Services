//Dependencies
const mongoose = require('../DataBase/connection');

//Schema Definitions
const contactSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  favoriteColor: { type: String },
  birthday: { type: String }
});

//Exports
module.exports = mongoose.model('Contact', contactSchema);