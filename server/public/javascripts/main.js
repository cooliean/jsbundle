(function($, global, undefined){

  /*登录*/
  $('.login_btn').on('click', function(){
    var username = $('#username').val();
    var password = $('#password').val();
    $.post('/login', {
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


  /*修改底部active*/
  function addActive(name){
    $('#index_menu i').removeClass('icon_active');
    $('#index_menu .icon_text').removeClass('icon_active');

    $('#upload_menu i').removeClass('icon_active');
    $('#upload_menu .icon_text').removeClass('icon_active');

    $('#about_menu i').removeClass('icon_active');
    $('#about_menu .icon_text').removeClass('icon_active');

    console.log(name);
    $('#' + name + '_menu i').addClass('icon_active');
    $('#' + name + '_menu .icon_text').addClass('icon_active');
  }





})($, window,undefined);