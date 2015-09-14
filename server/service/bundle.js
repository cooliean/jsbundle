var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/', function(req, res, next) {
  var name = req.body.name || '';
  if(!name){
    return res.send({
      status:0
    });
  }

  try{
    var data = fs.readFileSync('public/jsbundle/' + name);
    fs.writeFileSync('public/bundle/main.jsbundle', data);
    fs.writeFileSync('public/version.json', JSON.stringify({
      name: name.split('@_')[1]
    }));
    return res.send({
      status:1
    });
  }catch(e){
    return res.send({
      status:0
    });
  }
});

module.exports = router;