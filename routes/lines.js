
const express = require('express');
const router = express.Router();
const lines = require('../services/line');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await lines.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});


router.get('/:id', async function(req, res, next) {
    try {
      res.json(await lines.getById(req.params.id));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

module.exports = router;
