
module.exports = {
    
    profile : function(req,res){
        sails.log.info("callback");
        sails.log.info(req.user);
        /* var request = require("request");

        var options = { 
        method: 'POST',
        url: 'https://projetosails.auth0.com/oauth/token',
        headers: { 'Authorization': ' Bearer' }
        }
        request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        }); */

        return res.json(req.user);
    }

};

