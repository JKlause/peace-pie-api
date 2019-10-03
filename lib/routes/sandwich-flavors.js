const router = require('express').Router();
const SandwichFlavor = require('../models/sandwich-flavor');

router
  .post('/', (req, res, next) => {
    SandwichFlavor.create(req.body)
      .then(sandwichFlavor => res.json(sandwichFlavor))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    SandwichFlavor.find(req.body)
      .then(sandwichFlavors => res.json(sandwichFlavors))
      .catch(next);
  });

module.exports = router;