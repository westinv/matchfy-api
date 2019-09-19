/**
 * LikeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    like : (req,res) => {

        sails.log.info("LikeController");

        const body = req.body.data;
        const user = body.user;
        const target = body.target;
        const sql = "insert into likes(user_id, like_id) values ( " + user.id + "," + target.id + " )";
        
        sails.getDatastore("banco_dados").sendNativeQuery(sql,(err,resul) => {
           
            if( !err ){
                sails.log.info(resul);
                return res.json({ like : true });
            }
            else {
                sails.log.info(err);
                return res.json({ like : false });
            }
        });
    },

    superLike : (req,res) => {

    } 
};

