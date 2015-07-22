var router = require('express').Router();

router.use('/insert', require('./routing/insert'));

module.exports = router;
