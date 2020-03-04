const mongoose = require('mongoose');
const validator = require('validator');

const SchemeConfig = {
  timestamps: true,
  skipVersioning: true
};
const SurfaceSchema = new mongoose.Schema({

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

  size: {
    type: String,
    required: true,
    validator: value => !validator.isEmpty(value)
  },

  colour: {
    type: String,
    required: true,
    validator: value => !validator.isEmpty(value)
  },

  memory: {
    type: String,
    required: true,
    validator: value => !validator.isEmpty(value)
  },

  storage: {
    type: String,
    required: true,
    validator: value => !validator.isEmpty(value)
  },

  CPU: {
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

module.exports.Surface = mongoose.model('Surface', SurfaceSchema);