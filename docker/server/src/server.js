var protocol = require('./protocol');

var moment = require('moment');
var express = require('express');
var srv = express();

console.log("Waiting connection on port : " + protocol.PORT);

//when someone get /, return the current time
srv.get('/', (request, response) => {
    response.json({
        "Current time": moment().format('LTS')
    });
})

srv.listen(protocol.PORT);