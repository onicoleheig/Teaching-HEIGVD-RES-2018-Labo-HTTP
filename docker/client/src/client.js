var protocol = require('./protocol');

var moment = require('moment');

var request = require('request');

request.get('http://' + protocol.IP + ':' + protocol.PORT, function(error , response, body){
    if(error)
        if(res.statusCode !== 200 ) console.log('Error :') //etc

    //Request body..
    console.log("GET REQUEST : ");
    console.log(body);
});


var data = {
    json: { time: moment().add(2, 'hours') }
}
/*
request.post('http://' + protocol.IP + ':' + protocol.PORT, data, function(error, response, body){
    if(error) //TODO: handle err
        if(response.statusCode !== 200 ) console.log('Error :') //etc

    //Request body..
    console.log("POST REQUEST : ");
    console.log(body);
});
*/

request.post({
    url: 'http://' + protocol.IP + ':' + protocol.PORT,
    body: data,
    json: true
}, function(error, response, body){
    console.log("POST REQUEST : ");
    console.log(body);
});

request.get('http://' + protocol.IP + ':' + protocol.PORT, function(error , response, body){
    if(error)
        if(res.statusCode !== 200 ) console.log('Error :') //etc

    //Request body..
    console.log("GET REQUEST : ");
    console.log(body);
});



/* the old one...
const http = require('http')

//get request
http.get('http://' + protocol.IP + ':' + protocol.PORT, (resp) => {
    let data = '';

    //a chunk of a data is received
    resp.on('data', (chunk) => {
        data += chunk;
    });

    //the response is received, show it to the terminal
    resp.on('end', () => {
        console.log(data);
    });
}).on("error", (err) => {
    console.log("Error ! : " + err.message);
});

//post request
http.post('http://' + protocol.IP + ':' + protocol.PORT,
    { json: { newTime: moment().add(500) } },
    (resp) => {
    let data = '';

    //a chunk of a data is received
    resp.on('data', (chunk) => {
        data += chunk;
    });

    //the response is received, show it to the terminal
    resp.on('end', () => {
        console.log(data);
    });
}).on("error", (err) => {
    console.log("Error ! : " + err.message);
});
*/