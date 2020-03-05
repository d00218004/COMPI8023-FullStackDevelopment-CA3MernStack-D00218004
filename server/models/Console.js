const mongoose = require('mongoose');
const validator = require('validator');

const SchemeConfig = {
  timestamps: true,
  skipVersioning: true
};
const ConsoleSchema = new mongoose.Schema({

  img: {
    type: String,
    required: true,
    validator: value => !validator.isEmpty(value)
  },

  name: {
    type: String,
    required: true,
    validator: value => !validator.isEmpty(value)
  },

  description: {
    type: String,
    required: true,
    validator: value => !validator.isEmpty(value)
  },

  storage: {
    type: String,
    required: true,
    validator: value => !validator.isEmpty(value)
  },

  price: {
    type: String,
    required: true,
    validator: value => !validator.isEmpty(value)
  }

}, SchemeConfig);

module.exports.Console = mongoose.model('Console', ConsoleSchema);