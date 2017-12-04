let apiClient = (function(){
  const rootURL = 'http://chat.dings.solutions' ;

    function login (){
      $.ajax({
          url: rootURL + '/auth/login',
          type: 'POST',
          data: {
            phone: '385965590665 ',
            password: 'secret'
          },
          dataType: 'jsonp',
          jsonp: "callback",
          success: function(data) {
          console.log(data);
      }

      });
    }
     function callback(data){
       alert('a');
     }

    return {
        login: login
    }

})();

apiClient.login();
