var protocol = require('./protocol');

var moment = require('moment');

var request = require('request');

//#######################################################################
//############################## TEST GET ###############################
//#######################################################################

//############################## TEST JSON ##############################
const optionsGetJson = {
    url: 'http://' + protocol.IP + ':' + protocol.PORT,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
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
        'Accept': 'text/html',
        'Accept-Charset': 'utf-8'
    }
};

request(optionsGetHtml, function(error , response, body){
    if(error)
        if(res.statusCode !== 200 ) console.log('Error :') //etc

    //Request body..
    console.log("GET REQUEST HTML : ");
    console.log(body);
});


//############################## TEST XML ##############################
const optionsGetXml = {
    url: 'http://' + protocol.IP + ':' + protocol.PORT,
    method: 'GET',
    headers: {
        'Accept': 'text/xml',
        'Accept-Charset': 'utf-8'
    }
};

request(optionsGetXml, function(error , response, body){
    if(error)
        if(res.statusCode !== 200 ) console.log('Error :') //etc

    //Request body..
    console.log("GET REQUEST XML : ");
    console.log(body);
});

//#######################################################################
//############################## TEST POST ##############################
//#######################################################################

//############################## TEST JSON ##############################

var dataJson = { time: moment().add(2, 'hours')}

const optionsPostJson = {
    url: 'http://' + protocol.IP + ':' + protocol.PORT,
    method: 'POST',
    body: dataJson,
    json: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept-Charset': 'utf-8'
    }
};

request.post(optionsPostJson, function(error, response, body){
    console.log("POST REQUEST JSON : ");
    console.log(body);
});


//############################## TEST XML ###############################

var dataXml = '<time>' + moment().add(2, 'hours') + '</time>';

const optionsPostXml = {
    url: 'http://' + protocol.IP + ':' + protocol.PORT,
    method: 'POST',
    body: dataXml,
    headers: {
        'Content-Type': 'text/xml',
        'Accept-Charset': 'utf-8'
    }
};

request.post(optionsPostXml, function(error, response, body){
    console.log("POST REQUEST XML : ");
    console.log(body);
});

