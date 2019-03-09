
const requisicao = require("http");
const getToken = require("./req_access_token");

var options = {

    hostname: "localhost",
    port: 1337,
    path:"/v1/health",
    method: "POST",
    headers : {
        "Accept" : "application/json",
        "Authorization" : ""
    }
}

var time = 0;
var monitorar;

function setOptions (token){
    options.headers.Authorization = "Bearer " + token;
}

setInterval( () => { 
    
    if( time == 0 ) {
        getToken(setOptions);
        monitorar = setInterval(monitoracao,3000);
    }

    time += 1;
    
    if( time == 30000 ){
        clearInterval(monitorar);
        time = 0;
    }
}, 1000);

function monitoracao(){
   
    const client = requisicao.request( options, (res) => {
        
        res.on("data", (data) => {

            healthStatus = res.statusCode;
            healthResponse = JSON.parse(data).health;
            console.log(healthResponse);
            if ( healthResponse !== true && healthStatus !== 200 ){
                throw "503";
            }
        });        
    });
    
    client.on("error", (error) => { throw "503" });

    client.end();
}