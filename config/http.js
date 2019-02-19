
module.exports.http = {

  middleware: {

     order: [
    //   'cookieParser',
    //   'session',
      'bodyParser',
      "passport",
    //   'compress',
    //   'poweredBy',
    //   'router',
    //   'www',
    //   'favicon',
     ],
    
    
    passport : (function(){
      var passport = require("passport");
      var Authstrategy = require("passport-auth0");

      var strategy = new Authstrategy({
          domain : "testeprojeto.auth0.com",
          clientID : "Z4mEVshc2hJzxVyUlZrCwLF1WJLkuApt",
          clientSecret : "DaneoUtkCUwsFSwRgpM_RhhY7BQwcj2_9FA6S4vefkCZ3cwjA6ddeAseyoDtUiSX",
          callbackURL : "/v1/callback",
          state : false
          },
          function( acessToken, refreshToken, extraParams, profile, done ){
          
              done(null,profile);
        
            });

      passport.use(strategy);

      passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
      passport.deserializeUser(function(user, done) {
        done(null, user);
      });

      return passport.initialize();
    })(),
    
  },

};
