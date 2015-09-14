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
        window.location.href = '/index';
      }else{
        alert('失败');
      }
    });
  });

})($, window,undefined);