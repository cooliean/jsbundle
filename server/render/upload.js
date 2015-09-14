var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res, next) {
  var files = fs.readdirSync('public/jsbundle');
  var items = [];
  for(var i in files){
    var arr = files[i].split('@_');
    items.push(arr[1]);
  }
  res.render('upload', {
    user: req.session.user || '',
    headerTitle: '上传',
    items: items
  });
});

module.exports = router;
