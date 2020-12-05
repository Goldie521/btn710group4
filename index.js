
function myfunc(){

var oktaSignIn = new OktaSignIn({
    baseUrl: "https://dev-8973852.okta.com",
    clientId: "0oa1e84taO4oZ9YCx5d6",
    authParams: {
      issuer: "default",
      responseType: ['token', 'id_token'],
      display: 'page'
    }
  });

  if (oktaSignIn.token.hasTokensInUrl()) {
    oktaSignIn.token.parseTokensFromUrl(
      // If we get here, the user just logged in.
      function success(res) {
        var accessToken = res[0];
        var idToken = res[1];

        oktaSignIn.tokenManager.add('accessToken', accessToken);
        oktaSignIn.tokenManager.add('idToken', idToken);

        window.location.hash='';
        
        $("#messageBox").html("");
        var $input = $('<a href="https://firebasestorage.googleapis.com/v0/b/btn710group4.appspot.com/o/Deliverable3Report.docx?alt=media&token=d70647cd-8b0d-4c04-8c49-260f8f969edd" target="_blank"><input type="button" value="Click here for report" /></a>');
        $input.appendTo($("body"));
        
        var $input = $('<br></br>');
        $input.appendTo($("body"))
        
        var $input = $('<a href="https://www.youtube.com/watch?v=8t9h25DNNgU" target="_blank"><input type="button" value="Click here for video" /></a>');
        $input.appendTo($("body"));
    },
      function error(err) {
        console.error(err);
      }
    );
  } else {
    oktaSignIn.session.get(function (res) {
      // If we get here, the user is already signed in.
      if (res.status === 'ACTIVE') {
        $("#messageBox").html("");
       var $input = $('<a href="https://firebasestorage.googleapis.com/v0/b/btn710group4.appspot.com/o/Deliverable3Report.docx?alt=media&token=6ddf3234-d2ac-47cc-8763-8f45a774bc3c" target="_blank"><input type="button" value="Click here for report" /></a>');
        $input.appendTo($("body"));

        var $input = $('<br></br>');
        $input.appendTo($("body"))

        var $input = $('<a href="https://www.youtube.com/watch?v=8t9h25DNNgU" target="_blank"><input type="button" value="Click here for video" /></a>');
        $input.appendTo($("body"));
       return;
      }
      oktaSignIn.renderEl(
        { el: '#okta-login-container' },
        function success(res) {},
        function error(err) {
          console.error(err);
        }
      );
    });
  }
}
