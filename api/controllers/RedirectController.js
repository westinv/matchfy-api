/**
 * RedirectController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    redirecionar : function(req,res){
        console.log("Client redirected to /welcome!!");
        res.redirect("/welcome");
    }

};

