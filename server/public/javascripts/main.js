(function($, global, undefined){

  /*登录*/
  $('.login_btn').on('click', function(){
    var username = $('#username').val();
    var password = $('#password').val();
    $.post('/service/login', {
      username: username,
      password: password
    }, function(data){
      if(data.status){
        global.location.href = '/index';
      }else{
        alert('失败');
      }
    });
  });


  /*修改底部按钮的样式*/
  var url = global.location.href;
  if(url.indexOf('index') > 0){
    addActive('index');
  }
  if(url.indexOf('upload') > 0){
    addActive('upload');
  }
  if(url.indexOf('about') > 0){
    addActive('about');
  }

  /*文件上传类型校验*/
  $('#code_file').on('change', function(){
    var file = this.files[0];
    var name = file.name;
    var size = file.size;
    var type = file.type;
    $('#file_name').text(name);

    var formData = new FormData($('form')[0]);
    $.ajax({
      url: "/service/upload",
      type: "POST",
      data: formData,
      enctype: 'multipart/form-data',
      processData: false,
      contentType: false,
      success: function(data){
        console.log( data );
      }
    });

  });

  /*修改底部active*/
  function addActive(name){
    $('#index_menu i').removeClass('icon_active');
    $('#index_menu .icon_text').removeClass('icon_active');

    $('#upload_menu i').removeClass('icon_active');
    $('#upload_menu .icon_text').removeClass('icon_active');

    $('#about_menu i').removeClass('icon_active');
    $('#about_menu .icon_text').removeClass('icon_active');

    $('#' + name + '_menu i').addClass('icon_active');
    $('#' + name + '_menu .icon_text').addClass('icon_active');
  }

})($, window,undefined);