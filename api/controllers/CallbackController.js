
function cadastrar(user,res){

    sails.log.info("Cadastro");

    //Insere os dados recebidos no banco
    const sql = "insert into usuarios( nome, email, idade, picture ) values('" + user.name + "','" + 
    user.email + "'," + Math.random() * 100 + ",'" + user.picture +"');";
    
    sails.getDatastore("banco_dados").sendNativeQuery(sql,(err,resul) => {
        
        if( err ){
            sails.log.info( err );
            return res.json({ cadastro : false, err : err });//Retorna um json informando que os dados foram cadastrados/inseridos no banco
        }
        else {
            sails.log.info(resul);
            return res.json({ cadastro : true });//Retorna que ocorreu um erro e não foi possível realizar o cadastro/inserir no banco
        }
    });
}

module.exports = {
    
    profile : function(req,res) {
        
        const user = req.body.data;
        
        sails.log.info("callback");
    
        const sql = "select email from usuarios where email = '" + user.email + "'";
        sails.getDatastore("banco_dados").sendNativeQuery(sql,(err,resul)=>{

            if( err ) {
                sails.log.info( err );
                return res.json({ cadastro : false, err : err });
            }
            else {
                sails.log.info( resul );
                if( resul.rowCount == 0 )
                    cadastrar(user,res);
                else
                    return res.json({ cadastro : true });
            }
        });  
    }
};

