var protocol = require('./protocol');

var moment = require('moment');
var bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
var express = require('express');
var srv = express();

var diff = 0;

srv.use(bodyParser.urlencoded({ extended: false }));
srv.use(bodyParser.json());
srv.use(bodyParser.xml());

console.log("Waiting connection on port : " + protocol.PORT);

//when someone get /, return the current time
srv.get('/', (request, response) => {
    console.log("GET " + request.body);

    switch(request.headers['accept']) {
        case 'application/json':
            console.log("content-type -> json");
            response.json({
                "Current time": moment().add(diff).format('LTS')
            });
            break;
        case 'text/html':
            console.log("content-type -> html");
            response.send("<html>\n" +
                "<header></header>\n" +
                "\t<body>\n" +
                "\t\t<div>" + moment().add(diff).format('LTS') + "</div>\n" +
                "\t</body>\n" +
                "</html>");
            break;
        case 'text/xml':
            console.log("content-type -> xml");
            response.send("<time>" + moment().add(diff).format('LTS') + "</time>");
            break;
        default:
            console.log("GET : content type not recognised");
    }
});

//when someone get /, return the current time
srv.post('/', (request, response) => {
    console.log("POST " + request.body);

    switch(request.headers['content-type']) {
        case 'application/json':
            console.log("content-type -> json");
            postDate = moment(request.body.json.time);
            currentDate = moment();
            diff = postDate.diff(currentDate);

            response.json({
                "Current-time": moment().add(diff).format('LTS')
            });

            console.log(request.body, request.text);
            break;
        case 'text/xml':
            console.log("content-type -> xml");
            console.log(request.body);

            response.send("TEST");
            break;
        default:
            console.log("POST : content type not recognised");
    }

});

srv.listen(protocol.PORT);