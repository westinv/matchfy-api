/* Teste de Banco de Dados com o PostgreSql */
module.exports = {

    consulta: async (req,res) => {

        const sql = "select * from usuarios;";
        
        await sails.getDatastore("banco_dados").sendNativeQuery(sql,function(err,resul){
            if(err){
                sails.log.info(err);
            }
            else {
                sails.log.info(resul["rows"][0].nome);
                res.json(resul);
            }
        });
    }

};

