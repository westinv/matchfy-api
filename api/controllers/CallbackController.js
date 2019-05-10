
function cadastrar(req,res){

    //Insere os dados recebidos no banco
    const sql = "insert into usuarios( nome, email, idade, picture ) values('" + req.user.displayName + "','" + 
    req.user.emails[0].value + "'," + Math.random() * 100 + ",'" + req.user.picture +"');";
    
    sails.getDatastore("banco_dados").sendNativeQuery(sql,(err,resul) => {
        
        if( !err ){
            sails.log.info(resul);
            return res.json({ cadastrar : true });//Retorna um json informando que os dados foram cadastrados/inseridos no banco
        }
        else {
            throw res.json({ cadastrar : false });//Retorna que ocorreu um erro e não foi possível realizar o cadastro/inserir no banco
        }
    });
}

module.exports = {
    
    profile : function(req,res){
        
        sails.log.info("callback");
        
        //Testa se há uma conta associada com o e-mail recebido
        const sql = "select nome from usuarios where email = " +"'victorelioenay@hotmail.co'" ;
        sails.getDatastore('banco_dados').sendNativeQuery(sql,(err,resul) => {
            
            if( resul.rowCount == 0 ){
                cadastrar(req,res);//Caso não exista, realiza o cadastro do mesmo no banco
            }
            else {
                res.json({ cadastrar : true });//Caso exista, retorna um json informando sobre a existência de um cadastro
            }
        });
    }
};

