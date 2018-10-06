var http = require("http");

describe("Teste de Aplicação",function(){

    var config = {
        hostname : "localhost",
        path : "",
        port : 1337,
        method : "GET",
        headers : {
            "Accept" : "application/json"
        }
    };

    it("server health is true?",function(done){
        
        config.path = "/v1/health";
        http.get(config,function(res){
          
            res.on("data",function(body){
    
                var health = JSON.parse(body);

                if(health.health == true && res.statusCode == 200){
                    console.log("\n     True!\n");
                }
                else{
                    console.log("\n     False!\n");
                }
            });
            done();
        });
    });

    it("not found ok?",function(done){
        
        config.path = "/";
        http.get(config,function(res){
            res.on("data",function(body){

                var response = JSON.parse(body);

                if(response.response == "not found"){
                    console.log("\n     Ok!\n");
                }
                else{
                    console.log("\n     Not!\n");
                }
            });
            done();
        });
    });


});