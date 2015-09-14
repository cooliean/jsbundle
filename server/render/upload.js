var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('upload', {
    user: req.session.user || '',
    headerTitle: '上传'
  });
});

module.exports = router;
