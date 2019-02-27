/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  "GET /v1/health" : "HealthController.health",
  "GET /v1/login" : "LoginController.login",
  "GET /v1/callback" : "CallbackController.profile",
  "GET /v1/logout" : "LogoutController.logout",
  "GET /v1/testeBanco" : "TestController.consulta"
};
