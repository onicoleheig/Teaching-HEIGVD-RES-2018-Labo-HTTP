//P1

var protocol = require('./protocol');

var request = require('request');

console.log("Test");
var dataJson = {
    email: "olivier.nicolesoitnicoulaz@heig-vd.ch",
    token: "0987654321"
}

const optionsPostJson = {
    url:'http://novaflux.heig-vd.ch/questions',
    method: 'POST',
    body: dataJson,
    json: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept-Charset': 'utf-8'
    }
};

request.post(optionsPostJson, function(error, response, body){
    console.log("Réponse du serveur : ");
    console.log(body);
});

/*
{ email: 'olivier.nicolesoitnicoulaz@heig-vd.ch',
  tokenId: '5b17819d6a5ab7c364c1f8dd',
  validated: false }

  {"email":"olivier.nicolesoitnicoulaz@heig-vd.ch","token":"0987654321","hash":"5744300c425715a28cf81fabe6215f1e","validated":true}
*/