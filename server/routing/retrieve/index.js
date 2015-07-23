var router = require('express').Router();
var database = require('../../database');

router.get('/get/:column/:term', function(req, res) {
  console.log(database.get(req.params.column, req.params.term))
  res.end();
})

module.exports = router
