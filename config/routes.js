
module.exports.routes = {

  "GET /v1/health" : "HealthController.health",
  "POST /v1/callback" : "CallbackController.profile",
  "POST /v1/like" : "LikeController.like",
  "POST /v1/chatrequest" : "",
  "POST /v1/match" : "MatchController.match" 
};
