var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

router.post('/', function(req, res, next) {
  if(req.session.user){
    var form = new formidable.IncomingForm();
    var UPLOAD_DIR = 'public/jsbundle/';
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.maxFields = 1000;
    form.uploadDir = UPLOAD_DIR;

    form.parse(req, function(err, fields, files) {
      if(!err){
        if(files.file.name.indexOf('jsbundle') < 0){
          fs.unlinkSync(files.file.path);
          return res.send({status:0});
        }
        console.log(files.file.name.split('@_').length);
        if(files.file.name.split('@_').length < 2){
          fs.unlinkSync(files.file.path);
          return res.send({status:0});
        }
        var name = UPLOAD_DIR + new Date() + '@_' + files.file.name;
        fs.renameSync(files.file.path, name);
        return res.send({status:1});
      }else{
        return res.send({status:0});
      }
    });
  }else{
    return res.send({status:0});
  }

});

module.exports = router;