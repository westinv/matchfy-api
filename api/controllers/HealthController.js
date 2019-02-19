/**
 * HealthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    health : function(req,res){
        
        sails.log.info("server health has been required");
        var resposta = {
            health : true,
        }
        return res.status(200).send(resposta);   
        
    }
    
};

