
const request = require("request");

module.exports = function(callback){

  var options = { 
    method: 'POST',
    url: 'https://projetosails.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: '{"client_id":"XONw0GvXaGIHNij6erFuexNMD11H2jEw","client_secret":"Yh7F0IWQxBFVbJLnB79ecDXtHzTVInDUKHv_jfP0y8XjR9f3VsNHjX3ghuGhtN69","audience":"https://projeto/api","grant_type":"client_credentials"}' 
  };
  
    request(options, function (error, response, body) {
      callback(JSON.parse(body).access_token);
    });
};