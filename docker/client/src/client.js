var protocol = require('./protocol');

var moment = require('moment');

var request = require('request');

//############################## TEST JSON ##############################
const optionsGetJson = {
    url: 'http://' + protocol.IP + ':' + protocol.PORT,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept-Charset': 'utf-8'
    }
};

request(optionsGetJson, function(error , response, body){
    if(error)
        if(res.statusCode !== 200 ) console.log('Error :') //etc

    //Request body..
    console.log("GET REQUEST JSON : ");
    console.log(body);
});


//############################## TEST HTML ##############################
const optionsGetHtml = {
    url: 'http://' + protocol.IP + ':' + protocol.PORT,
    method: 'GET',
    headers: {
        'Content-Type': 'text/html',
        'Accept-Charset': 'utf-8'
    }
};

request(optionsGetHtml, function(error , response, body){
    if(error)
        if(res.statusCode !== 200 ) console.log('Error :') //etc

    //Request body..
    console.log("GET REQUEST : ");
    console.log(body);
});


//############################## TEST XML ##############################
const optionsGetXml = {
    url: 'http://' + protocol.IP + ':' + protocol.PORT,
    method: 'GET',
    headers: {
        'Content-Type': 'text/xml',
        'Accept-Charset': 'utf-8'
    }
};

request(optionsGetXml, function(error , response, body){
    if(error)
        if(res.statusCode !== 200 ) console.log('Error :') //etc

    //Request body..
    console.log("GET REQUEST : ");
    console.log(body);
});


//############################## TEST POST ##############################

var data = {
    json: { time: moment().add(2, 'hours') }
}

const optionsPost = {
    url: 'http://' + protocol.IP + ':' + protocol.PORT,
    method: 'POST',
    body: data,
    json: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept-Charset': 'utf-8'
    }
};

request.post(optionsPost, function(error, response, body){
    console.log("POST REQUEST : ");
    console.log(body);
});
