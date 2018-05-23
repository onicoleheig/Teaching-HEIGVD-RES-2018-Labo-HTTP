var protocol = require('./protocol');

var moment = require('moment');
var bodyParser = require('body-parser');
var express = require('express');
var srv = express();

var date = new Date();
var offset = 0;

srv.use(bodyParser.urlencoded({ extended: false }));
srv.use(bodyParser.json());

console.log("Waiting connection on port : " + protocol.PORT);

//when someone get /, return the current time
srv.get('/', (request, response) => {
    response.json({
        "Current time": moment().format('LTS')
    });
})

//when someone get /, return the current time
srv.post('/', (request, response) => {

    console.log("POST : " + moment(request.body.json.time).format('LTS'));

    date = moment().set({
        'hour': moment(request.body.json.time).format('hh'),
        'minute': moment(request.body.json.time).format('mm'),
        'second': moment(request.body.json.time).format('ss')
    });

    response.json({
        "Current time": d1.format('LTS')
    });
})

srv.listen(protocol.PORT);