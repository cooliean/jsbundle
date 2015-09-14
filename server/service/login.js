var express = require('express');
var router = express.Router();
var users = require('./../config');



router.post('/', function(req, res, next) {
  var username = req.body.username || '';
  var password = req.body.password || '';

  for(var i in users){
    if(users[i].username === username && users[i].password === password){
      //login success
      req.session.user = username;
      return res.send({
        status: 1,
        username: username
      });
    }
  }
  //login fail
  return res.send({
    status: 0
  });
});

module.exports = router;