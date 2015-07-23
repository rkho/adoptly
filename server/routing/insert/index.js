var router = require('express').Router();
var database = require('../../database');

router.post('/post', function(req, res) {
  var user = req.body.user;
  var vendor = req.body.vendor;
  var duration = req.body.duration;

  if (!user || !vendor || !duration) {
    console.log('Not a valid request! Either the name or time are missing');
  } else {
    res.send( database.addEntry({ user: user, vendor: vendor, duration: duration }) )
  }
})

module.exports = router;
