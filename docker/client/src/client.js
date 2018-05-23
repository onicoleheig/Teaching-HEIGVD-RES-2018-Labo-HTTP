var protocol = require('./protocol');

const http = require('http');

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