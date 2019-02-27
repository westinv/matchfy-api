
module.exports.policies = {

  '*' : true,
  
  LoginController : {
    login : true
  },

  CallbackController : {
    profile : "psport"
  },

  LogoutController :{ logout : true }
 
};
