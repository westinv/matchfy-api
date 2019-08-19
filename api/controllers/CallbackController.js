
function cadastrar(req,res){

    const user = JSON.parse(req.allParams().data); //Converte os dados recebido para um Objeto JS
    sails.log.info(user);

    //Insere os dados recebidos no banco
    const sql = "insert into usuarios( nome, email, idade, picture ) values('" + user.name + "','" + 
    user.email + "'," + Math.random() * 100 + ",'" + user.picture +"');";
    
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
    
    profile : function(req,res) {
        const user = JSON.parse(req.body.data);
        
        sails.log.info("callback");
        const sql = "select email from usuarios where email = " + user.email;
        sails.getDatastore("banco_dados").sendNativeQuery(sql,(err,result)=>{
            
                cadastrar(req,res);//Chama a função de cadastro
               

        });
            

            

        
       
       
         
    }
};

