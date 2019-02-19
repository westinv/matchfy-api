
var passport = require("passport");

module.exports = passport.authenticate("auth0",{ failureRedirect : "/v1/login" });