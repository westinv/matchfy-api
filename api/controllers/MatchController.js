
module.exports = {

   match : (req,res) => {
        sails.log.info("MatchController");

        const sql = "select user_id,like_id from likes where user_id = " + target.id +",like_id = " + user.id +" ";
                
        sails.getDatastore("banco_dados").sendNativeQuery(sql,(err,resul) =>{
            if( !err ){
                const sql = "insert into match( user0_id, user1_id) values ( " + user.id + "," + target.id + " )";
                return res.json({match : true});
            }
            else{
                return res.json({match : false});
            }
        });
    } 

   /*  select : (req,res) => {
        const sql = "select user1_id from match";
    } */

};

