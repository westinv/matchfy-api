/**
 * EndpointController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    health : function(req,res){
        var resposta = {
            health : true
        }
        res.send(resposta);
    }

};

