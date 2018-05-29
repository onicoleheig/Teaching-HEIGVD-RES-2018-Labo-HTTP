var protocol = require('./protocol');

var moment = require('moment');
var bodyParser = require('body-parser');
var express = require('express');
var srv = express();

var date = new Date();
var diff = 0;

srv.use(bodyParser.urlencoded({ extended: false }));
srv.use(bodyParser.json());

console.log("Waiting connection on port : " + protocol.PORT);

//when someone get /, return the current time
srv.get('/', (request, response) => {
    response.json({
        "Current time": moment().add(diff).format('LTS')
    });
});

//when someone get /, return the current time
srv.post('/', (request, response) => {

    postDate = moment(request.body.json.time);
    currentDate = moment();
    diff = postDate.diff(currentDate);

    date = moment().add(diff);

    response.json({
        "Current time": date.format('LTS')
    });
});

srv.listen(protocol.PORT);