const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const AccessorySchema  = new mongoose.Schema({

    img: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    name: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    memory: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    colour: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    price: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    }

  }, SchemeConfig);

  module.exports.Accessory = mongoose.model('Accessory', AccessorySchema);