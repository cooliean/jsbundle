var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var files = fs.readdirSync('public/jsbundle');
  var textArr = JSON.parse(JSON.stringify(files));
  var items = [];
  for(var i in textArr){
    var arr = textArr[i].split('@_');
    var str = new Date(arr[0]).getFullYear() + '/';
    str += (parseInt(new Date(arr[0]).getMonth()) + 1) + '/';
    str += new Date(arr[0]).getDate() + '  ';
    str += new Date(arr[0]).getHours() + ':';
    str += new Date(arr[0]).getMinutes() + ':';
    str += new Date(arr[0]).getSeconds();
    items.push({
      time: str,
      version: arr[1],
      name: arr[2]
    });
  }

  res.render('index', {
    user: req.session.user || '',
    headerTitle: '列表',
    items: items,
    files: files
  });
});

module.exports = router;
