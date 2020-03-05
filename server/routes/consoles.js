const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Console   = require('../models/Console').Console;

/**
 * Functionality for this route:
 *  C   POST    /Consoles/        Create a new Console
 *  R   GET     /Consoles         Gets an array of all Consoles
 *  R   GET     /Consoles/:id     Get a single Console, by ID
 *  U   PUT     /Consoles/:id     Update a single Console, by id
 *  D   DELETE  /Consoles/:id     Delete a single Console, by ID
 */

// GET an array of all Consoles change
router.get('/', (req, res) => {
    return mongoose
      .model('Console')
      .find({})
      .then (consoles => res.json(consoles))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single Console by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Console')
    .findOne({_id: req.params.id})
    .then (console => res.json(console))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new Console
router.post('/', (req, res) => {
  return new Console({
    img     : req.body.img,
    name    : req.body.name,
    description    : req.body.description,
    storage : req.body.storage,
    price   : req.body.price,
  })
  .save()
  .then (console => Console.populate(console, {path: '_id'}))
  .then (console => res.json(console))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a Console with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Console
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a Console
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Console
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        img     : req.body.img,
        name    : req.body.name,
        description    : req.body.description,
        storage : req.body.storage,
        price   : req.body.price,
      }},
      {new: true}
    )
    .then (console => Console.populate(console, {path: '_id'}))
    .then (console => res.json(console))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;