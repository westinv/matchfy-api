
const requisicao = require("http");

const options = {

    hostname: "localhost",
    port: 1337,
    path:"/v1/health",
    method: "GET",
    headers: {
        "Accept" : "application/json"
    }
}

setInterval(monitoracao,3000);

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
    
    client.on("error", (error) => { console.log("ERRO 503"); });

    await client.end();
   
}