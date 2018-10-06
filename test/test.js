var http = require("http");

describe("Teste do Sails",function(){

    it("server health test",function(done){

        var config = {
            hostname : "localhost",
            path : "/v1/health",
            port : 1337,
            method : "GET",
            headers : {
                "Accept" : "application/json"
            }
        };

        http.get(config,function(res){
            res.on("data",function(body){
                var health = JSON.parse(body);
                if(health.health == true && res.statusCode == 200){
                    console.log("\nserver health test : Teste Ok!!");
                }
            });
        });
        done();
    });


});