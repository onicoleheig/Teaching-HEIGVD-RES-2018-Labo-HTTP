var protocol = require('./protocol');

var moment = require('moment');
var bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser); //add middleware
var express = require('express');
var srv = express();

var diff = 0;

srv.use(bodyParser.urlencoded({ extended: false }));
srv.use(bodyParser.json());
srv.use(bodyParser.xml());

console.log("Waiting connection on port : " + protocol.PORT);

//when someone get /, return the current time
srv.get('/challenge-b/test1', (request, response) => {
    console.log("GET ");

    switch(request.headers['accept']) {
        case 'application/json':
            console.log("content-type -> json");
            response.json({
                "email": "olivier.nicolesoitnicoulaz@heig-vd.ch"
            });
            break;
        case 'text/html':
            console.log("content-type -> html");
            response.send("My email is <b>olivier.nicolesoitnicoulaz@heig-vd.ch</b>");
            break;
        case 'text/xml':
            console.log("content-type -> xml");
            response.status(406).send("please... dont ask XML we don't like it !");
            break;
        default:
            console.log("GET : content type not recognised");
    }
});

srv.listen(protocol.PORT);

/*
{ email: 'olivier.nicolesoitnicoulaz@heig-vd.ch', validationCode: '5b1789ee6a5ab70e8cc1f90b', clientIp: '10.192.93.45', challengeSuccessful: true }
 */
