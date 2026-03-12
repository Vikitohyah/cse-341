const routes = require('express').Router();
const controller = require('../controllers')

routes.get('/', controller.helloWorld);

routes.use('/contacts', require('./contacts'));

module.exports = routes