const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Accessory   = require('../models/Accessory').Accessory;

/**
 * Functionality for this route:
 *  C   POST    /Accessory/        Create a new Accessory
 *  R   GET     /Accessory         Gets an array of all Accessories
 *  R   GET     /Accessory/:id     Get a single Accessory, by ID
 *  U   PUT     /Accessory/:id     Update a single Accessory, by id
 *  D   DELETE  /Accessory/:id     Delete a single Accessory, by ID
 */

// GET an array of all Accessory change
router.get('/', (req, res) => {
  return mongoose
    .model('Accessory')
    .find({})
    .then (accessories => res.json(accessories))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  // GET a single Accessory by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Accessory')
    .findOne({_id: req.params.id})
    .then (accessory => res.json(accessory))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  // GET a single Accessory by result
  router.get('/accessory/:id [object%20Object]', (req, res) => {
    return mongoose
      .model('Accessory')
      .findOne({_id: req.params.id})
      .then (accessory => res.json(accessory))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

// POST Create a new Accessory
router.post('/', (req, res) => {
  return new Accessory({
    img     : req.body.img,
    name    : req.body.name,
    description    : req.body.description,
    colour    : req.body.colour,
    price    : req.body.price,
  })
  .save()
  .then (accessory => Accessory.populate(accessory, {path: '_id'}))
  .then (accessory => res.json(accessory))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a Accessory with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Accessory
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a Accessory
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Accessory
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        img     : req.body.img,
        name    : req.body.name,
        description    : req.body.description,
        colour    : req.body.colour,
        price    : req.body.price,
      }},
      {new: true}
    )
    .then (accessory => Accessory.populate(accessory, {path: '_id'}))
    .then (accessory => res.json(accessory))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;