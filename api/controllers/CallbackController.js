
function cadastrar(req,res){

    const sql = "insert into usuarios( nome, email, idade, picture ) values('" + req.user.displayName + "','" + 
    req.user.emails[0].value + "'," + Math.random() * 100 + ",'" + req.user.picture +"');";
    
    sails.getDatastore("banco_dados").sendNativeQuery(sql,(err,resul) => {
        
        if( !err ){
            sails.log.info(resul);
            return res.json({ cadastrar : true });
        }
        else {
            throw res.json({ cadastrar : false });
        }
    });
}

module.exports = {
    
    profile : function(req,res){
        
        sails.log.info("callback");
        // sails.log.info(req.user);
        
        const sql = "select nome from usuarios where email = " +"'victorelioenay@hotmail.co'" ;
        sails.getDatastore('banco_dados').sendNativeQuery(sql,(err,resul) => {
            
            if( resul.rowCount == 0 ){
                cadastrar(req,res);
            }
            else {
                res.json({ cadastrar : true });
            }
        });
    }
};

