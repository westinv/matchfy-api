module.exports = {
  
    login : function(req,res){
        sails.log.info("LoginController!!");
        return res.redirect("/v1/callback");;
    }

};

