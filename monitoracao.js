/* Necessita implementar um sistema para autenticação  */
const requisicao = require("http");
const getToken = require("request");

var options = {

    hostname: "localhost",
    port: 1337,
    path:"/v1/health",
    method: "GET",
    headers : {
        "Accept" : "application/json",
        "Authorization" : ""
    }
   
}

var time = 0;
var monitorar;

setInterval( () => { 
    
    if( time == 0 ) {
        getToken({
            method: 'POST',
            url: 'https://projetosails.auth0.com/oauth/token',
            headers: { 'content-type': 'application/json' },
            body: '{"client_id":"XONw0GvXaGIHNij6erFuexNMD11H2jEw","client_secret":"Yh7F0IWQxBFVbJLnB79ecDXtHzTVInDUKHv_jfP0y8XjR9f3VsNHjX3ghuGhtN69","audience":"https://projeto/api","grant_type":"client_credentials"}'},
            (error,response,body) => { 
                options.headers["Authorization"] = "Bearer " + JSON.parse(body).access_token;
                console.log("\nNew Token: " + options.headers.Authorization + "\n");
                monitorar = setInterval(monitoracao,1500);
            }
        );
    }

    time += 2;
    
    if( time == 30000 ){
        clearInterval(monitorar);
        time = 0;
    }

}, 2000);

async function monitoracao(){
   
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

    await client.end();
   
}