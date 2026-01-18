//Constants go on top
const Contact = require('../models/Contact');

const getContacts = (req, res, next) => {
  Contact.find()
    .then((contacts) => {
      res.status(200).json(contacts);
    })
    .catch((err) => {
      console.error('Error fetching contacts:', err);
      res.status(500).json({ message: 'Server error retrieving contacts' });
    });
};

const getContactById = (req, res, next) => {
  const id = req.params.id;

  Contact.findById(id)
    .then((contact) => {
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.status(200).json(contact);
    })
    .catch((err) => {
      console.error('Error fetching contact by ID:', err);
      res.status(500).json({ message: 'Server error retrieving contact' });
    });
};

module.exports = {
  getContacts,
  getContactById
};