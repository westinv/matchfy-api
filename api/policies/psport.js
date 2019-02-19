
var passport = require("passport");

module.exports = passport.authenticate("auth0",{scope : [ "email", "profile"], failureRedirect : "/v1/login" });