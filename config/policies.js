
module.exports.policies = {

  '*' : "auth0Authenticated",
  
  LoginController : {
    login : true
  },

  CallbackController : {
    profile : "psport"
  },

  LogoutController : { 
    logout : true 
  }
 
};
