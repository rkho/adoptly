var router = require('express').Router();
var database = reuquire('../../database');

router.post('/post', function(req, res) {
  var name = req.body.name;
  var time = req.body.time;

  if (!name || !time) {
    console.log('Not a valid request! Either the name or time are missing');
  } else {
    database.addEntry({ vendor: name, duration: time })
  }
})

module.exports = router;
