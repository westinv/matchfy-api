const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://projetosails.auth0.com/.well-known/jwks.json`
  }),

  audience: 'https://projeto/api',
  issuer: `https://projetosails.auth0.com/`,
  algorithms: ['RS256']
});

module.exports = checkJwt;