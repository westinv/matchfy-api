
module.exports = {

    match : (req,res) => {

        const userIdade = 19;
        const c1 = 0.5/40.0;
        const c2 = 0.5/20.0;
        const lat = -21.783205, lon = -46.567724;

        const sql = "select * from usuarios order by ( abs( idade - " + userIdade + " )* " + c1 
        + " + earth_distance(ll_to_earth(lat, long),ll_to_earth(" + lat + "," + lon + ")) * " + c2 + " );" ;
        sails.getDatastore("banco_dados").sendNativeQuery(sql,(err,resul) => {

            if(!err){
                console.log( resul );
                res.json( resul );
            }
            else {
                console.log(err);
                res.json( err );
            }
        });

    }

};

