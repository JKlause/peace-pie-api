const router = require('express').Router();
const Sandwich = require('../models/sandwich');

router
  .post('/', (req, res, next) => {
    Sandwich.create(req.body)
      .then(sandwich => res.json(sandwich))
      .catch(next);
  });

module.exports = router;