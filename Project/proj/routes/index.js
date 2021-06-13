var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/master', function(req, res, next) {
  res.render('master', { title: 'Express' });
});

module.exports = router;
