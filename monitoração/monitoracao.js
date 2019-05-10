
const requisicao = require("http");
const getToken = require("./req_access_token");

var Options = {

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

function setOptions (token){ //Função que recebe a Token e insere no options
    Options.headers.Authorization = "Bearer " + token;
}

setInterval( async () => { //Função async que irá tratar a monitoração da API 
    
    if( time == 0 ) {
       await getToken(setOptions);
        monitorar = setInterval(monitoracao,3000);
    }

    time += 1;
    
    if( time == 30000 ){
        clearInterval(monitorar);
        time = 0;
    }
}, 1000);

function monitoracao(){
   
    const client = requisicao.request( Options, (res) => {//Função que requisita o v1/health
        
        res.on("data", (data) => { //Trata os dados recebidos da API

            healthStatus = res.statusCode;
            healthResponse = JSON.parse(data).health;
            console.log(healthResponse);
            if ( healthResponse !== true && healthStatus !== 200 ){
                throw "503";//Tratamento de erros da API
            }
        });        
    });
    
    client.on("error", (error) => { console.log("503"); });//Tratamento de erros da conexão 

    client.end();//Executa a requisição
}