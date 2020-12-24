const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const error = require('../middleware/error');

module.exports = app => {
  app.use(express.json());
  app.use('/api/auth', require('./auth'));
  app.use('/api/projects', require('./projects'));
  
  app.use(error);
};
