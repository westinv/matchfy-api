/**
 * LogoutController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    logout : function(req,res){
        sails.log.info("LogoutController!!");
        return res.redirect("https://testeprojeto.auth0.com/v2/logout"); // URL de redirecionamento resposável pelo logout, própria do Auth0
    }
};

