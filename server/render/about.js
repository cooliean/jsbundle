var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('about', {
    user: req.session.user || '',
    headerTitle: '关于'
  });
});

module.exports = router;
