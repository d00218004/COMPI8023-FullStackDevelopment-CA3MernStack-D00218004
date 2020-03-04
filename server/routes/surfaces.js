const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Surface   = require('../models/Surface').Surface;

/**
 * Functionality for this route:
 *  C   POST    /Surfaces/        Create a new Surface
 *  R   GET     /Surfaces         Gets an array of all Surfaces
 *  R   GET     /Surfaces/:id     Get a single Surface, by ID
 *  U   PUT     /Surfaces/:id     Update a single Surface, by id
 *  D   DELETE  /Surfaces/:id     Delete a single Surface, by ID
 */

// GET an array of all Surfaces change
router.get('/', (req, res) => {
    return mongoose
      .model('Surface')
      .find({})
      .then (surfaces => res.json(surfaces))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single Surface by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Surface')
    .findOne({_id: req.params.id})
    .then (surface => res.json(surface))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new Surface
router.post('/', (req, res) => {
  return new Surface({
    img     : req.body.img,
    name    : req.body.name,
    description    : req.body.description,
    size    : req.body.size,
    colour  : req.body.colour,
    memory  : req.body.memory,
    storage : req.body.storage,
    CPU     : req.body.CPU,
    price   : req.body.price,
  })
  .save()
  .then (surface => Surface.populate(surface, {path: '_id'}))
  .then (surface => res.json(surface))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a Surface with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Surface
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a Surface
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Surface
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        img     : req.body.img,
        name    : req.body.name,
        description    : req.body.description,
        size    : req.body.size,
        colour  : req.body.colour,
        memory  : req.body.memory,
        storage : req.body.storage,
        CPU     : req.body.CPU,
        price   : req.body.price,
      }},
      {new: true}
    )
    .then (surface => Surface.populate(surface, {path: '_id'}))
    .then (surface => res.json(surface))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;