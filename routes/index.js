const routes = require('express').Router();
const controller = require('../controllers')

routes.get('/', controller.helloWorld);

module.exports = routes