// Constants on top
const routes = require('express').Router();
const contactsController = require('../controllers/contacts');

// Routes to export
routes.get('/', contactsController.getContacts);
routes.get('/:id', contactsController.getContactById);

module.exports = routes;