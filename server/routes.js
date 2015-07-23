var router = require('express').Router();

router.use('/insert', require('./routing/insert'));

router.use('/retrieve', require('./routing/retrieve'));

module.exports = router;
