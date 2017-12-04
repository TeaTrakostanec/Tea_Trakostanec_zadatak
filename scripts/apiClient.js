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
          dataType: 'json',
          success: function(data) {
      }

      });
    }

    return {
        login: login
    }

})();

apiClient.login();
